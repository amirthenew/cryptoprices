import React,{useState,useEffect}from 'react';

import { getCoin } from '../services/api';
import Loader from './Loader';

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
 coins.map(coin =><p key={coin.id}>{coin.name} {coin.current_price}$</p>)
        }
 </div> : <Loader/>   
      }  
 </div>
   
);
      }

 
export default Landing