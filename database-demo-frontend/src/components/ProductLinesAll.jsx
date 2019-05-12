import React, { Component } from "react";
import { Card, CardDeck, Button } from "react-bootstrap";
import greens from "../images/greens.jpg";
import meat from "../images/meat.jpg";
import { connect } from "react-redux";
import { fetchLine } from "../actions/productLine";
import { Link } from "react-router-dom";
class ProductLineAll extends Component {
  componentDidMount() {
    this.props.fetchLineLocal();
  }
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
                  <Card.Img variant="top" src={greens} top width="25%" />
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
