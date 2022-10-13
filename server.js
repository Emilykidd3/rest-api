const express = require('express')
const app = express()
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/subscribers')
const db = mongoose.connection
db.on('error', () => console.log(error))
db.on('open', () => console.log('connected on database'))

app.listen(3000, () => console.log('server started'))