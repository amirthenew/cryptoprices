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
}
fetchAPI()
    },[])

const searchHandler = (event)=>{
  setSearch(event.target.value)
}

const sortByName = ()=>{
  console.log(coins)
  const newCoinArray = []
  coins.map((coin)=>newCoinArray.push(coin.id))
  console.log(newCoinArray);

  newCoinArray.sort(function(a,b){
    return a===b ? 0 : a<b ? -1 : 1
  })
console.log(newCoinArray);

}

const searchedCoins= coins.filter(coin=> coin.name.toLowerCase().includes(search.toLowerCase()) )

    return (
     <div>
 
      <input className={styles.input} value={search} type='text' placeholder='search' onChange={searchHandler}/>
      <button onClick={sortByName}>sort by name</button>
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