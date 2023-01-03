import { useParams } from "react-router-dom";
import "./DetailPage.css"

const DetailPage = ({ posts }) => {
    const params = useParams()
    return (<div className="detailPageWrapper">
        <main className="detailPageMain">
            <img src={`http://localhost:9999/${posts[params.entry - 1].image}`} alt={posts[params.entry - 1].title} />
            <h1>{posts[params.entry - 1].title}</h1>
            <p>{posts[params.entry - 1].content}</p>
        </main>
    </div>);
}

export default DetailPage;