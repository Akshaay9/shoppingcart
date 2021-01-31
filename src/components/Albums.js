import React, { useEffect, useState } from "react";
import axios from "axios"
function Albums({history}) {
    const [album, setAlbum] = useState()
    useEffect(() => {
        getPosts()
    }, [])

    const getPosts = async () => {
        const data = await axios.get(`https://jsonplaceholder.typicode.com/albums`)
        setAlbum(data.data)
        console.log(data.data);
    }
    const singlePostRoute = (id) => {
        history.push(`/albums/${id}`)
    }
    return (
        <div className="posts">
            {album && album.map((ele) => (
                <div className="postData">
                    <div className="num">
                        <span className="postNum">{ele.id }</span>
                    </div>
                    <h5 className="postTitle">{ ele.title}</h5>
                    {/* <h5>{ele.body}</h5> */}
                    <button onClick={()=>singlePostRoute(ele.id)}>See the Album</button>
                </div>
            ))}
        </div>
    )
}

export default Albums
