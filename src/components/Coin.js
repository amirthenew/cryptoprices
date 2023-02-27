import React from 'react';
import styles from './Coins.module.css'
const Coin = ({name,image,symbol,price,marketCap,priceChange}) => {

    return ( <div className={styles.container}>
        <img src={image} alt='name'/>
        <span className={styles.name}>{name}</span>
        <span className={styles.symbol} >{symbol.toUpperCase()}</span>
        <span className={styles.price}>{price.toLocaleString()}</span>
        <span className={priceChange > 0 ? styles.greenPrice : styles.redPrice}>{priceChange}</span>
        <span className={styles.marketCap} >$ {marketCap.toLocaleString()}</span>
        
        </div> );
}
 
export default Coin;