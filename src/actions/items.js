import { ADD_ITEM, CHANGE_QTY, CLEAR_LIST, UPDATE_ITEM } from "./types";

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

export function clearList() {
    return {
        type: CLEAR_LIST,
    };
}

export function updateItem(itemId, item) {
    return {
        type: UPDATE_ITEM,
        itemId,
        item,
    };
}
