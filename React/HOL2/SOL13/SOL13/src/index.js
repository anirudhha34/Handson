import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));


const header = <nav>
  <img src='logo192.png' alt='' width='60px'></img>
  <h1>Why learn React?</h1>
</nav>

function Footer() {
  return (<footer>
    &copy;2022 SIngh development. All rights reserved
  </footer>)

}

function Page() {
  return (
    <div>
      {header}
      <ol>
        <li>React is flexible and efficient</li>
        <li>React developers are in demand</li>
        <li>React doesn't take long to learn</li>
      </ol>
      {Footer()}
    </div>
  )
}
root.render(
  <Page />
);

