const express = require('express')
const { getDB } = require('../../database')
const { comparePw } = require('../../methods/encPw')


const router = express.Router()
const db = getDB()

const responses = {
    error: {
        accNotExist: {
            error: true, 
            description: 'Account does not exist!',
            err: "err.account-not-exist"
        },
        wrongPw: {
            error: true, 
            description: 'Wrong password',
            err: "err.password-not-match"
        }
    }
}


router.post('/withemailandpassword', async (req, res) => {
    const { email, password } = req.body
    const account = await db.collection('accounts').findOne({email})
    if (!account) {
        res.status(404).json(responses.error.accNotExist)
        return
    }

    const passwordMatch = await comparePw(password, account.password)

    if (!passwordMatch) {
        res.status(401).json(responses.error.wrongPw)
        return
    }


    // TODO: Set expire date, refresh token
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


})

module.exports = router