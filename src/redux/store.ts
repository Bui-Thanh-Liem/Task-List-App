// import { createStore } from "redux";
// import { composeWithDevTools } from "redux-devtools-extension";
// import rootReducer from "./reducer";
// const composeEnhancers = composeWithDevTools();
// const store = createStore(rootReducer, composeEnhancers);
// export default store;


import { configureStore } from "@reduxjs/toolkit";

import taskListSlice from "../components/ListTask/taskListSlice";
import filterSlice from "../components/Filters/filterSlice";

const store = configureStore({
    reducer: {
        taskList: taskListSlice.reducer,
        filter: filterSlice.reducer,
    }
});

export default store;

