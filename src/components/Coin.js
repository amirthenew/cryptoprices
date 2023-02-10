import React from 'react';

const Coin = ({name,image,symbol,price,marketCap,priceChange}) => {

    return ( <div>
        <img style={{width:'20px'}} src={image}/>
        <span>{name}</span>
        <span>{symbol}</span>
        
        </div> );
}
 
export default Coin;