import { createSlice } from "@reduxjs/toolkit";
import { db } from "../api/firebase";
import { collection, getDocs } from 'firebase/firestore'
// import { CATEGORIES } from "../Data/DATA";
import { barActions } from "./store";
// const bdan = CATEGORIES.map(element => element);

const initialCategoryBarState = {
    hello: 'eeee',
    categories: [],
    selectedCategory: 'salads'
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
        const allData = [];
        const getAll = async () => {
            const querySnapshot = await getDocs(collection(db, "categories"));
            // console.log(querySnapshot)
            querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                // console.log(doc.id, " => ", doc.data());
                allData.push(doc.data().name);
                dispatch(barActions.addCategory({ id: doc.data().id, name: doc.data().name }))
            });
            dispatch(barActions.selectCategory('offers'))
        }

        getAll();


    }
}