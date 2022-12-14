import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Cards";

function App() {
    return (
        <div>
            <Navbar />
            <Hero />
            <Card
                img="images/katie-zaferes.png"
                rating="5.0"
                reviewCount={6}
                country="USA"
                title="Life lessons with Katie Zaferes"
                price={136}
            />
        </div>
    )
}
export default App;