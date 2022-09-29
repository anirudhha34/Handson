import React from "react";
import memesData from "./data/memesData";


export default function Meme() {

    const[memeImage,setMemeImage]=React.useState("images/troll-face.png")
    function getMemeImage() {
        const memesArray = memesData.data.memes;
        const randomNumber = Math.floor(Math.random() * memesArray.length);
        const url = memesArray[randomNumber].url;
        setMemeImage(url)
        
    }
    console.log(memeImage);
    return (
        <main>
            <div className="form">
                <input type="text" className="form--input" placeholder="Top input"></input>
                <input type="text" className="form--input" placeholder="Bottom input" />
                <button type ="button" className="form-button" onClick={getMemeImage}>Get a new meme image</button>
            </div>
            <img src={memeImage} alt="random meme image" className="footer--image"/>
        </main>
    )
}