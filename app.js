const express = require('express')
const app = express()

const expressLayout = require('express-ejs-layouts')



const env = require('dotenv').config()
const port=  5000 || process.env.PORT;

app.use(express.static('public'));


//template engine
app.set('view engine', 'ejs')
app.set('layout', './layouts/main')
app.use(expressLayout)


app.use('/', require('./routes/main'))


app.get('/',(req,res)=>{
    res.send("comming from app.js")
})
app.get('/about',(req,res)=>{
    res.render('about')
})

app.listen(port, ()=>{
    console.log(`server is running at http://localhost:${port}`)
})