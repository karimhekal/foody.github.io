import { createSlice } from "@reduxjs/toolkit";
import { db } from "../api/firebase";
import { collection, getDocs } from 'firebase/firestore'
import store, { barActions } from "./store";

const initialCategoryBarState = {
    categories: [],
    selectedCategory: ''
}
export const categoryBarSlice = createSlice({
    name: 'categoryBar',
    initialState: initialCategoryBarState,
    reducers: {
        selectCategory(state, action) {
            if (state.categories.length > 0) {
                state.selectedCategory = action.payload;
                state.categories.map((x) => x.selected = false);
                state.categories.find(element => element.id === action.payload).selected = true;
            }
        },
        addCategory(state, action) {
            state.categories = [...state.categories, { id: action.payload.id, name: action.payload.name }]
        }
    }
});

export const getCategories = () => {
    return async (dispatch) => {
        const getAll = async () => {
           



            const querySnapshot = await getDocs(collection(db, "categories"));
            let selectedCategory = ''
            querySnapshot.forEach((doc) => {
                dispatch(barActions.addCategory({ id: doc.data().id, name: doc.data().name }))
                if (doc.data().selected) {
                    // console.log(doc.data().id)
                    selectedCategory = doc.data().id
                }
            });
            dispatch(barActions.selectCategory(selectedCategory))
        }
        try {
            await getAll().then(() => {

            });
        } catch (e) {

        }
    }
}