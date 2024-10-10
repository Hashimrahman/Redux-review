import { configureStore } from "@reduxjs/toolkit";
import inputSlice from "../features/inputSlice";

const store = configureStore({
    reducer:{
        input: inputSlice
    }
})

export default store