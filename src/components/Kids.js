import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { Footer } from "./Footer";
//grid
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles((theme) => ({
  paper: {
    backgroundColor: "#FCFEFE",
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
      name: "Power-Boys",
      price: "PKR-1,999",
      img:
        "https://cdn.shopify.com/s/files/1/0143/1552/0054/products/461-2325-_2_360x.jpg?v=1611749513",
    },
    //38041317933231:
    {
      name: "Power-Boys",
      price: "PKR-2,990",
      img:
        "https://cdn.shopify.com/s/files/1/0143/1552/0054/products/461-2712-_2_360x.jpg?v=1611749563",
    },
    //36707092627618:
    {
      name: "Power-Boys",
      price: "PKR-1,999",
      img:
        "https://cdn.shopify.com/s/files/1/0143/1552/0054/products/461-4712-_2_360x.jpg?v=1612935991",
    },
    //38201038504111:
    {
      name: "Power-Boys",
      price: "PKR-1,4999",
      img:
        "https://cdn.shopify.com/s/files/1/0143/1552/0054/products/461-5320-_2_360x.jpg?v=1611749614",
    },
    //38171317502127:
    {
      name: "Power-Boys",
      price: "PKR-1,999",
      img:
        "https://cdn.shopify.com/s/files/1/0143/1552/0054/products/461-6325-_2_360x.jpg?v=1611749640",
    },
    //38170874052783:
    {
      name: "Power-Boys",
      price: "PKR-1,4999",
      img:
        "https://cdn.shopify.com/s/files/1/0143/1552/0054/products/461-9320-_2_360x.jpg?v=1611749725",
    },
    //38125134053551:
    {
      name: "Power-Boys",
      price: "PKR-2,4999",
      img:
        "https://cdn.shopify.com/s/files/1/0143/1552/0054/products/461-9326-_2_360x.jpg?v=1611749754",
    },
    //38125159350447:
    {
      name: "Beta-Kids",
      price: "PKR-599",
      img:
        "https://cdn.shopify.com/s/files/1/0143/1552/0054/products/371-9003-b_360x.jpg?v=1588677832",
    },
  ];
  return (
    <div>
      <Typography
        style={{
          marginTop: "3%",
          marginLeft: "27%",
          fontFamily: "cursive",
          color: "#1B4F72",
        }}
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
              style={{ color: "#154360", textDecoration: "inherit" }}
              to={`/productdetails/${obj.name}/${obj.price}`}
              onClick={() => {
                //const url= JSON.stringify(obj.img);
                const url = obj.img;
                console.log("before sending2", obj.img);
                localStorage.setItem("url", obj.img);
                localStorage.setItem("me", "wahaj");
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
      <Footer />
    </div>
  );
};
