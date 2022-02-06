import { useSelector } from 'react-redux';
import MealItem from '../components/MealItem';
import { MEALS } from '../Data/DATA';
import classes from './MainScreen.module.css'
const MainScreen = () => {

    const selectedCategory = useSelector(state => state.bar.selectedCategory)
    let content;

    let resultToReturn = false;
    resultToReturn = MEALS.filter((element, index) => {

        if (element.category === selectedCategory && !Array.isArray(element.category)) {
            return element
        }
        else if (Array.isArray(element.category)) {
            console.log('arraaaaay');
        }


    });
    if (resultToReturn.length > 0) {
        content = resultToReturn.map((element) => <MealItem key={element.id} name={element.name} description={element.description} price={element.price} />)
    }
    else {
        content = <div>We're sorry, There are no meals available for this category.</div>
    }
    return (
        <div className={classes.listContainer}>
            <div className={classes.list}>

                {
                    content
                }
            </div>
        </div>
    );
}
export default MainScreen;

// {
//     // let obj = CATEGORIES.find(o => o.id === '1');
//     // console.log(element.category);
//     if ( element.category==='2')
//     {
//     // console.log(obj.id)
//         return <MealItem key={element.id} name={element.name} description={element.description} price={element.price} />
//     }
//     else {
//         return <div>Sorry no meals found</div>
//     }
//     // console.log(obj)
// }