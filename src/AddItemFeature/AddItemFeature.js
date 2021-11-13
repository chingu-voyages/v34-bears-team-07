import ItemSearch from "./ItemSearch";
import ItemsToAdd from "./ItemsToAdd";
import "./AddItemFeature.css";

function AddItemFeature() {
  return (
    <div className="add-item-main-container">
      <section>
        <ItemSearch />
      </section>
      <section>
        <ItemsToAdd />
      </section>
    </div>
  );
}

export default AddItemFeature;
