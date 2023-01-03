import { Link } from "react-router-dom";
import "./ManageDiv.css"

const ManageDiv = (props) => {
    // const deletePost = () => {
    //     console.log('frontend delete run')
    //     fetch(`http://localhost:9999/api/blog/${props.id}`, {
    //         method: "DELETE",
    //         headers: {
    //             'content-type': "application/json"
    //         }
    //     })
    //         .then(response => response.json())
    //         .then(data => props.setPosts(data))
    // }

    return (<div className="manageDiv">
        <p>{props.title}</p>
        <Link to={`/blog/${props.id}`}>View Post</Link>
        {/* onClick={deletePost} */}
        <button >Delete Post</button>
        <button>Edit Post</button>
    </div>);
}

export default ManageDiv;