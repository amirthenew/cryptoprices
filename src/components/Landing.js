import React,{useState,useEffect}from 'react';

import { getCoin } from '../services/api';


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
      <React.Fragment>
      <input type='text' placeholder='search'/>
      <div>
      {
        coins.map(coin=><p key={coin.id}>{coin.name}</p>)
      }
      </div>
        </React.Fragment>
        )
    

}
 
export default Landing;