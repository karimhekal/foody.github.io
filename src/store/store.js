import { configureStore } from "@reduxjs/toolkit";
import { mealsSlice } from "./meals-slice";
import { categoryBarSlice } from "./categories-slice";
import { UISlice } from "./ui-slice";
import { cartSlice } from "./cart-slice";

const store = configureStore(
    {
        reducer: {
            cart: cartSlice.reducer,
            meals: mealsSlice.reducer,
            categories: categoryBarSlice.reducer,
            ui: UISlice.reducer
        }
    }
);

export const mealsActions = mealsSlice.actions;
export const cartActions = cartSlice.actions;
export const categoriesActions = categoryBarSlice.actions;
export const UIActions = UISlice.actions;
export default store;