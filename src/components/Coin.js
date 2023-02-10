import React from 'react';
import styles from './Coins.module.css'
const Coin = ({name,image,symbol,price,marketCap,priceChange}) => {

    return ( <div className={styles.container}>
        <img src={image} alt='name'/>
        <span className={styles.name}>{name}</span>
        <span className={styles.symbol} >{symbol}</span>
        <span className={styles.price}>{price}</span>
        <span className={styles.priceChange}>{priceChange}</span>
        <span className={styles.marketCap}>{marketCap}</span>
        
        </div> );
}
 
export default Coin;