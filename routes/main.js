const express = require('express')
const router = express.Router();


//Routes
router.get('/',(req,res)=>{
    const locals = {
        title:"node js blog",
        description: "simple blog created with node js"
    }

    res.render('index',{locals})
})

module.exports = router