import { useState } from "react"
import "./Admin.css"

const Admin = ({ posts, setPosts }) => {
    const [title, setTitle] = useState("")
    const [teaser, setTeaser] = useState("")
    const [content, setContent] = useState("")
    const [image, setImage] = useState("")
    const [id, setId] = useState((posts.length) + 1)

    const submitForm = () => {
        const form = new FormData()
        form.append('title', title)
        form.append('teaser', teaser)
        form.append('content', content)
        form.append('image', image)

        fetch('http://localhost:9999/blog', {
            method: 'POST',
            body: form
        })
            .then(response => response.json())
            .then(data => setPosts(data))

        setId(id + 1)
        console.log(id)
    }

    return (<div className="adminWrapper">
        <header className="adminHeader">
            <h1>admin</h1>
            <a href="/">home</a>
        </header>
        <main className="adminMain">
            <h2>Write your new post:</h2>
            <input type="text" placeholder="post title" name="title" onChange={(e) => setTitle(e.target.value)} />
            <input type="text" placeholder="teaser text" name="teaser" onChange={(e) => setTeaser(e.target.value)} />
            <input type="textarea" placeholder="post content" name="content" onChange={(e) => setContent(e.target.value)} />
            <input type="file" name="image" onChange={(e) => setImage(e.target.files[0])} />
            <button onClick={submitForm}>Publish</button>
        </main>
    </div>);
}

export default Admin;