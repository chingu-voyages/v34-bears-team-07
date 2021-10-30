import React, { useState, useEffect, useRef } from "react";
import ApiServices from "../apiServices";

const ItemSearch = () => {
    const inputEl = useRef(null);
    const [items, setItems] = useState([]);
    const [text, setText] = useState("");
    useEffect(() => {
        async function fetchItems() {
            if (text.trim().length) {
                let searchRes = await ApiServices.getItems(text);
                if (text === inputEl.current.value) {
                    setItems(searchRes);
                }
            } else {
                setItems([]);
            }
        }
        fetchItems();
    }, [text]);

    function handleChange(e) {
        // console.log("value", e.target.value);
        setText(e.target.value);
    }

    return (
        <>
            <form>
                <input
                    type="text"
                    placeholder="search keyword"
                    name="keyword"
                    autocomplete="off"
                    onChange={handleChange}
                    value={text}
                    ref={inputEl}
                />
            </form>
            {items && items.length ? (
                <ul>
                    {items.map((item) => (
                        <li>{item.name}</li>
                    ))}
                </ul>
            ) : null}
        </>
    );
};

export default ItemSearch;
