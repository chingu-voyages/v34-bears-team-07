import { useHistory } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { clearList } from "../actions/items";
import ItemToAddCard from "./ItemToAddCard";
import ApiServices from "../apiServices";
import TokenServices from "../tokenServices";

export default function ItemsToAdd() {
  const history = useHistory();
  const dispatch = useDispatch();
  const { items } = useSelector((store) => store.items);
  const itemGrid = Object.keys(items).map((id) => (
    <li key={id}>
      <ItemToAddCard item={items[id]} />
    </li>
  ));

  const handleAddToDB = () => {
    ApiServices.postAddItem(
      TokenServices.decodeToken().id,
      TokenServices.getAuthToken(),
      Object.values(items)
    );
    dispatch(clearList());
    history.push("/dashboard");
  };

  const handleAddToGrocery = () => {
    ApiServices.postAddGroceryItem(
      TokenServices.decodeToken().id,
      TokenServices.getAuthToken(),
      Object.values(items)
    );
    dispatch(clearList());
    // console.log("Test");
    history.push("/grocery-list");
  };

  const handleClearList = () => {
    dispatch(clearList());
  };

  return (
    <div className="add-item-container">
      <h1>Items To Add</h1>
      {Object.keys(items).length === 0 ? (
        <p>There are no items to add</p>
      ) : (
        <div className="add-item-buttons">
          {itemGrid}
          <button className="button-top-container" onClick={handleAddToDB}>
            Add To Pantry
          </button>
          <button onClick={handleAddToGrocery}>Add To Grocery</button>
          <button className="button-top-container" onClick={handleClearList}>
            Clear List
          </button>
        </div>
      )}
    </div>
  );
}
