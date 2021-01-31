const path = require('path')
const express = require('express')
const fs = require('fs')
const app = express()
const PORT = process.env.PORT || 3000


app.get('/', (req, res) => {
    res.send("You've connected successfully!")
})



app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`)
})