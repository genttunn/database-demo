import React, { Component } from "react";
import { Card, CardDeck, Button } from "react-bootstrap";
import greens from "../images/greens.jpg";
import tofu from "../images/tofu.jpg";
import soya from "../images/soya.jpg";
import cosmetic from "../images/cosmetic.jpg";
import garden from "../images/garden.jpg";
import kitchen from "../images/kitchen.jpg";

import { connect } from "react-redux";
import { fetchLine } from "../actions/productLine";
import { Link } from "react-router-dom";
class ProductLineAll extends Component {
  componentDidMount() {
    this.props.fetchLineLocal();
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
    return (
      <React.Fragment>
        <h2>
          Our Current {this.props.productLine.productLineList.length} Product
          Lines
        </h2>
        <CardDeck className="justify-content-center">
          <div className="d-inline-flex flex-wrap justify-content-center">
            {this.props.productLine.productLineList.map(line => (
              <div className="p-2" key={line.id}>
                <Card style={{ width: "12rem", margin: 5 }}>
                  <Card.Img
                    variant="top"
                    src={this.getImageName(line.name)}
                    width="25%"
                  />
                  <Card.Body>
                    <Card.Title>{line.name}</Card.Title>
                    <Link
                      to={{
                        pathname: "/product/" + line.name,
                        state: { line: line }
                      }}
                    >
                      <Button variant="primary">Explore</Button>
                    </Link>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </div>
        </CardDeck>
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchLineLocal: () => {
    console.log("local");
    dispatch(fetchLine());
  }
});

const mapStateToProps = state => ({
  productLine: state.productLine
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductLineAll);
