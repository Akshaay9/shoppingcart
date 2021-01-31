import React, { useEffect, useState } from "react";

function Images() {
    const auth = "563492ad6f917000010000010ac4a02d2654465a911830ee25aa588d"
    const [pics, setPics] = useState()
    const [value,setValue]=useState("")
    useEffect(() => {
        fetchPics() 
    }, [])
   async function fetchPics() {
    const data = await fetch(`https://api.pexels.com/v1/curated?per_page=50`, {
        method: `GET`,
        headers: {
            Accept: "application/json",
            Authorization:auth
        }
    })
       const res = await data.json()
       setPics(res.photos);
    }
    const submitBtnHandler = async() => {
        const data = await fetch(`https://api.pexels.com/v1/search?query=${value}&per_page=15`, {
            method: `GET`,
            headers: {
                Accept: "application/json",
                Authorization:auth
            }
        })
        const res = await data.json()
        setPics(res.photos);
        console.log(res.photos);
    }
    return (
        <>
            <div className="search">
                <input value={value} type="text" onChange={(e)=>setValue(e.target.value)} />
                <button className="searchbtn" onClick={()=>submitBtnHandler()}>Search</button>
            </div>
            <div className="gallery">
                {pics  && pics.map((ele) => (
                    <div className="galleryImg">
                        <img src={ele.src.medium} alt=""/>
                    </div>
                )) }
            </div>
        </>
    )
}

export default Images
