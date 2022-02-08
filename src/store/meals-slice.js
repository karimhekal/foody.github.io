import { createSlice } from "@reduxjs/toolkit";
import { db } from "../api/firebase";
import { collection, getDocs, query, where } from 'firebase/firestore'
import store, { mealsActions } from "./store";
///////
let initial = true;
//this variable's purpose is to prevent from requesting more than 1 request in the same time
// , it prevents adding any meals to the screen until the current request to the api finishes
// and gets the requested meals , otherwise it will add meals more than once  
const initialMealsState = {
    meals: [],
    shownMeals: []
}
export const mealsSlice = createSlice({
    name: 'mealsSlice',
    initialState: initialMealsState,
    reducers: {
        addMeal(state, action) {
            state.meals = [...state.meals, action.payload]
            // console.log(action.payload)
            // console.log('-------------------')
            // console.log(state.meals)
        },
        clearShownMeals(state) {
            state.shownMeals = []
        },
        setShownMeals(state, action) {
            // state.shownMeals = []
            state.shownMeals = state.meals.filter((element) => {
                // console.log(element.name)
                if (element.category.includes(action.payload)) {
                    return element;
                }
                else {
                    return false
                }
            })

            // console.log(state.meals)
        }
    }
});

export const getMeals = (category) => {

    return async (dispatch) => {
        const getAll = async () => {
            const mealsRef = collection(db, 'meals')
            const q = query(mealsRef, where("category", "array-contains", category))
            const querySnapshot = await getDocs(q);
            if (!querySnapshot.empty) {
                querySnapshot.forEach((doc) => {
                    dispatch(mealsActions.addMeal({
                        id: doc.id,
                        name: doc.data().name,
                        description: doc.data().description,
                        price: doc.data().price,
                        category: doc.data().category,
                        image: doc.data().image,
                    }))
                })
            }
            else if (querySnapshot.empty) {
                // console.log('no meals ')
            }

        }
        try {

            if (true) {
                let isCategorySaved = false;

                initial = false;
                store.getState().categories.categories.map((element) => {
                    if (element.id === category) {
                        console.log('=========')
                        if (element.saved) {
                            console.log(element.id + ' : saved');
                            isCategorySaved = true;
                            return true;
                        }
                        else {
                            console.log(element.id + ' : not saved');
                            isCategorySaved = false;
                            return false
                        }

                    }
                })
                // console.log(isCategorySaved);

                if (isCategorySaved) {
                    dispatch(mealsActions.setShownMeals(category))
                    console.log('its saved')
                    console.log(store.getState().meals.meals)

                }
                else {
                    console.log('its nottt saved')

                    await getAll().then(() => {
                        dispatch(mealsActions.setShownMeals(category))
                        initial = true
                        isCategorySaved = false;
                    });
                    // console.log('bdaaaaaaaany')

                }
            }

        } catch (e) {
            console.log(e + 'errror with request')
        }

    }
}