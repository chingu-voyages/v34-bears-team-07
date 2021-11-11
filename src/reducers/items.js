import {
    ADD_ITEM,
    CHANGE_QTY,
    CLEAR_LIST,
    UPDATE_ITEM,
    REMOVE_ITEM,
} from "../actions/types";

const INITIAL_STATE = {
    items: {},
};

export default function rootReducer(state = INITIAL_STATE, action) {
    let listCopy;
    switch (action.type) {
        case ADD_ITEM:
            listCopy = { ...state.items };
            let { itemId, qty } = action.item;
            if (listCopy[itemId]) {
                listCopy[itemId].qty += qty;
            } else {
                let newItem = { ...action.item };
                // delete newItem.itemId;
                listCopy[itemId] = newItem;
            }
            return {
                ...state,
                items: listCopy,
            };
        case CHANGE_QTY:
            listCopy = { ...state.items };
            if (!listCopy[action.itemId]) return state;
            listCopy[action.itemId].qty -= action.qty;
            if (listCopy[action.itemId].qty <= 0) {
                delete listCopy[action.itemId];
            }
            return {
                ...state,
                items: listCopy,
            };
        case UPDATE_ITEM:
            listCopy = { ...state.items };
            if (!listCopy[action.itemId]) return state;
            listCopy[action.itemId] = action.item;
            return {
                ...state,
                items: listCopy,
            };
        case REMOVE_ITEM:
            listCopy = { ...state.items };
            delete listCopy[action.itemId];
            return {
                ...state,
                items: listCopy,
            };
        case CLEAR_LIST:
            return {
                ...state,
                items: {},
            };

        default:
            return state;
    }
}