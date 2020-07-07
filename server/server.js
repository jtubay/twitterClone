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

isValidMew = (mew) => {
    return mew.name && mew.name.toString().trim() !== '' && 
    mew.content && mew.content.toString().trim() !== '';
}

app.post('/mews', (req, res) => {
    const {name, content} = req.body
    console.log(req.body)
    if(isValidMew(req.body)){
        const me = {
            name: name.toString(),
            content: content.toString()
        }

    }else {
        res.status(422);
        res.json({
            message: "hey, must have content"
        })
    }
})

app.listen(PORT, () => console.log(`listening on http://localhost:${PORT}`))