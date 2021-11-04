import ItemSearch from "./ItemSearch";
import ItemsToAdd from "./ItemsToAdd";
import "./AddItemFeature.css";

function AddItemFeature() {
    return (
        <div className="add-item-container">
            <ItemSearch />
            <ItemsToAdd />
        </div>
    );
}

export default AddItemFeature;
