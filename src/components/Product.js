import React from "react";
import { Card, Button } from "react-bootstrap";

function Product(props) {
  let { product } = props;

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={product.item.images.information} />
      <Card.Body>
        <Card.Title>{product.item.name}</Card.Title>
        <Card.Text>{product.item.description}</Card.Text>
        <Button variant="primary">View</Button>
      </Card.Body>
    </Card>
  );
}

export default Product;
