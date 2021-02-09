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

export const Kids = () => {
  console.log("HOME");
  const classes = useStyles();

  const shoes = [
    //38124109955247:
    {
      name: "M5944",
      price: "PKR-7,500",
      img:
        "https://cdn.shopify.com/s/files/1/0083/8405/3305/products/1_d29719b2-0c7b-461e-a89f-96b3bb2329aa_large.png?v=1610390565",
    },
    //38041317933231:
    {
      name: "M5917",
      price: "PKR-8,490",
      img:
        "https://cdn.shopify.com/s/files/1/0083/8405/3305/products/1_a0e3306b-992a-430d-9de0-edf9b5229603_large.png?v=1610391139",
    },
    //36707092627618:
    {
      name: "M6425",
      price: "PKR-6000",
      img:
        "https://cdn.shopify.com/s/files/1/0083/8405/3305/products/01_3e4b52ea-1aa8-411b-8349-24a4337ca277_large.jpg?v=1602944940",
    },
    //38201038504111:
    {
      name: "KYLER RC-0101",
      price: "PKR-3,000",
      img:
        "https://cdn.shopify.com/s/files/1/0083/8405/3305/products/01_092a3f61-1d6e-4738-980b-91ff9edd2772_large.jpg?v=1611665935",
    },
    //38171317502127:
    {
      name: "M5939",
      price: "PKR-4000",
      img:
        "https://cdn.shopify.com/s/files/1/0083/8405/3305/products/1_f28a5b29-8de5-49e6-8c3e-b537beedfb94_large.png?v=1611677993",
    },
    //38170874052783:
    {
      name: "M6458",
      price: "PKR-6000",
      img:
        "https://cdn.shopify.com/s/files/1/0083/8405/3305/products/01_f9046234-1b40-44da-95b1-1adcea9a7b48_large.jpg?v=1611671369",
    },
    //38125134053551:
    {
      name: "M6322",
      price: "PKR-4000",
      img:
        "https://cdn.shopify.com/s/files/1/0083/8405/3305/products/01_69598565-d4a1-4f11-adb6-6ad36f37448d_large.jpg?v=1611065927",
    },
    //38125159350447:
    {
      name: "M6372",
      price: "PKR-2000",
      img:
        "https://cdn.shopify.com/s/files/1/0083/8405/3305/products/01_69598565-d4a1-4f11-adb6-6ad36f37448d_large.jpg?v=1611065927",
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
            </Link>

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
         
          </Grid>
        ))}
        ;
      </Grid>
      <Footer/>
    </div>
    
  );
};
