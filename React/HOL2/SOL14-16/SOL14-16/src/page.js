import React from 'react';
import ReactDOM from 'react-dom/client';

function Page() {
    return (
        MainContent()
        Header()
        Footer()
        // <div>
        //     <header>
        //         <nav>
        //             <img src='logo192.png' alt='' width='70px'></img>
        //         </nav>
        //     </header>
        //     <content>
        //         <h1>Why Learn React?</h1>
        //         <ol>
        //             <li>React is flexible and efficient</li>
        //             <li>React developers are in demand</li>
        //             <li>React doesn't take long to learn</li>
        //         </ol>
        //     </content>

        //     <footer>
        //         <span><b>&copy; Gupta development. All rights reserved</b></span>
        //     </footer>
        // </div>
    )
}

function Header() {
    <header>
        <nav>
            <img src='logo192.png' alt='' width='70px'></img>
        </nav>
    </header>
}
function MainContent() {
    return (
        <mainContent>
            <h1>Why Learn React?</h1>
            <ol>
                <li>React is flexible and efficient</li>
                <li>React developers are in demand</li>
                <li>React doesn't take long to learn</li>
            </ol>
        </mainContent>
    )
}
function Footer() {
    <footer>
        <span><b>&copy; SIngh development. All rights reserved</b></span>
    </footer>
}


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<Page />)