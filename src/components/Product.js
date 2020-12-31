import React from "react";
import { Card, Button } from "react-bootstrap";

function Product(props) {
  let { product } = props;

  return (
    <Card style={{ maxWidth: "20rem", borderWidth: "0.3rem", margin: "0.3em" }}>
      <Card.Img variant="top" src={product.item.images.information} />
      <Card.Body>
        <Card.Title style={{ margin: ".01rem" }}>
          {product.item.name}
        </Card.Title>
        <Card.Text>{product.item.description}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Product;

/*
  removed View: <Button variant="primary">View</Button>
*/
