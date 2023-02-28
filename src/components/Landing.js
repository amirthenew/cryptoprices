import React,{useState,useEffect}from 'react';

import styles from './Landing.module.css'
import { getCoin ,getCoinByName} from '../services/api';
import Loader from './Loader';
import Coin from './Coin';
import Header from './Header';

const Landing = () => {

  const [coins,setCoins]=useState([])
  const [search,setSearch]=useState('')
    const searchHandler = (event)=>{
        setSearch(event.target.value)
      }

  
    useEffect(()=>{
const fetchAPI = async()=>{
  const data = await getCoin()
 setCoins(data)
}

fetchAPI()
    },[])

    const mainSort = ()=>{
      const fetchAPI = async()=>{
        const data = await getCoin()
       setCoins(data)
      }
      fetchAPI()
    }


    const fetchAPIByName = async()=>{
      const data = await getCoinByName()
      console.log(data);
      setCoins(data)
    }



const sortByName = ()=>{

  fetchAPIByName()
}



const searchedCoins= coins.filter(coin=> coin.name.toLowerCase().includes(search.toLowerCase()) )


    return (
     <div>

    
      <Header search={search} sortByName={sortByName} mainSort={mainSort} searchHandler={searchHandler} />
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