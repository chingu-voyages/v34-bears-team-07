import { useState } from "react";
import EditItemForm from "./EditItemForm";
import { useDispatch } from "react-redux";
import { removeItem } from "../actions/items";

function ItemToAddCard({ item }) {
    const dispatch = useDispatch();
    const [isEditing, setIsEditing] = useState(false);
    const handleRemove = () => {
        dispatch(removeItem(item.itemId));
    };
    return isEditing ? (
      <EditItemForm item={item} setIsEditing={setIsEditing} />
    ) : (
        <section className="light-gray-bg">
      <div className="item-to-add-card-container">
        <div>
          {item.itemName}: {item.qty}
        </div>
        <small>Purchase Date:{item.purchaseDate.toLocaleDateString()}</small>
        <br />
        <button
          className="button-top-container"
          onClick={() => setIsEditing(true)}
        >
          Edit
        </button>
        <button className="button-top-container" onClick={handleRemove}>Remove</button>
      </div>
      </section>
    );
}

export default ItemToAddCard;