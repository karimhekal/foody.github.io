import classes from './Bar.module.css'
import React, { useEffect } from 'react'
import BarCategoryButton from './BarCategoryButton';
import { useDispatch, useSelector } from 'react-redux';
import { barActions, mealsActions } from '../store/store';
import { getCategories } from '../store/category-bar-slice';
import { getMeals } from '../store/meals-slice';
const Bar = () => {
    const categories = useSelector(state => state.bar.categories)
    const selectedCategory = useSelector(state => state.bar.selectedCategory)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getCategories())
        // dispatch(getMeals(selectedCategory))
    }, [dispatch])
    useEffect(()=>{
        dispatch(barActions.selectCategory(selectedCategory))
    },[dispatch,selectedCategory])
    function selectCategoryHandler(value) {
        dispatch(mealsActions.clearMeals())
        dispatch(barActions.selectCategory(value))
        dispatch(mealsActions.clearMeals())
        dispatch(getMeals(value))
    }

    return (
        <nav className={classes.nav}
        >
            <ul className={classes.list}>
                {categories.map((element, index) =>
                    <BarCategoryButton key={index} selected={element.selected} onClick={selectCategoryHandler} categoryName={element.name} categoryId={element.id} />
                )}
            </ul>
        </nav>
    )

}
export default Bar;