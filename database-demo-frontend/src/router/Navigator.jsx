import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Link } from "react-router-dom";
import Home from "../views/homeView/Home";
import About from "../views/homeView/About";
import Customer from "../views/customerView/Customer";
import UserView from "../views/customerView/UserView";
import Product from "../views/productView/Product";
import ProductLine from "../views/productLineView/ProductLine";
import {
  Nav,
  Navbar,
  NavDropdown,
  Form,
  FormControl,
  Button
} from "react-bootstrap";

class Navigator extends Component {
  state = {};

  render() {
    return (
      <Router>
        <Navbar bg="dark" expand="lg" variant="dark" className="mb-3">
          <Link to="/">
            <Navbar.Brand>DemoShop</Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Link to="/about">
                <span className="m-2" style={{ color: "white" }}>
                  About
                </span>
              </Link>
              <Link to="/product">
                <span style={{ color: "white", paddingLeft: 8 }}>Products</span>
              </Link>
              <Link to="/customer">
                <span style={{ color: "white", paddingLeft: 8 }}>Customers</span>
              </Link>
            </Nav>
            <Link to="/account">
              <Button className="btn btn-success">Account</Button>
            </Link>
          </Navbar.Collapse>
        </Navbar>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/product" component={ProductLine} />
          <Route exact path="/product/:name" component={Product} />
          <Route exact path="/account" component={UserView} />
          <Route exact path="/customer" component={Customer} />
        </Switch>
      </Router>
    );
  }
}

export default Navigator;
