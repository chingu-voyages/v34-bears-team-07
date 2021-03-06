import { React } from "react";
import TokenServices from "../tokenServices";
import ApiServices from "../apiServices";
import { useHistory } from "react-router-dom";

function GroceryItem(props) {
  const history = useHistory();
  const newGroceryItemName =
    props.item.itemName.charAt(0).toUpperCase() + props.item.itemName.slice(1);

  const handleAddToPantry = async () => {
    const userId = TokenServices.decodeToken().id;
    const token = TokenServices.getAuthToken();
    await ApiServices.deleteGroceryItem(userId, token, props.item._id);
    await ApiServices.postAddItem(userId, token, props.item);
    history.push("/dashboard");
  };

  const handleDelete = () => {
    const userId = TokenServices.decodeToken().id;
    const token = TokenServices.getAuthToken();
    ApiServices.deleteGroceryItem(userId, token, props.item._id);
  };

  return (
    <section className="form-section light-gray-bg">
      <div className="group spaced">
      <div className="add-pantry item-single center">        
          <button
            type="button"
            className="center-button"
            onClick={handleAddToPantry}
          >
            Add To Pantry
          </button>
        </div>
        <div className="item-double center">
          <h2>{`${newGroceryItemName}`}</h2>
        </div>
        <div className="item-single center">
          <h3>
            QTY
            <p className="center">{props.item.qty}</p>
          </h3>
        </div>        
        <div className="remove-grocery item-single center">
          <button
            type="button"
            className="center-button"
            onClick={handleDelete}
          >
            Delete
          </button>
        </div>
      </div>
      <br></br>
    </section>
  );
}

export default GroceryItem;
