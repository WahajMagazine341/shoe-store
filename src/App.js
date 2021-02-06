import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { Products } from "./components/Products";
import "./App.css";
import { ProductDetails } from "./components/ProductDetails";
import { NotFound } from "./components/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route >
          <Route exact path="/products" component={Products} />
          <Route exact path="/products:id" component={NotFound} />
        </Route>
        <Route component={NotFound} />{" "}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
