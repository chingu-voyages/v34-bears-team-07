import { SEARCH_ITEMS } from "../actions/types";

export default function rootReducer(state = [], action) {
    switch (action.type) {
        case SEARCH_ITEMS:
            return action.SEARCH_ITEMS;
        default:
            return state;
    }
}
