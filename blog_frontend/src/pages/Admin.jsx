import NewPost from "../components/NewPost"
import "./Admin.css"

const Admin = ({ setPosts }) => {

    return (<div className="adminWrapper">
        <NewPost setPosts={setPosts} />
    </div>);
}

export default Admin;