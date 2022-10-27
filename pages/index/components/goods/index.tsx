import { goodsData } from './data'
import { GoodItem } from "./components/item";
import styles from './styles.module.scss'

export const Goods = () => {
    return(
        <section className={styles.wrapper}>
            {Object.entries(goodsData).map(([index, item]) => <GoodItem key={index} index={index} item={item} />)}
        </section>
    )
}