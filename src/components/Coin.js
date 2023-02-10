import React from 'react';
import styles from './Coins.module.css'
const Coin = ({name,image,symbol,price,marketCap,priceChange}) => {

    return ( <div className={styles.container}>
        <img style={{width:'20px'}} src={image} alt='name'/>
        <span>{name}</span>
        <span >{symbol}</span>
        <span>{price}</span>
        <span>{priceChange}</span>
        <span>{marketCap}</span>
        
        </div> );
}
 
export default Coin;