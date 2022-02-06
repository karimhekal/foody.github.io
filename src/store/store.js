import { configureStore } from "@reduxjs/toolkit";
import { categoryBarSlice } from "./category-bar-slice";

const store = configureStore(
    {
        reducer: { bar: categoryBarSlice.reducer }
    }
);

export const barActions = categoryBarSlice.actions;
export default store;