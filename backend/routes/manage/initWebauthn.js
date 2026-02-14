const express = require('express')
const { getDB } = require('../../database')
const { authRequest } = require('../../methods/authRequest')
const { generateRegistrationOptions, verifyRegistrationResponse } = require('@simplewebauthn/server')


const router = express.Router()
const db = getDB()


router.post('/initwebauthn/createcredentials', authRequest, async (req, res) => {
    const { uid } = res.locals
    const user = await db.collection('accounts').findOne({uid})

    const options = generateRegistrationOptions({
        rpName: "Test Webauthn Autentifikacija",
        rpID: 'localhost',
        userID: user.id,
        userName: user.firstName + ' ' + user.lastName,
        attestationType: 'none',
        excludeCredentials: []
    })

    await db.collection('webauthn').findOneAndDelete({uid, type: 'currentchallenge'}) // deletes ch if exist
    await db.collection('webauthn').insertOne({
        type: 'currentchallenge',
        uid,
        challenge: options.challenge
    })

    

    res.status(200).json(options)
})
router.post('/initwebauthn/savecredentials', authRequest, async (req, res) => {
    const response = req.body
    const { uid } = res.locals
    const user = await db.collection('webauthn').findOne({uid, type: 'currentchallenge'})

    let verification;
    try {
        verification = await verifyRegistrationResponse({
            response,
            expectedChallenge: user.challenge,
            expectedOrigin: 'http://localhost:8080',
            expectedRPID: 'localhost'
        })
    } catch (error) {
        return res.status(400).send({ error: error.message });
    }
    
    const { verified, registrationInfo } = verification;
    const { credentialPublicKey, credentialID, counter } = registrationInfo;


    
    const authenticator = {
        type: 'authenticator',
        uid,
        authenticator: {
            credentialID,
            credentialPublicKey,
            counter,
        }

    }

    await db.collection('webauthn').findOneAndDelete({uid, type: 'currentchallenge'}) 
    await db.collection('webauthn').insertOne(authenticator)

    return res.status(200).send({ verified });
    
})


module.exports = router
