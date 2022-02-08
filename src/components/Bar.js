import classes from './Bar.module.css'
import React, { useEffect } from 'react'
import BarCategoryButton from './BarCategoryButton';
import { useDispatch, useSelector } from 'react-redux';
import { getCategories, selectCategory } from '../store/categories-slice';
const Bar = () => {
    const categories = useSelector(state => state.categories.categories)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getCategories())
    }, [dispatch])

    function selectCategoryHandler(value) {
        dispatch(selectCategory(value))
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