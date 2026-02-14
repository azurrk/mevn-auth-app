const express = require('express')
const { getDB } = require('../../database')
const { authRequest } = require('../../methods/authRequest')


const router = express.Router()
const db = getDB()


router.get('/account/get/devices', authRequest, async (req, res) => {
    const { uid } = res.locals
    const data = await db.collection('sessions').find({uid}).toArray()
    res.status(200).json(data)
})

module.exports = router

