import React from 'react'
import { useState,useEffect } from 'react'

function Main() {
    const [quote,setQuote]=useState([]);
    

    const fetchQuote=async()=>{
        const response=await fetch('https://type.fit/api/quotes')
        // .then(res=>res.json())
        const data1=await response.json()
        const num=Math.floor(Math.random()*data1.length)
        setQuote(data1[num].text)
       
    }
    console.log(quote);

    useEffect(()=>{
        fetchQuote()
    },[])

  return (
    <div className='quote-container'>
       <h4>{quote}</h4>
       
      
       <button onClick={fetchQuote}>Generate Next</button>
    </div>
  )
}

export default Main