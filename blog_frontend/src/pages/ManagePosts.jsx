import ManageDiv from "../components/ManageDiv";
import { useEffect } from "react";
import "./ManagePosts.css"

const ManagePosts = ({ posts, setPosts, deletePost }) => {
    console.log(posts)

    useEffect(() => {
        fetch('http://localhost:9999/api/blog')
            .then(response => response.json())
            .then(data => setPosts(data))
            .catch(err => console.log('catch in fetch in managePosts', err))
    }, [])

    return (<section className="manageSection">
        {posts.map((post, key) => {
            return <ManageDiv key={key} index={key} id={key + 1} title={post.title} setPosts={setPosts} posts={posts} deletePost={deletePost} />
        })}
    </section>);
}

export default ManagePosts;