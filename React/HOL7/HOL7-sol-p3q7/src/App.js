import React from "react"

export default function App() {

    const[isImportant,setIsImportant]=React.useState("YES");
    
    function handleClick(){
        setIsImportant("NO")
    }

    return (
        <div className="state">
            <h1 className="state--title">Is state important to know?</h1>
            <div className="state--value" onClick={handleClick}>
                <h1>{isImportant}</h1>
            </div>
        </div>
    )
}
