import React, { Component } from "react";
import { ReactDOM } from "react";

export default function Headers () {
    return(
        <div className="header">
            <img src="images/troll-face.png" alt="" className="header--image"/>
            <h2 className="header--title">Meme Generator</h2>
            <h4 className="header--project">React Course - Project 3</h4>
        </div>

    )
}