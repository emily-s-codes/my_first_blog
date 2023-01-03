import ManageDiv from "../components/ManageDiv";
import "./ManagePosts.css"

const ManagePosts = ({ posts, setPosts }) => {
    return (<section className="manageSection">
        {posts.map((post, key) => {
            return <ManageDiv key={key} id={key + 1} title={post.title} />
        })}
    </section>);
}

export default ManagePosts;