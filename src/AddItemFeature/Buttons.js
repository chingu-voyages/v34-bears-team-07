import React, { useState } from "react";

function Buttons({ addItem, defaultQty = 1 }) {
    const [qty, setQty] = useState(defaultQty);
    function handleAdd() {
        addItem(qty);
        setQty(defaultQty);
    }
    return (
        <div>
            <button onClick={() => setQty((qty) => (qty > 1 ? qty - 1 : qty))}>
                -
            </button>
            <span>{qty}</span>
            <button onClick={() => setQty(qty + 1)}>+</button>
            <button onClick={handleAdd}>Add</button>
        </div>
    );
}

export default Buttons;
