import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { cartActions } from '../store/store';
import classes from './MealItem.module.css'
const MealItem = (props) => {
    const [showMinusButton, setShowMinusButton] = useState(false)
    const [itemAmount, setItemAmount] = useState(0)
    const dispatch = useDispatch()
    function addItemHandler() {
        setShowMinusButton(true)
        
        const newVal=itemAmount+1;
        setItemAmount(newVal)
    }
    function removeItemHandler(){
        const newVal=itemAmount-1;
        setItemAmount(newVal)
    }
    
    useEffect(()=>{
        if (props.quantity===0){
            setShowMinusButton(false)
        }
    },[itemAmount])
    return (
        <div className={classes.mealItemContainer}>
            <div className={classes.img} style={{ backgroundImage: `url(${props.image})` }}>
                <div className={classes.name}>
                    {props.name}
                </div>
            </div>
            <div className={classes.mealDetail}>
                <p >{props.description}</p>
                <h3>{props.price} EGP</h3>
            </div>
            <div className={classes.actions} style={{ justifyContent: showMinusButton ? 'space-between' : 'right' }}>
                {showMinusButton && <button style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    fontSize: '22px',
                    fontWeight: '500',
                    color: 'white',
                    borderStyle: 'solid'
                }}
                onClick={removeItemHandler}
                >-</button>
                }
                {showMinusButton&& <div className={classes.quantityContainer} >
                    <h2 style={{ color: 'white', margin: '0' }} >{itemAmount}</h2>
                </div>}
                <button onClick={addItemHandler} style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    fontSize: '22px',
                    fontWeight: '500',
                    color: 'white',
                    borderStyle: 'solid'
                }}>+</button>
            </div>
        </div >
    )
}
export default MealItem;