import React from "react";
import TokenServices from "../tokenServices";
import ApiServices from "../apiServices";

function GroceryItem(props) {
  const newGroceryItemName =
    props.item.itemName.charAt(0).toUpperCase() + props.item.itemName.slice(1);

  const handleAdd = () => {
    const userId = TokenServices.decodeToken().id;
    const token = TokenServices.getAuthToken();
    // ApiServices.deleteItem(userId, token, props.item._id);
  };

  return (
    <section className="form-section">
      <div className="group spaced">
        <div className="item center">
          <h2>{`${newGroceryItemName}`}</h2>
        </div>
        <div className="item">
          <h3>
            QTY
            <p className="center">{props.item.qty}</p>
          </h3>
        </div>
        <div className="add item to-right">
          <button type="button" className="center-button" onClick={handleAdd}>
            <i className="fa fa-plus"></i>
          </button>
        </div>
      </div>
      <br></br>
    </section>
  );
}

export default GroceryItem;
