import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./DetailPage.css"

const DetailPage = ({ posts }) => {
    const params = useParams()
    const [singlePost, setSinglePost] = useState([])

    useEffect(() => {
        console.log(posts)
        setSinglePost(posts[(params.entry) + 1])
    }, [posts, params.entry])

    return (<>
        <h1>{singlePost.title}</h1>
    </>);
}

export default DetailPage;