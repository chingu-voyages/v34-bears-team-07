import "./ItemCard.css";
import { useDispatch } from "react-redux";
import { addToList } from "../actions/items";
import Buttons from "./Buttons";

function ItemCard({ key, item }) {
    const dispatch = useDispatch();
    function addItem(qty) {
        let expireDate = new Date();
        expireDate.setDate(expireDate.getDate() + item.expirationDays);
        const newItem = {
            itemId: item._id,
            itemName: item.name,
            category: item.category,
            purchaseDate: new Date(),
            expireDate,
            qty,
            expirationDays: item.expirationDays,
        };
        dispatch(addToList(newItem));
    }
    return (
        <div className="item-card-wrapper">
            <div className="item-card-desc">
                <div className="item-card-name">{item.name}</div>
                <span className="item-card-category">{item.category}</span>
            </div>
            <div className="button-wrapper">
                <Buttons addItem={addItem} />
            </div>
        </div>
    );
}

export default ItemCard;
