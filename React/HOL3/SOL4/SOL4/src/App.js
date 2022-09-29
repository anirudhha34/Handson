import React from "react"
import Contact from "./components/Contact"

function App() {
    return (
        // <div className="contacts">

        //     <div className="contact-card">
        //         <img src="./images/mr-whiskerson.png" />
        //         <h3>Mr. Whiskerson</h3>
        //         <div className="info-group">
        //             <img src="./images/phone-icon.png" />
        //             <p>(212) 555-1234</p>
        //         </div>
        //         <div className="info-group">
        //             <img src="./images/mail-icon.png" />
        //             <p>mr.whiskaz@catnap.meow</p>
        //         </div>
        //     </div>

        //     <div className="contact-card">
        //         <img src="./images/fluffykins.png" />
        //         <h3>Fluffykins</h3>
        //         <div className="info-group">
        //             <img src="./images/phone-icon.png" />
        //             <p>(212) 555-2345</p>
        //         </div>
        //         <div className="info-group">
        //             <img src="./images/mail-icon.png" />
        //             <p>fluff@me.com</p>
        //         </div>
        //     </div>

        //     <div className="contact-card">
        //         <img src="./images/felix.png" />
        //         <h3>Felix</h3>
        //         <div className="info-group">
        //             <img src="./images/phone-icon.png" />
        //             <p>(212) 555-4567</p>
        //         </div>
        //         <div className="info-group">
        //             <img src="./images/mail-icon.png" />
        //             <p>thecat@hotmail.com</p>
        //         </div>
        //     </div>

        //     <div className="contact-card">
        //         <img src="./images/pumpkin.png" />
        //         <h3>Pumpkin</h3>
        //         <div className="info-group">
        //             <img src="./images/phone-icon.png" />
        //             <p>(0800) CAT KING</p>
        //         </div>
        //         <div className="info-group">
        //             <img src="./images/mail-icon.png" />
        //             <p>pumpkin@scrimba.com</p>
        //         </div>
        //     </div>

        // </div>
        <div className='contacts'> 
    <Contact 
    img="images/mr-whiskerson.png"
    cname="Mr.Whiskerson"
    phone="(212) 555-1234"
    email="mr.whiskerson@catnap.meow"
    /> 
    
    <Contact
    img="images/fluffykins.png"
    cname="Fluffykins"
    phone="(212) 555-2345"
    email="fluff@me.com" /> 

    <Contact
    img="images/felix.png"
    cname="Felix"
    phone="(212) 555-4567"
    email="thecat@hotmail.com" /> 

    <Contact
    img="images/pumpkin.png"
    cname="Pumpkin"
    phone="(0800) CAT KING"
    email="pumpkin@scrimba.com"
    />
    </div>
    )
}

export default App