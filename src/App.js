import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { Products } from "./components/Products";
import { Kids } from "./components/Kids";
import "./App.css";
import {Women} from "./components/Women";
import { ProductDetails } from "./components/ProductDetails";
//import {Footer} from "./components/Footer";
import { NotFound } from "./components/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route >
          <Route exact path="/women" component={Women} />
          <Route exact path="/kids" component={Kids} />
          <Route exact path="/productdetails/:name/:price" component={ProductDetails} />
        </Route>
        <Route component={NotFound} />{" "}
      </Switch>
     
    </BrowserRouter>
  );
}

export default App;
