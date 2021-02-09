import React from "react";
import { useParams, useRouteMatch } from "react-router-dom";
import {Footer} from "./Footer";

export const ProductDetails = () => {
  console.log("productDetails");
  var { name, price } = useParams();
  const image = localStorage.getItem("url");
  //localStorage.clear();

  //console.log("url", image);
  //console.log(JSON.parse(url));
  //const{img} = useRouteMatch();
  //JSON.parse(obj);
  return (
    <div style={{  display:"inline-block",top:"50%", marginLeft:"2%"}}>
      <h1 style={{  fontFamily: "cursive" , color:"#154360" }}>
         {name}
      </h1>
      <h1 style={{  fontFamily: "cursive" ,color:"#154360"}}>
        {price}
      </h1>

      <img
        style={{
          
          width:"550px",
          height:"400px"
        }}
        src={image}
        alt="test"
      />
      <Footer/>
    </div>
  );
};
