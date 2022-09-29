import React from "react";

function Card(props) {
    const { img, rating, reviewCount, country, title, price, openspots, location } = props
    let badgeText
    if (props.openspots === 0) {
        badgeText = "SOLD OUT"
    } 
    else if (props.location === 'Online') {
        badgeText = 'ONLINE'
    }
    return (
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
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





// {openspots === 0 &&
//     <div className="card--badge">SOLD OUT</div>}
//      {country === 'Online' &&
//     <div className="card--badge">ONLINE</div>}