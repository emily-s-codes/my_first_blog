import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./EditPost.css"

const EditPost = ({ posts, setPosts }) => {
    const params = useParams()

    const [updatedTitle, setUpdatedTitle] = useState(posts[params.id - 1].title)
    const [updatedTeaser, setUpdatedTeaser] = useState(posts[params.id - 1].teaser)
    const [updatedContent, setUpdatedContent] = useState(posts[params.id - 1].content)
    const [updatedImage, setUpdatedImage] = useState("")
    const [edited, setEdited] = useState(null)

    const submitUpdate = () => {
        const form = new FormData()
        form.append('title', updatedTitle)
        form.append('teaser', updatedTeaser)
        form.append('content', updatedContent)
        form.append('image', updatedImage)

        fetch('http://localhost:9999/api/blog', {
            method: 'PUT',
            body: form
        })
            .then(response => {
                response.json()
                if (response.ok) setEdited('OK')
                else setEdited('NOK')
            })
            .then(data => setPosts(data))
        window.location.href = ("/")
    }

    const checkEdited = () => {
        if (edited) {
            if (edited === 'OK')
                return (
                    <section className="edit-success">
                        <h2>Success!</h2>
                        <Link to={`/blog/${params.id}`}>View Post</Link>
                        <Link to="/admin/manage">Back to Post Management</Link>
                    </section>
                )
            else return (
                <section className="edit-success">
                    <h2>Hm... something isn't quite right here.</h2>
                    <Link to="/admin/manage">Back to Post Management</Link>
                </section>
            )
        }
    }

    return (<section className="editPostsWrapper">
        {checkEdited()}
        <h1>input or edit content below</h1>
        <input type="text" value={updatedTitle} name="updatedTitle" onChange={(e) => setUpdatedTitle(e.target.value)} />
        <input type="text" value={updatedTeaser} name="updatedTeaser" maxLength="100" onChange={(e) => setUpdatedTeaser(e.target.value)} />
        <input type="textarea" value={updatedContent} name="updatedContent" onChange={(e) => setUpdatedContent(e.target.value)} />
        <input type="file" name="updatedImage" />
        <section className="afterEditLinks">
            <Link onClick={submitUpdate}>Publish</Link>
            <Link to="/admin/manage">Cancel</Link>
        </section>
    </section>);
}

export default EditPost;