import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./ManageDiv.css"

const ManageDiv = ({ id, title, deletePost, posts, setPosts }) => {
    useEffect(() => {
        fetch('http://localhost:9999/api/blog')
            .then(response => response.json())
            .then(data => setPosts(data))
    }, [])

    return (<div className="manageDiv">
        <p>{title}</p>
        <Link to={`/blog/${id}`}>View Post</Link>
        <button onClick={deletePost}>Delete Post</button>
        <Link to={`/admin/edit/${id}`}>Edit Post</Link>
    </div>);
}

export default ManageDiv;

// DELETES FROM ARRAY POSTS, NOT FROM JSON, begs question: should delete be permanent, should there be a restore button?

// this results in manage and home pages both still showing 'deleted' content, even though the state of posts should have been updated with setPosts after deleting. should there be a higher level re-render?
// ^moved function to app.js