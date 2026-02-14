const express = require('express')
const { getDB } = require('../../database')


const router = express.Router()
const db = getDB()

const responses = {
    accNotFound: {
        next: "REGISTER_PASSWORD",
        accExist: false 
    },
    accFound: (defaultMethod, other) => {
        let r = {
            next: "PASSWORD_INPUT",
            accExist: true,
            availableLoginMethods: other
        }
        if (defaultMethod == 'pw') r.next = "PASSWORD_INPUT"
        if (defaultMethod == 'webauthn') r.next = "AUTH_WEBAUTHN"
        return r
    },
}

router.post('/findacc', async (req, res) => {
    const { value, type } = req.body
    if (!value && !type) {
        res.status(400).json({
            error: true,
            description: 'Invalid request',
            err: 'err.invalid-request'
        })
        return
    }

    if (type == 'email') {
        const data = await db.collection('accounts').findOne({email: value})
        if (data) {
            res.status(200).json(responses.accFound(data.defaultSignInMethod, data.availableSignInMethods))            
        }
        else {
            res.status(404).json(responses.accNotFound)
        }
       
        return
    }

})

module.exports = router