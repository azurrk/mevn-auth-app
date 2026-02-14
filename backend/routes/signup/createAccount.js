const express = require('express')
const crypto = require('crypto')
const Joi = require('joi')
const { getDB } = require('../../database')
const { cryptPw } = require('../../methods/encPw')


const router = express.Router()
const db = getDB()

const pwRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/m
const schema = Joi.object({
    username: Joi.string(),
    email: Joi.string().email().required(),
    password: Joi.string().regex(new RegExp(pwRegex)).required(),
    firstName: Joi.string(),
    lastName: Joi.string(),
})


async function validateRequest (req, res, next) {
    const { value, error } = schema.validate(req.body)

    if (error) {
        res.status(400).json({
            error: true,
            description: 'Invalid request',
            err: 'err.invalid-request'
        })
        return
    }

    const accExist = await db.collection('accounts').findOne({email: value.email})
    if (accExist) {
        res.status(401).json({
            error: true,
            description: 'Account already exist. Try to login',
            err: 'err.account-exist'
        })
        return
    }
    if (value.username) {
        const usernameExist = await db.collection('accounts').findOne({username: value.username})
        if (usernameExist) {
            res.status(401).json({
                error: true,
                err: 'err.username'
            })
            return
        }
    }


    next()
}




router.post('/createaccount', validateRequest, async (req, res) => {

    req.body.password = await cryptPw(req.body.password)

    const uid = crypto.randomBytes(32).toString('hex')
    const joined = new Date()
    const account = {
        uid,
        ...req.body,
        meta: {
            joined
        },
        mfa: {
            enabled: false
        },
        defaultSignInMethod: "pw",
        availableSignInMethods: ['pw', 'magiclink']

    }

    db.collection('accounts').insertOne(account)
    .then((a) => {
        res.status(200).json(a)
    })
    .catch((err) => {
        res.status(500).json(err)
    })
})

module.exports = router