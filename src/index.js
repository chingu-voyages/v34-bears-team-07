import React from "react";
import ReactDOM from "react-dom";
import "./bootstrap.min.css";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers/root";
import { composeWithDevTools } from "redux-devtools-extension";

import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById("root")
);