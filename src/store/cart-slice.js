import { createSlice } from "@reduxjs/toolkit";

const initialCartState = {
    items: [
    ],
    totalAmount: 0
}
export const cartSlice = createSlice({
    name: 'cartSlice',
    initialState: initialCartState,
    reducers: {
        addItem(state, action) {
            state.items=[...state.items,action.payload]
            state.totalAmount = state.totalAmount + action.payload.price
            
        },
        removeItem(state, action) {

        }
    }
})