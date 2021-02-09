import React from "react";
import { useParams, useRouteMatch } from "react-router-dom";

export const ProductDetails = () => {
  console.log("productDetails");
  var { name, price } = useParams();
  const image = localStorage.getItem("url");
  //localStorage.clear();

  console.log("url", image);
  //console.log(JSON.parse(url));
  //const{img} = useRouteMatch();
  //JSON.parse(obj);
  return (
    <div>
      <h1>Product details for {name}</h1>
      <h1>Product details for {price}</h1>
      
      <img
        style={{
          width: "400px",
          marginLeft: "15%",
          marginBottom: "3%",
        }}
        src={image}
        alt="test"
      />
    </div>
  );
};
