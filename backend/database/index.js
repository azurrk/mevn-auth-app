const { MongoClient } = require("mongodb");

const uri = "mongodb://localhost:27017/?replicaSet=rs"
const client = new MongoClient(uri)
let db = client.db('auth')

function connectToDB (cb) {
    client.connect()
    .then(() => {
        db = client.db('auth')
        cb()
    })
    .catch((err) => console.log(err))
}

function getDB () {
    return db
}

module.exports = {connectToDB, getDB}


