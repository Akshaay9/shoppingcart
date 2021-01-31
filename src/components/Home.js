import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
function Home({ history }) {
  const [url, setUrl] = useState();
  const[data,setData]=useState()

  const fetchApiNASA = async () => {
    const data = await axios.get(
      `https://api.nasa.gov/planetary/apod?api_key=t1qnRbejopGotvliQowbhbka22VeWtoEbkTRG0XV`
    );
    setUrl(data.data.hdurl);
    setData(data.data);
    console.log(data.data);
  };
  useEffect(() => {
    fetchApiNASA();
  }, []);

  return (
    <div
      className="home"
      style={{
        width: "100%",
        height: "89.7vh",
        backgroundImage: `url(${url})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        zIndex:-1
      }}
    >
     
      <p className="date">{data && data.date}</p>
      <p className="title">{data && data.title}</p>
      <div className="desc">
        <p>{ data&&data.explanation}</p>
      </div>
      <div className="footer">
        <h8>Image Courtesy : NASA API</h8>
      </div>
  
    
    </div>
  );
}

export default Home;
