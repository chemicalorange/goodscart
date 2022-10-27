import { useDispatch } from 'react-redux'
import RemoveIcon from './delete.png'
import styles from './styles.module.scss'
import Image from "next/image";
import { incrementGood, decrementGood, removeGood } from "../../../../../store/cartSlice";

interface Props {
    index: string,
    item: {
        name: string,
        fullPrice: number,
        image: string,
        quantity: number
    }
}

export const CartItem:React.FC<Props> = ({index, item}) => {
    const {name, fullPrice, image, quantity} = item
    const dispatch = useDispatch()
    return (
        <div className={styles.item}>
            <div className={styles.image}>
                <Image src={image} width={100} height={100} alt={name} />
            </div>
            <div className={styles.content}>
                <h3 className={styles.title}>
                    {name}
                </h3>
                <span className={styles.price}>
                    {fullPrice}$
                </span>
                <div className={styles.quantity}>
                    <button onClick={() => dispatch(decrementGood(index))}>-</button>
                    <span>{quantity}</span>
                    <button onClick={() => dispatch(incrementGood(index))}>+</button>
                    <button onClick={() => dispatch(removeGood(index))}>
                        <Image src={RemoveIcon} alt={'delete'} width={20} height={20} />
                    </button>
                </div>
            </div>
        </div>
    )
}