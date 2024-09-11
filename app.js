const express = require('express')
const mongoose = require('mongoose')
//const cors=require('cors')
const studentRouter = require('./route/student')


//const url = 'mongodb://127.0.0.1:27017/SAHITHI'
//const url = 'mongodb://127.0.0.1:27020,127.0.0.1:27021,127.0.0.1:27022/cbitit1?replicaSet=m101';
const url='mongodb+srv://sahithishettypendyala01:9182881363@crud.tz3mv.mongodb.net/?retryWrites=true&w=majority&appName=crud'
const app = express()
mongoose.connect(url)
const con = mongoose.connection


con.on('open', () =>
{
console.log('connected...')
})
//app.use(cors())
app.use(express.json())

app.use('/students',studentRouter)
app.listen(9000, () =>
{
console.log('Server started')
})
