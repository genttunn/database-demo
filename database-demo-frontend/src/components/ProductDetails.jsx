import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchByLine } from "../actions/productLine";
import { Card, CardDeck, Button } from "react-bootstrap";
import greens from "../images/greens.jpg";
import tofu from "../images/tofu.jpg";
import soya from "../images/soya.jpg";
import cosmetic from "../images/cosmetic.jpg";
import garden from "../images/garden.jpg";
import kitchen from "../images/kitchen.jpg";

import { Link } from "react-router-dom";
class ProductDetails extends Component {
  componentDidMount() {
    this.props.fetchByLineLocal(this.props.lineToSearch.line.id);
  }

  getImageName = name => {
    let imgName = greens;
    switch (name) {
      case "Beauty":
        imgName = cosmetic;
        break;
      case "Dried food":
        imgName = soya;
        break;
      case "Fresh food":
        imgName = tofu;
        break;
      case "Kitchen":
        imgName = kitchen;
        break;
      case "Gardening":
        imgName = garden;
        break;
    }
    return imgName;
  };
  render() {
    console.log(this.props);
    return (
      <div>
        <h2>{this.props.lineToSearch.line.name}</h2>
        <CardDeck className="justify-content-center">
          <div className="d-inline-flex flex-wrap justify-content-center">
            {this.props.currentLine.map(product => (
              <div className="p-2" key={product.id}>
                <Card style={{ width: "12rem", margin: 5 }}>
                  <Card.Img
                    variant="top"
                    src={this.getImageName(this.props.lineToSearch.line.name)}
                    width="25%"
                  />
                  <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text>
                      <span>
                        {product.description} <br />
                        In stock: {product.quantity} <br />
                        Price: {product.price} per {product.unit}
                        <br />
                      </span>
                    </Card.Text>
                    <Link
                      to={{
                        pathname: "/product/" + product.name,
                        state: { product: product }
                      }}
                    />
                  </Card.Body>
                </Card>
              </div>
            ))}
          </div>
        </CardDeck>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchByLineLocal: id => {
    dispatch(fetchByLine(id));
  }
});

const mapStateToProps = state => ({
  currentLine: state.productLine.currentLine
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductDetails);
