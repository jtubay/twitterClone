const express = require("express");
const app =  express()
const PORT = 5000;




app.get('/', (req, res) => {
    res.json({
        message: 'Meow!'
    })
})

app.listen(PORT, () => console.log(`listening on http://localhost:${PORT}`))