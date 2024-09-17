import React, { useState } from 'react'

const FAQ = ({curData}) => {
    const {id,question,answer}=curData;

    const [activeId,setActiveId]=useState(false)
    const handleButton=()=>{
        setActiveId(!activeId)
    }
    return (
        <div>
            <li key={id}>
                
                <div className="accordion-grid">
                    <p className="accordion-question">{question}</p>
                    <button onClick={handleButton}>{activeId? "Close":"Show"}</button>
                    
                </div>
                <p>{activeId && answer}</p>
            </li>
        </div>
    )
}

export default FAQ
