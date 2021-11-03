import React from "react";

function Item(props) {
  return (
    <section className="form-section">
      <div className="group">
        <div className="item-single">
          <h2>{props.item.itemName}</h2>
        </div>
        <div className="item-single">
          <h3>
            DOP
            <p className="center"> {props.item.purchaseDate}</p>
          </h3>
        </div>
        <div className="item-single">
          <h3>
            EXP
            <p className="center">{props.item.expireDate}</p>
          </h3>
        </div>
        <div className="item-single">
          <h3>
            QTY
            <p className="center">{props.item.qty}</p>
          </h3>
        </div>
        <div className="remove item-single ">
          <button type="button">
            <i className="fa fa-minus"></i>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Item;
