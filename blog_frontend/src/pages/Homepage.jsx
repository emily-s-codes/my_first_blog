import PostPreview from "../components/PostPreview";
import "./Homepage.css"
const Homepage = ({ posts }) => {


    return (<div className="homeWrapper">
        <main className="homeMain">
            <section className="homeGrid">
                {posts.map((post, key) => {
                    return <PostPreview key={key} id={key + 1} title={post.title} teaser={post.teaser} image={post.image} />
                })}
            </section>
        </main>
    </div>);
}

export default Homepage;