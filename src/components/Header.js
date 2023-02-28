import React,{useState} from 'react';
import styles from './Header.module.css'

const Header = (props) => {

    return ( 
<div className={styles.maindiv}>
<div className={styles.container}>
<input className={styles.input} value={props.search} type='text' placeholder='search' onChange={props.searchHandler}/>
<div className={styles.rows}>
<div className={styles.name} onClick={props.sortByName} >
Coin name
</div>
<div className={styles.symbol}>
symbol
</div>
<div className={styles.price}>
price
</div>
<div className={styles.change}>
change
</div>
<div className={styles.mrketCap} onClick={props.mainSort}>
Marketcap
</div></div>
</div>
</div>

     );
}
 
export default Header;


// <input className={styles.input} value={search} type='text' placeholder='search' onChange={searchHandler}/>