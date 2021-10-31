import { ADD_ITEM, CHANGE_QTY } from "./types";

export function addToList(item) {
    return {
        type: ADD_ITEM,
        item,
    };
}

export function removeFromList(itemId, qty) {
    return {
        type: CHANGE_QTY,
        itemId,
        qty,
    };
}
