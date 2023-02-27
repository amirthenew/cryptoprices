import React from 'react';
import styles from './Header.module.css'

const Header = (props) => {
    return ( 

<div className={styles.container}>

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
</div>

</div>

     );
}
 
export default Header;