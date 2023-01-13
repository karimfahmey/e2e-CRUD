const express = require('express')
const app = express()

const admin = require("firebase-admin")
const credential = require("./creds.json")

admin.initializeApp({
    credential: admin.credential.cert(credential)
})

const db = admin.firestore();

const PORT = process.env.PORT || 8080;

app.use(express.json())

app.use(express.urlencoded({extended: true}))


var postData = JSON.stringify({
    "email": "Malek@codepages.co",
    "firstName": "Malek",
    "lastName": "Karim"
});

app.post('/create', async (req, res) => {
    try {
        const userJson = {
            email: req.body.email,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
        }
        const response = db.collection("users").add(userJson)
        res.send(response)
    } catch(error) {
        req.send(error);
    }
})

app.get('/users', async (req, res) => {
    try {
        const usersRef = db.collection("users");
        const response = await usersRef.get();
        
        let responseArray = [];
        response.forEach( doc => {
            responseArray.push(doc.data());
        })
        res.send(responseArray);
    } catch(error) {
        req.send(error);
    }
})

app.get('/users/:id', async (req, res) => {
    try {
        const usersRef = db.collection("users").doc(req.params.id);
        const response = await usersRef.get();
        res.send(response.data());
    } catch(error) {
        req.send(error);
    }
})

app.delete('/delete/:id', async (req, res) => {
    try {
        const response = db.collection("users").doc(req.params.id).delete();
        res.send(response.data());
    } catch(error) {
        req.send(error);
    }
})

app.listen(PORT, () => {
    console.log(`Servier is running on PORT ${PORT}.`)
})