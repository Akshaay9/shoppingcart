import React, { useEffect, useState } from "react";
import axios from "axios"
function Posts({history}) {
    const [data, setData] = useState()
    useEffect(() => {
        getPosts()
    }, [])

    const getPosts = async () => {
        const data = await axios.get(`https://jsonplaceholder.typicode.com/posts`)
        setData(data.data)
        console.log(data.data);
    }
    const singlePostRoute = (id) => {
        history.push(`/posts/${id}`)
    }
    return (
        <div className="posts">
            {data && data.map((ele) => (
                <div className="postData">
                    <div className="num">
                        <span className="postNum">{ele.id }</span>
                    </div>
                    <h5 className="postTitle">{ ele.title}</h5>
                    <h5>{ele.body}</h5>
                    <button onClick={()=>singlePostRoute(ele.id)}>See the Post</button>
                </div>
            ))}
        </div>
    )
}

export default Posts
