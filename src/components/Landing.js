import React,{useState,useEffect}from 'react';

import styles from './Landing.module.css'
import { getCoin } from '../services/api';
import Loader from './Loader';
import Coin from './Coin';

const Landing = () => {

  const [coins,setCoins]=useState([])
  const [search,setSearch]=useState('')

  
    useEffect(()=>{
const fetchAPI = async()=>{
  const data = await getCoin()
 setCoins(data)
 const newArr = []

 for (let i =0 ;i<data.length;i++){
  const mine = newArr.push(data)
  console.log(mine);
 }

 



}
fetchAPI()
    },[])

const searchHandler = (event)=>{
  setSearch(event.target.value)
}

const searchedCoins= coins.filter(coin=> coin.name.toLowerCase().includes(search.toLowerCase()) )

    return (
     <div>
 
      <input className={styles.input} value={search} type='text' placeholder='search' onChange={searchHandler}/>
      { 
        coins.length ? 
        <div className={styles.coinContainer}>
        {
 searchedCoins.map(coin =><Coin
  key={coin.id}
  name={coin.name}
  image={coin.image}
  symbol={coin.symbol}
  price={coin.current_price}
  marketCap = {coin.market_cap}
  priceChange={coin.price_change_percentage_24h}
   />)
        }
 </div> : <Loader/>   
      }  

 </div>
   
);
      }

 
export default Landing