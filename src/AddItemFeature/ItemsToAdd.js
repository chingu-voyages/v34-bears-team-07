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
        history.push("/");
    };

    const handleClearList = () => {
        dispatch(clearList());
    };

    return (
        <div>
            <h2>Items To Add</h2>
            {Object.keys(items).length === 0 ? (
                <h3>There is no item to add</h3>
            ) : (
                <div>
                    {itemGrid}
                    <button onClick={handleAddToDB}>Add To Pantry</button>
                    <button onClick={handleClearList}>Clear List</button>
                </div>
            )}
        </div>
    );
}
