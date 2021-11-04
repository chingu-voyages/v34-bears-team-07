import { useState } from "react";
import { updateItem } from "../actions/items";
import { useDispatch } from "react-redux";

function EditItemForm({ item, setIsEditing }) {
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        qty: item.qty,
        purchaseDate: item.purchaseDate.toISOString().slice(0, 16),
    });
    console.log("formData", formData);
    const handleSubmit = (e) => {
        e.preventDefault();
        let updateData = { ...item, ...formData };
        console.log("updateData1", updateData);
        updateData.purchaseDate = new Date(formData.purchaseDate);
        console.log("updateData2", updateData);
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
                    min="1"
                    value={formData.qty}
                    onChange={handleChange}
                />
                <label htmlFor="PurchaseDate">Puchase Date:</label>
                <input
                    type="datetime-local"
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
