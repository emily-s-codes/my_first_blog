import { useState } from "react"
import NewPost from "../components/NewPost"
import "./Admin.css"

const Admin = ({ posts, setPosts }) => {

    return (<div className="adminWrapper">
        <header className="adminHeader">
            <h1>admin</h1>
            <a href="/">home</a>
        </header>
        <NewPost posts={posts} setPosts={setPosts} />
    </div>);
}

export default Admin;