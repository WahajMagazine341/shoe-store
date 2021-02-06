import React from "react";
import { Link } from "react-router-dom";

//Header imports
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

//drawer
import clsx from "clsx";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  button: {
    color: "white",
    fontWeight: "550",
  },

  title: {
    flexGrow: 1,
  },
}));
const useStylesDrawer = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
});

export const Header = () => {
  const classes = useStyles();
  const classesDrawer = useStylesDrawer();
  const [open, setOpen] = React.useState(false);

  const openDrawer = () => {
    setOpen(true);
  };

  const closeDrawer = () => {
    setOpen(false);
  };

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={() => {
              setOpen(true);
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Shoe Store
          </Typography>
          <Link to="/" style={{ color: "inherit", textDecoration: "inherit" }}>
            <Button color="inherit" className={classes.button}>
              Home
            </Button>
          </Link>
          <Link
            to="/products"
            style={{ color: "inherit", textDecoration: "inherit" }}
          >
            <Button className={classes.button}>Product</Button>
          </Link>

          <Drawer open={open} onClose={toggleDrawer(false)} color="primary">
            <List color="primary">
              {["Men", "Women", "Kids"].map((text) => (
                <ListItem button key={text}>
                  <ListItemText primary={text} style={{ padding: "5%" }} />
                </ListItem>
              ))}
            </List>
          </Drawer>
        </Toolbar>
      </AppBar>
    </div>
  );
};
