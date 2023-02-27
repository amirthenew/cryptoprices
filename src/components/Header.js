import React from 'react';
import styles from './Header.module.css'

const Header = (props) => {
    return ( 

<div className={styles.container}>

<div onClick={props.sortByName} >
Coin name
</div>

<div>
symbol
</div>

<div>
price
</div>

<div>
change
</div>

</div>

     );
}
 
export default Header;