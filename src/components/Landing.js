import React,{useState,useEffect}from 'react';

import { getCoin } from '../services/api';
import Loader from './Loader';
import Coin from './Coin';

const Landing = () => {

  const [coins,setCoins]=useState([])

    useEffect(()=>{
const fetchAPI = async()=>{
  const data = await getCoin()
  console.log(data);
  setCoins(data)
}
fetchAPI()
    },[])

    return (
     <div>
      <input type='text' placeholder='search'/>
      { 
        coins.length ? 
        <div>
        {
 coins.map(coin =><Coin
  key={coin.id}
  name={coin.name}
  image={coin.image}
  symbol={coin.symbol}
  proce={coin.current_price}
  marketCap = {coin.market_cap}
  priceChange={coin.price_change_perventage_24h}
   />)
        }
 </div> : <Loader/>   
      }  
 </div>
   
);
      }

 
export default Landing