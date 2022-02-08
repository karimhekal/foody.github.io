import { createSlice } from "@reduxjs/toolkit";
import { db } from "../api/firebase";
import { collection, getDocs } from 'firebase/firestore'
import store, { categoriesActions, mealsActions } from "./store";
import { getMeals } from "./meals-slice";

const initialCategoryBarState = {
    categories: [],
    selectedCategory: ''
}
export const categoryBarSlice = createSlice({
    name: 'categorySlice',
    initialState: initialCategoryBarState,
    reducers: {
        selectCategory(state, action) {
            if (state.categories.length > 0) {
                state.selectedCategory = action.payload;
                state.categories.map((x) => x.selected = false);
                state.categories.find(element => element.id === action.payload).selected = true;
                state.categories.find(element => element.id === action.payload).saved = true;
            }
        },
        addCategory(state, action) { //dispatched while fetching backend
            state.categories = [...state.categories, {
                id: action.payload.id,
                name: action.payload.name,
                saved: false
            }]
        }
    }
});

export const getCategories = () => {
    return async (dispatch) => {

        const getAll = async () => {
            const querySnapshot = await getDocs(collection(db, "categories"));
            let selectedCategory = ''
            querySnapshot.forEach((doc) => {
                dispatch(categoriesActions.addCategory({
                    id: doc.data().id,
                    name: doc.data().name
                }))
                if (doc.data().selected) {
                    selectedCategory = doc.data().id
                }
            });
            dispatch(selectCategory(selectedCategory))
        }


        try {
            await getAll()
        } catch (e) {

        }
    }
}

export const selectCategory = (category) => {
    return async (dispatch) => {
        const getMealsForCategoryAndSelect = async () => {
            dispatch(mealsActions.clearShownMeals())
            dispatch(getMeals(category))
            dispatch(categoriesActions.selectCategory(category))
            dispatch(mealsActions.clearShownMeals())
            dispatch(mealsActions.setShownMeals(category))

        }
        try {
            await getMealsForCategoryAndSelect();
        } catch (e) {

        }
    }
}