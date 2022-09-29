import React from "react"

export default function App() {
    function clickHandle(){
        console.log("I was Clicked");
    }
    function hoverHandle(){
        console.log("Mouse slided");
    }

    return (
        <div className="container">
            <img src="https://picsum.photos/640/360" className="image" />
            <button className="click-button" onClick={clickHandle} onMouseEnter={hoverHandle}>Click me</button>
        </div>
    )
}
