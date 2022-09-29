import React from "react";

function Card(props) {
    const { img, rating, reviewCount, country, title, price } = props

    return (
        <div className="card">
            <img src={img} alt="Image not found" className="card--image" />
            <div className="card--stats">
                <img src="images/star.png" alt="" className="card--star" />
                <span>{rating}</span>
                <span className="gray">({reviewCount}).</span>
                <span className="gray">{country}</span>
            </div>
            <p>{title}</p>
            <p><span className="bold">From ${price} </span>/person</p>
        </div>
    )

}
export default Card