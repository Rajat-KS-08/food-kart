import React, {Fragment} from 'react' ;
import HeaderButton from "./HeaderButton";
import mealsImg from "../../Assets/meals.jpg";
import classes from "./Header.module.css";


const Header = (props) => {
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>FoodCart</h1>
                <HeaderButton onClick={props.onShowCart} />
            </header>
            <div className={classes['main-image']}>
                <img src={mealsImg} alt="FoodCart Meals is Loading..." />
            </div>
        </Fragment>
    );
}

export default Header;