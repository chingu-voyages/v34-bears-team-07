import React from "react";
import { Container, Row, Col } from 'react-bootstrap'



function Item(props) {
  return (
    <Container className="form-section">
      <Row className="group">
        <Col className="item-single">
          <h2>{props.item.itemName}</h2>
        </Col>
        <Col className="item-single">
          <h3>
            Dop:
            <span className="center"> {props.item.purchaseDate}</span>
          </h3>
        </Col>
        <Col className="item-single">
          <h3>
            Exp: 
            <span className="center">{props.item.expireDate}</span>
          </h3>
        </Col>
        <Col className="item-single">
          <h3>
            QTY
            <span className="center">{props.item.qty}</span>
          </h3>
        </Col>
        <Col className="remove item-single ">
        <button>
            <i className="fa fa-minus"></i>
          </button>
        </Col>
      </Row>
    </Container>
  );
}

export default Item;
