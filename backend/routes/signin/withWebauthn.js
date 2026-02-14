const { generateAuthenticationOptions, verifyAuthenticationResponse } = require('@simplewebauthn/server')
const express = require('express')
const { getDB } = require('../../database')


const router = express.Router()
const db = getDB()


router.post('/webauthn/createcredentials', async (req, res) => {
    const { email } = req.body
    const account = await db.collection('accounts').findOne({email})
    if (!account) {
        res.status(404).json({error: true, description: 'Account does not exist!', err: "err.account-not-exist"})
        return
    }


    const authenticator = await db.collection('webauthn').findOne({uid: account.uid, type: 'authenticator'})
    if (!authenticator) {
        return res.status(404).json({error: true, description: 'Webauthn auth does not exist', err: "err.authenticator-not-registered"})
    }

    
    const options = generateAuthenticationOptions({
        allowCredentials: [{
            id: authenticator.authenticator.credentialID.read(0, authenticator.authenticator.credentialID.length()),
            type: 'public-key',
            transports: ['internal']
        }],
        userVerification: 'preferred',
  
    })

    await db.collection('webauthn').findOneAndDelete({uid: account.uid, type: 'currentchallenge'}) // deletes ch if exist
    await db.collection('webauthn').insertOne({
        type: 'currentchallenge',
        uid: account.uid,
        challenge: options.challenge
    })

    res.status(200).json(options)

})

router.post('/withwebauthn', async (req, res) => {
    const {authResponse, email} = req.body
    const account = await db.collection('accounts').findOne({email})
    if (!account) {
        res.status(404).json({error: true, description: 'Account does not exist!', err: "err.account-not-exist"})
        return
    }
    const chExist = await db.collection('webauthn').findOne({uid: account.uid, type: 'currentchallenge'})
    const authenticator = await db.collection('webauthn').findOne({uid: account.uid, type: 'authenticator'})

    if (!chExist) {
        return res.status(404).json({error: true, description: 'Webauthn error!', err: "err.webauthn-currentchallenge"})
    }
    if (!authenticator) {
        return res.status(404).json({error: true, description: 'Webauthn auth does not exist', err: "err.authenticator-not-registered"})
    }

    let verification;

    const authenticatorDevice = {
        credentialPublicKey: authenticator.authenticator.credentialPublicKey.read(0, authenticator.authenticator.credentialPublicKey.length()),
        credentialID: authenticator.authenticator.credentialID.read(0, authenticator.authenticator.credentialID.length()),
        counter: authenticator.authenticator.counter
    }
    try {
    verification = await verifyAuthenticationResponse({
        response: authResponse,
        expectedChallenge: chExist.challenge,
        expectedOrigin: 'http://localhost:8080',
        expectedRPID: 'localhost',
        authenticator: authenticatorDevice,
    });
    } catch (error) {
    return res.status(400).send({ error: error.message });
    }

    const { verified } = verification;

    
    if (verified) {
        const session = {
            uid: account.uid,
            loggedIn: new Date(),
            client: {
                userAgent: req.headers['user-agent'],
                ip: req.ip
            },
        }
        db.collection('sessions').insertOne(session)
        .then((r) => res.status(200).json({authId: r.insertedId}))
        .catch((err) => res.status(500).json(err))
    }
    else {
        res.status(401).json({error: true})
    }
})

module.exports = router

