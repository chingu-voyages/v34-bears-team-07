import { useState } from "react";
import EditItemForm from "./EditItemForm";

function ItemToAddCard({ item }) {
    const [isEditing, setIsEditing] = useState(false);
    return isEditing ? (
        <EditItemForm item={item} setIsEditing={setIsEditing} />
    ) : (
        <div className="item-to-add-card-container">
            <div>
                {item.itemName}: {item.qty}
            </div>
            <small>
                Purchase Date:{item.purchaseDate.toLocaleDateString()}
            </small>
            <button onClick={() => setIsEditing(true)}>Edit</button>
        </div>
    );
}

export default ItemToAddCard;
