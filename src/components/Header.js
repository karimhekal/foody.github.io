import { NavLink } from 'react-router-dom';
import classes from './Header.module.css'
const Header = () => {
    return (
        <div className={classes.header}>
            <nav>
                <ul>
                    <li>
                        <div style={{color:'white',fontSize:24,fontWeight:'bold'}} color='white' replace to='/Main'>foody</div>
                    </li>

                    <li>
                        <NavLink className={classes.cartStyle} replace to='/Cart'>Cart</NavLink>
                    </li> </ul>
            </nav>
        </div>
    );
}

export default Header;