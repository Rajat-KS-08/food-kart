import React, {Fragment, useContext} from "react";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";


const Cart = (props) => {

    const cartCtx = useContext(CartContext);

    const totalAmount = `₹${cartCtx.totalAmount.toFixed(2)}` ;

    const cartItemAddHandler = (item) => {
        cartCtx.addItem({...item, amount : 1});
    }

    const cartItemRemoveHandler = (id) => {
        cartCtx.removeItem(id);
    }

    const cartItems = (
        <ul className={classes['cart-items']}>
            {cartCtx.items.map((item) => (
                <CartItem 
                key={item.id} 
                name={item.name} 
                amount={item.amount} 
                price={item.price} 
                onAdd={cartItemAddHandler.bind(null, item)} 
                onRemove={cartItemRemoveHandler.bind(null, item.id)} />
            ))}
        </ul>
    );
    return(
        <Fragment>
            <Modal>
                {cartItems}
                <div>
                    <span>Total Amount</span>
                    <span>{totalAmount}</span>
                </div>
                <div className={classes.actions}>
                    <button className={classes['button--alt']} onClick={props.onHideCart}>Close</button>
                    <button className={classes.button}>Order</button>
                </div>
            </Modal>
        </Fragment>
    );
}

export default Cart;