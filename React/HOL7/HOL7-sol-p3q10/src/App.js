import React from "react"

export default function App() {
    /**
     * Challenge: 
     * - Initialize state for `isGoingOut` as a boolean
     * - Make it so clicking the div.state--value flips that
     *   boolean value (true -> false, false -> true)
     * - Display "Yes" if `isGoingOut` is `true`, "No" otherwise
     */
    
    const[ isGoingOut,setIsGoingOut]=React.useState(true)
    // const[ans,setAns] = React.useState("YES")
    // function clickHandle(){
    //     if(isGoingOut===true)
    //     {
    //         setIsGoingOut(false)
    //         setAns("YES");
    //     }
    //     else 
    //     {
    //         setIsGoingOut(true)
    //         setAns("NO")
    //     }
    // }

    function clickHandle(){
        setIsGoingOut((prevState)=>(prevState ? false : true))
    }
    return (
        <div className="state">
            <h1 className="state--title">Do I feel like going out tonight?</h1>
            <div className="state--value" onClick={clickHandle}>
                {/* <h1>{ans}</h1> */}
                {isGoingOut ? "YES" : "NO"}
            </div>
        </div>
    )
}
