// GET /Comments - list all Comments
// POST/COmments - Make new Comments
// GET /Comments/:id -get specific Comment
// Patch/Comments/:id -update a Comments
// DELETE/COmments/:id -delete a Comments


// app configuration 
const express = require('express')
const path = require('path');
const app = express()
const port = 3000
app.set('view engine', 'ejs')
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.get('/', (req, res) => {
    res.render('/comments/index')
})
app.use(express.static('public'))
app.listen(port, () => console.log(`Example app listening on port port!`))


// fake database
const comments = [

]
// functionality
app.get('/comments', (req, res) => {
    res.render('E:/Web_dev_BootCamp/Restfull_Routes/RestFullComments/views/comments/index.ejs', { comments })
})
app.post('/comments', (req, res) => {

    comments.push({
        id: Math.floor(Math.random() * 100) + 1,
        name: req.body.user,
        text: req.body.newComment,
    })
    res.redirect('http://localhost:3000/comments/');
    //res.render('E:/Web_dev_BootCamp/Restfull_Routes/RestFullComments/views/comments/index.ejs', { comments })
}) 