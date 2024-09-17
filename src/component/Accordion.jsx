import React, { useEffect, useState } from 'react'
import faq from "../api/faq.json"
import FAQ from '../layout/FAQ'


const Accordion = () => {
    const [data,setData]=useState([])
    

    useEffect(()=>{
        setData(faq);

    },[])
  return (
    <>
    <h1>The Accordion</h1>
    <ul className="section-accordion">
        {
            data.map((curElm)=>{
                return(
                    <FAQ key={curElm.id} curData={curElm}/>
                )
            })

        }
    </ul>
    
    </>
  )
}

export default Accordion
