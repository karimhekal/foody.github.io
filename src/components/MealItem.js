import { Button } from 'react-bootstrap';
import classes from './MealItem.module.css'
const MealItem = (props) => {


    
    return (
        <div className={classes.mealItemContainer}>
            <div className={classes.img}>
                <div className={classes.name}>
                    {props.name}
                </div>
            </div>
            <div className={classes.mealDetail}>
                <p >{props.description}</p>
                <h3>{props.price} EGP</h3>
            </div>
            <div className={classes.actions}>
                <Button>-</Button>
                <div className={classes.quantityContainer} >
                <h2 style={{color:'white',margin:'0'}} >22</h2>
                </div>
                <Button>+</Button>
            </div>
        </div >
    )
}
export default MealItem;