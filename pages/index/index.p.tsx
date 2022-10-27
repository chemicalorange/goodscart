
import styles from './styles.module.scss'
import { Goods } from "./components/goods";
import { Cart } from "components/common/cart";

const IndexPage = () =>{
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <Goods />
                <Cart />
            </div>
        </div>
    )
}

export default IndexPage