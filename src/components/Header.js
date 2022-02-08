import { NavLink } from 'react-router-dom';
import { Colors } from '../constants/colors';
import classes from './Header.module.css'
const Header = () => {
    return (
        <div className={classes.header}>
            <nav>
                <ul>
                    <li>
                        <h1 style={{color:Colors.color3,fontSize:32,fontWeight:'bold'}}  replace to='/Main'>foody</h1>
                    </li>

                    <li>
                        <NavLink className={classes.cartStyle} replace to='/Cart'>Cart</NavLink>
                    </li> </ul>
            </nav>
        </div>
    );
}

export default Header;