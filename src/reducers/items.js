import { ADD_ITEM, CHANGE_QTY } from "../actions/types";

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
                listCopy[itemId] = action.item;
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

        default:
            return state;
    }
}
