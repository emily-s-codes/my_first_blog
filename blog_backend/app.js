import express from 'express'
import cors from 'cors'
import multer from 'multer'
import morgan from 'morgan'
import fs from 'fs'

const PORT = 9999
const app = express()

const upload = multer({ dest: './public' })

app.use(morgan('dev'))
app.use(cors())
app.use('/public', express.static('./public'))

let blogPosts = []
fs.readFile('./data.json', (err, data) => {
    if (err) console.log(err)
    blogPosts = JSON.parse(data)
})

app.get('/api/blog', (_, res) => {
    res.json(blogPosts)
})

app.post('/api/blog', upload.single('image'), (req, res) => {
    console.log(req.body)
    const blogPost = {
        title: req.body.title,
        teaser: req.body.teaser,
        content: req.body.content,
        image: req.file.path
    }
    blogPosts.push(blogPost)
    fs.writeFile('./data.json', JSON.stringify(blogPosts), (err) => console.log(err))
    res.json(blogPosts)
})

app.put('/api/blog', (req, res) => {
    const updatedPost = {
        updatedTitle: req.body.title,
        updatedTeaser: req.body.teaser,
        updatedContent: req.body.content,
        updatedImage: req.body.path
    }
    console.log('put completed', req.body)
    // fs.readFile('./data.json', (err, data) => {
    //     if (err) console.log(err)
    //     blogPosts = JSON.parse(data)
    // })
    fs.writeFile('/data.json', JSON.stringify(updatedPost), (err) => {
        if (err) console.log('put writeFile', err)
    })
    res.json(updatedPost)
})

app.delete('/api/blog', (req, res) => {
    // while (blogPosts.length > 0) { // delete all posts
    //     blogPosts.pop();
    // }
    res.send('DELETE request called')
})

app.listen(PORT, () => console.log('running on port', PORT))