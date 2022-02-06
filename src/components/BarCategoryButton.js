import { Button } from "react-bootstrap";

const BarCategoryButton = (props) => {
    // const buttonClass = props.selected ? classes.selected : classes.notSelected
    return (
        <Button onClick={() => props.onClick(props.categoryId)}
            style={{
                borderWidth: 0,
                marginRight: 20,
                padding: 22,
                marginTop: 10,
                marginBottom: 10,
                backgroundColor: props.selected ? '#1f52ac' : '#ffff',
                color: props.selected ? 'white' : '#000000',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '5px',
                display: "flex",
                width: '80px',
                height: '30px'
            }}>
            {props.categoryName}
        </Button>
    )
}
export default BarCategoryButton;