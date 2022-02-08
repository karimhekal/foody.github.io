import { Button } from "react-bootstrap";
import { Colors } from "../constants/colors";
import classes from './BarCategoryButton.module.css'
const BarCategoryButton = (props) => {
    // const buttonClass = props.selected ? classes.selected : classes.notSelected
    return (
        <div
            className={classes.barCategoryButton}
            style={{background:`linear-gradient(45deg, ${Colors.color1}, ${Colors.color2}, ${Colors.color3},${Colors.color4})`}}>
            <Button onClick={() => props.onClick(props.categoryId)}
                style={{
                    borderWidth: 0,
                    padding: 22,
                    backgroundColor: props.selected ? Colors.color4 : Colors.color2,
                    color: props.selected ? Colors.color1 : Colors.color4,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '25px',
                    display: "flex",
                    width: 'auto',
                    height: '30px'
                }}>
                {props.categoryName}
            </Button>
        </div>
    )
}
export default BarCategoryButton;