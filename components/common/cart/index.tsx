import styles from './styles.module.scss'
import { CartItem } from "./components/item";
import { useSelector, useDispatch } from 'react-redux'
import { clearCard } from "store/cartSlice";

export const Cart = () => {
    const cart = useSelector((state) => state.cart)
    const dispatch = useDispatch()

    const {items, total} = cart

    return (
        <div className={styles.wrapper}>
            <h2 className={styles.title}>
                Goods in cart
            </h2>
            {
                Object.entries(items).length < 1 && (
                    <span>
                        Cart is empty. Add good to cart
                    </span>
                )
            }
            {Object.entries(items).map(([index, item] ) => <CartItem key={index} index={index} item={item} /> )}
            {
                Object.entries(items).length > 0 && (
                    <div className={styles.total}>
                        <span>Total: {total}$</span>
                        <button onClick={() => dispatch(clearCard())}>Clear cart</button>
                    </div>
                )
            }
        </div>
    )
}