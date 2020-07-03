const express = require("express");
const cors = require("cors")
const app =  express()
const PORT = 5000;

app.use(cors())
app.use(express.json())


app.get('/', (req, res) => {
    res.json({
        message: 'Meow!'
    })
})

app.post('/mews', (req, res) => {
    console.log(req.body)
})

app.listen(PORT, () => console.log(`listening on http://localhost:${PORT}`))