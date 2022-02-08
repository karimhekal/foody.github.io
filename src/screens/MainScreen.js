import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MealItem from '../components/MealItem';
import classes from './MainScreen.module.css'
import { storage } from '../api/firebase';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { Colors } from '../constants/colors';
import { barActions, UIActions } from '../store/store';
import { getMeals } from '../store/meals-slice';
const MainScreen = () => {
    const selectedCategory = useSelector(state => state.bar.selectedCategory)
    const isLoading = useSelector(state => state.ui.isLoading)
    const dispatch = useDispatch()
    let content;
    const meals = useSelector(state => state.meals.meals)
    let resultToReturn = true;
    resultToReturn = meals.map((element) => { return element })

    useEffect(() => {
        dispatch(getMeals(selectedCategory))
        dispatch(barActions.selectCategory(selectedCategory))
    }, [selectedCategory, barActions.selectCategory, dispatch, getMeals])


    if (resultToReturn.length > 0) {
        content = resultToReturn.map((element, index) =>
            <MealItem
                image={element.image}
                key={element.id}
                id={element.id}
                name={element.name}
                quantity={element.quantity}
                description={element.description}
                price={element.price}
            />)
    }

    else {
        content = <div>Loading...</div>

    }


    function onInputChange(e) {
        const file = e.target.files[0]
        uploadFiles(file)
    }
    const [progress, setProgress] = useState(0)
    function uploadFiles(file) {
        if (!file) {
            return
        }
        const storageRef = ref(storage, file.name)
        const uploadTask = uploadBytesResumable(storageRef, file)
        uploadTask.on("state_changed", (snapshot) => {
            const prog = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100)
            setProgress(prog)
        }, (error) => console.log(error),
            () => getDownloadURL(uploadTask.snapshot.ref).then((url) => {
                console.log("url : " + url)
            }))
    }
    return (
        <div className={classes.listContainer} style={{ backgroundColor: Colors.color1 }}>
            <div className={classes.list}>
                {/* <input type={'file'} onChange={onInputChange} />
                <h1>Uplaoded {progress}%</h1> */}
                {
                    isLoading && content
                }
            </div>
        </div>
    );
}
export default MainScreen;