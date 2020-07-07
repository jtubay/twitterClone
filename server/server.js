const express = require("express");
const cors = require("cors")
const app =  express()
const PORT = 5000;
const mongoose = require("mongoose");

const Mews = require("./mewsModel")

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/meower", { useNewUrlParser: true });



app.use(cors())
app.use(express.json())


app.get('/', (req, res) => {
    res.json({
        message: 'Meow!'
    })
})

app.get('/mews', (req,res) => {
    Mews. find()
    .then(mews => {
        res.json(mews)
    })
})

isValidMew = (mew) => {
    return mew.name && mew.name.toString().trim() !== '' && 
    mew.content && mew.content.toString().trim() !== '';
}

app.post('/mews', (req, res) => {
    if(isValidMew(req.body)){
        
        Mews.create(req.body)
        .then(createdMew => {
            res.json(createdMew)
        })
    }else{
        console.log('err')
    }
})

app.listen(PORT, () => console.log(`listening on http://localhost:${PORT}`))