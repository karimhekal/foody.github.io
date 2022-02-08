import { createSlice } from "@reduxjs/toolkit";
import { db } from "../api/firebase";
import { collection, getDocs, query, where } from 'firebase/firestore'
import store, { barActions, mealsActions, UIActions } from "./store";
///////
let initial = true;
//this variable's purpose is to prevent from requesting more than 1 request in the same time
// , it prevents adding any meals to the screen until the current request to the api finishes
// and gets the requested meals , otherwise it will add meals more than once  
const initialMealsState = {
    meals: []
}
export const mealsSlice = createSlice({
    name: 'mealsSlice',
    initialState: initialMealsState,
    reducers: {
        addMeal(state, action) {
            state.meals = [...state.meals, action.payload]
        },
        clearMeals(state) {
            state.meals = []
        },
    }
});

export const getMeals = (category) => {

    return async (dispatch) => {
        const isThereCategory = store.getState().bar.categories.find((element) => {
            if (element.id === category) {
                return true;
            }

        })
        console.log(isThereCategory)

        dispatch(mealsActions.clearMeals())
        const getAll = async () => {
            const mealsRef = collection(db, 'meals')
            const q = query(mealsRef, where("category", "array-contains", category))
            const querySnapshot = await getDocs(q);
            if (!querySnapshot.empty) {
                console.log('there are meals')
                querySnapshot.forEach((doc) => {
                    dispatch(mealsActions.addMeal({
                        id: doc.id,
                        name: doc.data().name,
                        description: doc.data().description,
                        price: doc.data().price,
                        category: doc.data().category,
                        image: doc.data().image,
                        quantity: 0
                    }))
                })
            }
            else if (querySnapshot.empty) {
                console.log('no meals ')
            }

        }
        try {
            if (initial) {
                initial = false;
                await getAll().then(() => {
                    initial = true
                });
            }
        } catch (e) {
            console.log(e + 'errror with request')
        }

    }
}