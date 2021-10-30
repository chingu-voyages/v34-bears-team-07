import ApiServices from "../apiServices";
import { SEARCH_ITEMS } from "./types";

export function fetchItemsfromAPI(keyWord) {
    return async function (dispatch) {
        const items = await ApiServices.getItems(keyWord);
        return dispatch(getItems(items));
    };
}

function getItems(items) {
    return {
        type: SEARCH_ITEMS,
        items,
    };
}
