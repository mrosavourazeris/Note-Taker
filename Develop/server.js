const path = require('path')
const express = require('express')
const http = require('http')
const fs = require('fs')
const { notStrictEqual } = require('assert')
const app = express()
const PORT = process.env.PORT || 3000
const dbJson = require('./db/db.json')
const { json } = require('express')
const { v4: uuidv4 } = require('uuid')


app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())


// app.get('/', (req, res) => {
//     res.send("You've connected successfully!")
// })

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/notes.html'))
})

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/index.html'))
})

app.get('/api/notes', (req, res) => {
    res.sendFile(path.join(__dirname + '/db/db.json'))
})

app.post('/api/notes', (req, res) => {
    const newNote = req.body
    newNote.id = uuidv4()
    const allNotes = JSON.parse(fs.readFileSync(path.join(__dirname, '/db/db.json', 'utf8')))
    allNotes.push(newNote)
    fs.writeFileSync(path.join(__dirname, '/db/db.json', JSON.stringify(allNotes)))
    res.sendStatus(200)
})

app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`)
})