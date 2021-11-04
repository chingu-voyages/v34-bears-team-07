import { useSelector } from "react-redux";
import ItemToAddCard from "./ItemToAddCard";
import ApiServices from "../apiServices";

export default function ItemsToAdd() {
    const { items } = useSelector((store) => store.items);
    const itemGrid = Object.keys(items).map((id) => (
        <li key={id}>
            <ItemToAddCard item={items[id]} />
        </li>
    ));

    const handleAddToDB = () => {
        console.log(items);
        console.log(Object.values(items));

        ApiServices.postAddItem(
            "616c8fc418acccb07603d9eb",
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNmM4ZmM0MThhY2NjYjA3NjAzZDllYiIsImlhdCI6MTYzNjA0NTA2N30.K4SUEat-5bc1mVZMdv4Q1lKAdhRrbzV-cnfTCv2wMGM",
            Object.values(items)
        );
    };

    return (
        <div>
            <h2>Items To Add</h2>
            {Object.keys(items).length === 0 ? (
                <h3>There is no item in the cart</h3>
            ) : (
                <div>
                    {itemGrid}
                    <button onClick={handleAddToDB}>Add To Pantry</button>
                </div>
            )}
        </div>
    );
}
