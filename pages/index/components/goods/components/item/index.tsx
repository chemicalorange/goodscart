import Image from 'next/image'
import styles from './styles.module.scss'
import { useDispatch } from 'react-redux'
import { addGood } from "store/cartSlice"

interface Props {
  index: string,
  item: {
      name: string,
      image: any,
      price: number
  }
}

export const GoodItem:React.FC<Props> = ({index, item}) => {
    const {name, image, price} = item

    const dispatch = useDispatch()

    const addToCart = () => {
        const good = {}
        good[index] = item
        dispatch(addGood(good))
    }
    return (
        <div className={styles.item}>
            <div className={styles.image}>
                <Image src={image} alt={name} width={100} height={100} />
            </div>
            <div className={styles.content}>
                <h3 className={styles.title}>
                    {name}
                </h3>
                <span className={styles.price}>
                    {price}$
                </span>
                <button className={styles.button} onClick={addToCart}>
                    Add to cart
                </button>
            </div>
        </div>
    )
}