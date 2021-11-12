import React, { useState, useEffect, useRef } from "react";
import ApiServices from "../apiServices";
import ItemCard from "./ItemCard";

const ItemSearch = () => {
    const inputEl = useRef(null);
    const [items, setItems] = useState([]);
    const [text, setText] = useState("");
    useEffect(() => {
        async function fetchItems() {
            if (text.trim().length) {
                let searchRes = await ApiServices.getItems(text);
                if (text === inputEl.current.value) {
                    searchRes = searchRes.slice(0,8)
                    setItems(searchRes);
                }
            } else {
                setItems([]);
            }
        }
        fetchItems();
    }, [text]);

    function handleChange(e) {
        setText(e.target.value);
    }

    return (
        <div className="add-item-container">
            <form>
                <label htmlFor="searchBar"><h2>Look For An Item:</h2></label>
                <div className="add-item-header"><input
                    id="searchBar"
                    type="text"
                    placeholder="search keyword"
                    name="keyword"
                    autoComplete="off"
                    onChange={handleChange}
                    value={text}
                    ref={inputEl}
                />
                </div>
            </form>
            {items && items.length ? (
                <ul>
                    {items.map((item) => {
                        return (
                            <li key={item._id}>
                                <ItemCard item={item} />
                            </li>
                        );
                    })}
                </ul>
            ) : null}
        </div>
    );
};

export default ItemSearch;