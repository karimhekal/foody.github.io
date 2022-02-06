import classes from './Bar.module.css'
import React, { useEffect, useRef } from 'react'
import BarCategoryButton from './BarCategoryButton';
import { useDispatch, useSelector } from 'react-redux';
import { barActions } from '../store/store';
import { getCategories } from '../store/category-bar-slice';
const Bar = () => {
    const categories = useSelector(state => state.bar.categories)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getCategories())

    }, [])
    function selectCategoryHandler(value) {
        dispatch(barActions.selectCategory(value))
    }

    return (
        <nav className={classes.nav}>
            <ul className={classes.list}>
                {categories.map((element,index) =>
                    <BarCategoryButton key={index} selected={element.selected} onClick={selectCategoryHandler} categoryName={element.name} categoryId={element.id} />
                )}
            </ul>
        </nav>
    )

}
export default Bar;