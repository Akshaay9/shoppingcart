import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
function AlbumsInfo({ history }) {
  let { id } = useParams();
  const [album, setAlbum] = useState();
  useEffect(() => {
    getSinglePost();
  }, []);
  const getSinglePost = async () => {
    const data = await axios.get(
      `https://jsonplaceholder.typicode.com/albums/${id}/photos`
    );
    setAlbum(data.data);
    console.log(data.data);
  };
  const backToPosts = () => {
    history.push("/albums");
  };
  return (
      <>
          <button className="backtoAlbum" onClick={()=>backToPosts()}>Back To Albums</button>
      <div className="posts">
        {album &&
          album.map((ele) => (
            <div className="postData">
              <div className="num">
                <span className="postNum">{ele.albumId}</span>
              </div>
              <h5 className="postTitle">{ele.title}</h5>
              <img src={ele.url} alt="" />
              <img src={ele.thumbnailUrl} alt="" />
            </div>
          ))}
      </div>
    </>
  );
}

export default AlbumsInfo;
