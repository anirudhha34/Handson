import React from 'react';
import ReactDOM from 'react-dom';

function App() {
    var thingsArray = ["Thing 1", "Thing 2"]
    const thingsElements = thingsArray.map(thing => <p key={thing}>{thing}</p>)

    function handleClick(){
        var thisItem=`Thing ${thingsArray.length+1}`;
        thingsArray.push(thisItem)
        console.log(thingsArray);
    }
    

    
    return (
        <div>
            <button onClick={handleClick}>Add Item</button>
            {thingsElements}
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));