import { Link } from "react-router-dom";
import "./Admin.css"

const Admin = ({ setPosts }) => {

    return (<div className="adminWrapper">
        <Link to="/admin/add">Add Post</Link>
        <Link to="/admin/manage">Manage Posts</Link>
    </div>);
}

export default Admin;