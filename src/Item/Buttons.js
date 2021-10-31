import React, { useState } from "react";

function Buttons({ addItem }) {
    const [qty, setQty] = useState(1);
    function handleAdd() {
        addItem(qty);
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
