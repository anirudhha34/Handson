import React from "react"

export default function App() {
    /**
     * Challenge: Set up state to track our count (initial value is 0)
     */

    const [count,setCount]= React.useState(0);

    function countInc() {
        setCount((prevCount) => prevCount + 1);
        
    }
    function countDec(){
        setCount((prevCount)=>prevCount-1);
        

    }
    // console.log(count);
    return (
        <div className="counter">
            <button className="counter--minus"onClick={countDec}>–</button>
            <div className="counter--count" >
                <h1>{count}</h1>
            </div>
            <button className="counter--plus" onClick={countInc}>+</button>

        </div>
    )
}
