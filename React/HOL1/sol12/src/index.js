
import React from 'react';
import ReactDOM from 'react-dom/client';




function Page(){
  return(
    <ol>
      <li>React is flexible and efficient</li>
      <li>React developers are in demand</li>
      <li>React doesn't take long to learn</li>
    </ol>
  )
}




const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<Page />)