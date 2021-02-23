// GET /Comments - list all Comments
// POST/COmments - Make new Comments
// GET /Comments/:id -get specific Comment
// Patch/Comments/:id -update a Comments
// DELETE/COmments/:id -delete a Comments


// app configuration 
const express = require('express')
const path = require('path');
const methodOverride = require('method-override')
const app = express()
const { v4: uuidv4 } = require('uuid');
const port = 3000
app.set('view engine', 'ejs')
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))
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
        id: uuidv4(),
        name: req.body.user,
        text: req.body.newComment,
    })
    console.log(comments)
    res.redirect('http://localhost:3000/comments/');
    //res.render('E:/Web_dev_BootCamp/Restfull_Routes/RestFullComments/views/comments/index.ejs', { comments })
})
app.get('/comments/:id/edit', (req, res) => {
    const { id } = req.params;
    const foundComment = comments.find(c => c.id == id)
    res.render('E:/Web_dev_BootCamp/Restfull_Routes/RestFullComments/views/comments/edit.ejs', { PrvText: foundComment.text, id: id })

})
app.patch('/comments/:id', (req, res) => {
    const { id } = req.params
    const newComment = req.body.EditComment
    const foundComment = comments.find(c => c.id == id)
    foundComment.text = newComment;
    res.redirect('http://localhost:3000/comments/');
})
app.get('/comments/:id/delete', (req, res) => {
    const { id } = req.params;
    const foundComment = comments.find(c => c.id == id)
    comments.splice(comments.indexOf(foundComment), 1)
    res.render('E:/Web_dev_BootCamp/Restfull_Routes/RestFullComments/views/comments/index.ejs', { comments })

}) 