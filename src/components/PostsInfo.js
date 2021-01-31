import React, { useEffect, useState } from "react";
import axios from "axios"
import {
    useParams
  } from "react-router-dom";
function PostsInfo({ history }) {
    let { id } = useParams();
    const [data, setData] = useState()
    useEffect(() => {
        getSinglePost()
    }, [])
    const getSinglePost = async () => {
        const data = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        setData([data.data])
        console.log(data.data);
    }
    const backToPosts = () => {
        history.push("/posts")
    }
    return (
        <div className="posts">
            {data && data.map((ele) => (
                <div className="postData">
                    <div className="num">
                        <span className="postNum">{ele.id}</span>
                    </div>
                    <h5 className="postTitle">{ ele.title}</h5>
                    <h5>{ele.body}</h5>
       
                    <button onClick={()=>backToPosts()}> Back To Posts</button>
                </div>
            ))}
        </div>
    )
}

export default PostsInfo
