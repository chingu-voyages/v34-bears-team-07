import { useState } from "react";
import { updateItem } from "../actions/items";
import { useDispatch } from "react-redux";

function EditItemForm({ item, setIsEditing }) {
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        qty: item.qty,
        purchaseDate: convertToDatePickerStr(
            item.purchaseDate.toLocaleDateString()
        ),
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        let updateData = { ...item, ...formData };
        let purchaseDate = convertFromDateStr(updateData.purchaseDate);
        updateData.purchaseDate = purchaseDate;
        updateData.expireDate.setDate(
            purchaseDate.getDate() + item.expirationDays
        );
        dispatch(updateItem(item.itemId, updateData));
        setIsEditing(false);
    };
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((data) => ({ ...data, [name]: value }));
    };
    function convertToDatePickerStr(dateStr) {
        let [mm, dd, yyyy] = dateStr.split("/");
        return `${yyyy}-${mm.length === 1 ? 0 + mm : mm}-${
            dd.length === 1 ? 0 + dd : dd
        }`;
    }
    function convertFromDateStr(dateStr) {
        let [year, month, day] = dateStr.split("-");
        return new Date(year, Number(month) - 1, day);
    }

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