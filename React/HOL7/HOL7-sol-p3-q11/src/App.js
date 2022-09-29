import React from "react"

export default function App() {
    const [contact, setContact] = React.useState({
        firstName: "John",
        lastName: "Doe",
        phone: "+1 (719) 555-1212",
        email: "itsmyfakename@example.com",
        isFavorite: false
    })
    /**
     * Challenge: Fill in the values in the markup
     * using the properties of our state object above
     * (Ignore `isFavorite` for now)
     */
    // const [toggleStatus,setToggleStatus]=React.useState(contact.isFavorite)

    function toggleFavorite() {
        console.log("Toggle Favorite")
        console.log(contact.isFavorite);
        setContact((prevContact) => {
            return{
                isFavorite: !prevContact.isFavorite
            };
        }
)        }
    
    return (
        <main>
            <article className="card">
                <img src="./images/user.png" className="card--image" />
                <div className="card--info">
                    <img 
                        // src={`../images/star-empty.png`} 
                        src={contact.isFavorite ? `./images/star-empty.png` : `../images/star-filled.png`} 
                        className="card--favorite"
                        onClick={toggleFavorite}
                    />
                    <h2 className="card--name">
                        {contact.firstName} {contact.lastName}
                    </h2>
                    <p className="card--contact">{contact.phone}</p>
                    <p className="card--contact">{contact.email}</p>
                </div>
                
            </article>
        </main>
    )
}
