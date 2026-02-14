const express = require('express')
const { ObjectId } = require('mongodb')
const { connectToDB, getDB } = require('./database')
const { authRequest } = require('./methods/authRequest')
const db = getDB()

const routes = require('./routes')


const app = express()

app.use(express.json())
app.set('trust proxy', true)

const cors = (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");

    next()
}

app.use(cors)

app.use('/v2', routes)

app.post('/v2/signout', authRequest, async (req, res) => {
    const { uid } = res.locals

    await db.collection('sessions').findOneAndDelete({uid})

    res.status(200).json({
        sessionDeleted: true
    })

})

app.get('/test', (req, res) => {
    res.status(200).json({
        hello: 'hey'
    })
})

app.get('/account/:id', async (req, res) => {
    const { id } = req.params

    const data = await db.collection('accounts').findOne(new ObjectId(id))
    if (!data) {
        res.status(404).json({error: true})
        return
    } 
    
    res.status(200).json(data)
})


app.get('/manageaccountpage', authRequest, async (req, res) => {
    const { uid } = res.locals
    const user = await db.collection('accounts').findOne({uid})
    res.status(200).json({
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        joined: user.meta.joined,
    })
})




app.listen('8000', () => {
    console.log("Server upaljen na portu 8000")
    connectToDB(() => console.log("Spojeno sa database"))
})