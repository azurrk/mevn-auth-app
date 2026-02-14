const { ObjectId } = require("mongodb");
const { getDB } = require("../database");

const db = getDB()
async function authRequest (req, res, next) {
    const key = req.headers.authorization
    if (!key) {
        res.status(401).json({
            error: true,
            err: 'err.unauthorized'
        })
        return
    }

    
    var hex = /[0-9A-Fa-f]{6}/g;
    if (!hex.test(key)) {
        res.status(401).json({
            error: true,
            err: 'err.unauthorized.invalid-authId-format'
        })
        return
    }
    const session = await db.collection('sessions').findOne(new ObjectId(key))
    
    if (!session) {
        res.status(401).json({
            error: true,
            err: 'err.unauthorized.invalid-authId'
        })
        return
    }

    if (session.client.userAgent != req.headers['user-agent']) {
        res.status(401).json({
            error: true,
            err: 'err.unauthorized'
        })
        return
    }

    res.locals.uid = session.uid
    next()
    
}

module.exports = {authRequest}