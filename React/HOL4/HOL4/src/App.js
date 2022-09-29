import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Cards";
import data from "./components/data"

function App() {
    // <Hero />
    const cards = data.map(card => {
        return (
            // console.log(card),
            <Card
                // key={card.id}
                // item={card}
                img={card.coverImg}
                rating={card.stats.rating}
                reviewCount={card.stats.reviewCount}
                country="USA"
                title={card.title}
                price={card.price}
                openspots={card.openSpots}
                location={card.location}
            />
        )
    })
    return (
        <div>
            <Navbar />

            <section className="cards--list">
                {cards}
            </section>
        </div>
    )
}
export default App;




{/* <Card
img="images/katie-zaferes.png"
rating="5.0"
reviewCount={6}
country="USA"
title="Life lessons with Katie Zaferes"
price={136}
/> */}