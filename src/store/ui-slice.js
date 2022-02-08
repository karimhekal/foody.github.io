import { createSlice } from "@reduxjs/toolkit";
const initialUIState = {
    mainScreenMsg: '',
    isLoading: true,
    selectedCategory: '',
}
export const UISlice = createSlice({
    name: 'uiSlice',
    initialState: initialUIState,
    reducers: {
        setMainScreenMsg(state, action) {
            state.mainScreenMsg = action.payload;
        },
        setIsLoading(state, action) {
            state.isLoading = action.payload
        },
        selectCategory(state, action) {
            state.selectedCategory = action.payload
        }
    }
})