import express from 'express'
import cors from 'cors'
import multer from 'multer'
import morgan from 'morgan'

const PORT = 9999
const app = express()

const upload = multer({ dest: './public' })

app.use(morgan('dev'))
app.use(cors())
app.use('/public', express.static('./public'))

const blogPosts = []

app.post('/blog', upload.single('image'), (req, res) => {
    console.log(req.body)
    const blogPost = {
        id: req.body.id,
        title: req.body.title,
        teaser: req.body.teaser,
        content: req.body.content,
        image: req.file.path
    }
    blogPosts.push(blogPost)

    res.json(blogPosts)
})

app.get('/blog', (_, res) => {
    res.json(blogPosts)
})

app.listen(PORT, () => console.log('running on port', PORT))