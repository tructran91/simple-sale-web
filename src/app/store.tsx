import { configureStore } from "@reduxjs/toolkit";
import systemReducer from "./systemSlice";

const rootReducer = {
    systems: systemReducer
}

const store = configureStore({
    reducer: rootReducer,
});

export default store;