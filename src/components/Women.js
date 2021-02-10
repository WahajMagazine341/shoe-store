import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import {Footer} from "./Footer";
//grid
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles((theme) => ({
  paper: {
   backgroundColor:'#FCFEFE',
    "&:hover": {
      //#3498DB,
      height: "400px",
      padding: "10px",
    },
  },
}));

export const Women = () => {
  console.log("HOME");
  const classes = useStyles();

  const shoes = [
    //38124109955247:
    {
      name: "W7030",
      price: "PKR-1,600",
      img:
        "https://cdn.shopify.com/s/files/1/0083/8405/3305/products/1_32e20dc3-5f63-48d6-ba2f-73add1dd041b_large.png?v=1605210853",
    },
    //38041317933231:
    {
      name: "W7143",
      price: "PKR-1,490",
      img:
        "https://cdn.shopify.com/s/files/1/0083/8405/3305/products/01_2b0a126f-cd5c-4f69-bca3-b8f58e10babc_large.jpg?v=1605186254",
    },
    //36707092627618:
    {
      name: "w7145",
      price: "PKR-2000",
      img:
        "https://cdn.shopify.com/s/files/1/0083/8405/3305/products/01_3517e36e-0291-44b8-bfe8-74aa8e83b834_large.jpg?v=1605187130",
    },
    //38201038504111:
    {
      name: "W7046",
      price: "PKR-1,490",
      img:
        "https://cdn.shopify.com/s/files/1/0083/8405/3305/products/01_e42d9d77-fcab-4f8d-8636-c7544fa8b9fc_large.jpg?v=1605191680",
    },
    //38171317502127:
    {
      name: "W7144",
      price: "PKR-1,400",
      img:
        "https://cdn.shopify.com/s/files/1/0083/8405/3305/products/1_5270ee8c-53b2-49b6-8d1a-4e6ff0c5afaf_large.png?v=1605298162",
    },
    //38170874052783:
    {
      name: "W7168",
      price: "PKR-1,490",
      img:
        "https://cdn.shopify.com/s/files/1/0083/8405/3305/products/1_ce7df42f-971a-4c4a-b6e7-f683857346aa_large.png?v=1605553765",
    },
    //38125134053551:
    {
      name: "W6947",
      price: "PKR-4000",
      img:
        "https://cdn.shopify.com/s/files/1/0083/8405/3305/products/1_d4164c82-b669-4b0c-86c8-05bed7609072_large.png?v=1604680279",
    },
    //38125159350447:
    {
      name: "W6948",
      price: "PKR-2000",
      img:
        "https://cdn.shopify.com/s/files/1/0083/8405/3305/products/1_ae4abda8-6ec7-4e1a-8f5e-02f87167a48b_large.png?v=1605006545",
    },
  ];
  return (
    <div>
      <Typography
        style={{ marginTop: "3%", marginLeft: "27%", fontFamily: "cursive", color:"#1B4F72" }}
        variant="h2"
        gutterBottom
      >
        {" "}
        Welcome to Shoe Store
      </Typography>
      <Divider variant="middle" />
      <Grid
        container
        spacing={0}
        style={{ marginTop: "3%", columns: "2 auto", columnCount: "2" }}
        alignItems="center"
        justify="center"
      >
        {shoes.map((obj) => (
          <Grid
            item
            xs={10}
            md={5}
            style={{ marginRight: "1%", marginBottom: "3%" }}
          >
            <Link
            style={{color: "#154360", textDecoration: "inherit"}}
              to={`/productdetails/${obj.name}/${obj.price}`}
              onClick={() => {
                //const url= JSON.stringify(obj.img);
                const url= obj.img;
                console.log("before sending2", obj.img);
                localStorage.setItem('url', obj.img);
                localStorage.setItem('me', "wahaj");
              }}
            >
              <Typography variant="h4" style={{ fontFamily: "cursive" }}>
                {obj.name}
              </Typography>
           

            <Paper className={classes.paper} elevation={2}>
              <img
                style={{
                  width: "400px",
                  marginLeft: "15%",
                  marginBottom: "3%",
                }}
                src={obj.img}
                alt="test"
              />
              <Divider variant="middle" />
            </Paper>
            </Link>
         
          </Grid>
        ))}
        ;
      </Grid>
      <Footer/>
    </div>
    
  );
};
