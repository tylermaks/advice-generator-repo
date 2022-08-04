import React, {useState, useEffect} from 'react'

function AdviceGenerator() {

    const [adviceNum, setAdviceNum] = useState([])
    const [advice, setAdvice] = useState([])


    const getData = async () => {
        const res = await fetch('https://api.adviceslip.com/advice')
        const data = await res.json()

        setAdvice(data.slip.advice)
        setAdviceNum(data.slip.id)
    }

    useEffect(() => {
        getData()
    }) 

    return(
        <div className="generator-container">
            <h4>Advice #{adviceNum}</h4>
            <p>"{advice}"</p>
            <img className="mobile-pattern" src="images/pattern-divider-mobile.svg" alt="Divider" />
            <img className="desktop-pattern" src="images/pattern-divider-desktop.svg" alt="Divider" />
            <button onClick={getData} className="btn"></button>
        </div>
    )
}

export default AdviceGenerator;