import { useState } from "react";
import { updateItem } from "../actions/items";
import { useDispatch } from "react-redux";

function EditItemForm({ item, setIsEditing }) {
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        qty: item.qty,
        purchaseDate: item.purchaseDate.toISOString().split("T")[0],
    });
    const handleSubmit = (e) => {
        e.preventDefault();
        let updateData = { ...item, ...formData };
        updateData.purchaseDate = new Date(formData.purchaseDate);
        dispatch(updateItem(item.itemId, updateData));
        setIsEditing(false);
    };
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((data) => ({ ...data, [name]: value }));
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h2>{item.itemName}</h2>

                <label htmlFor="qty">Quantity:</label>
                <input
                    id="qty"
                    type="number"
                    name="qty"
                    value={formData.qty}
                    onChange={handleChange}
                />
                <label htmlFor="PurchaseDate">Puchase Date:</label>
                <input
                    type="date"
                    name="purchaseDate"
                    value={formData.purchaseDate}
                    onChange={handleChange}
                />
                <button type="submit">Update</button>
                <button onClick={() => setIsEditing(false)}>Cancel</button>
            </form>
        </div>
    );
}

export default EditItemForm;
