const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.json('this my web site')
})