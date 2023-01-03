import { Link } from "react-router-dom";
import "./PostPreview.css"

const PostPreview = (props) => {
    return (
        <Link to={`/blog/${props.id}`}><section className="postPreview">
            <img src={`http://localhost:9999/${props.image}`} alt={props.title} />
            <h2>{props.title}</h2>
            <p>{props.teaser}</p>
        </section></Link>
    );
}

export default PostPreview;