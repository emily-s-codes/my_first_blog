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
fs.readFile('./data.js', (err, data) => {
    if (err) console.log(err)
    blogPosts = JSON.parse(data)
})

app.post('/blog', upload.single('image'), (req, res) => {
    console.log(req.body)
    const blogPost = {
        title: req.body.title,
        teaser: req.body.teaser,
        content: req.body.content,
        image: req.file.path
    }
    blogPosts.push(blogPost)
    fs.writeFile('./data.js', JSON.stringify(blogPosts), (err) => console.log(err))
    res.json(blogPosts)
})

app.get('/blog', (_, res) => {
    res.json(blogPosts)
})

app.listen(PORT, () => console.log('running on port', PORT))