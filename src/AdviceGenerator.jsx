import React, {useState, useEffect} from 'react'

function AdviceGenerator() {

    const [adviceNum, setAdviceNum] = useState([])
    const [advice, setAdvice] = useState([])


    useEffect(() => {
        fetch('https://api.adviceslip.com/advice')
            .then(res => res.json())
            .then(
                data => {
                    setAdvice(data.slip.advice)
                    setAdviceNum(data.slip.id)
                }
            )
    }) 

    

    return(
        <div className="generator-container">
            <h4>Advice #{adviceNum}</h4>
            <p>"{advice}"</p>
            <img className="mobile-pattern" src="images/pattern-divider-mobile.svg" alt="Divider" />
            <img className="desktop-pattern" src="images/pattern-divider-desktop.svg" alt="Divider" />
            <button className="btn"></button>
        </div>
    )
}

export default AdviceGenerator;