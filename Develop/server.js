const path = require('path')
const express = require('express')
const fs = require('fs')
const { notStrictEqual } = require('assert')
const app = express()
const PORT = process.env.PORT || 3000



app.get('/', (req, res) => {
    res.send("You've connected successfully!")
})

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/notes.html'))
})

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/index.html'))
})

// app.get('/api/notes', (req, res) => {
//     res.sendFile(db/)
// })



app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`)
})