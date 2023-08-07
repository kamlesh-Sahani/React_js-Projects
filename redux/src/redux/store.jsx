import { configureStore } from "@reduxjs/toolkit";
import { changeNumber } from "./reducer";

const store = configureStore({
    reducer:{
        changeNumber,
    }
});
export default store;