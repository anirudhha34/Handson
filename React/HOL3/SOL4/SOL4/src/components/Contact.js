import React from "react";

function Contact(props) {
    let{img,cname,phone,email}=props;
    return (
        <div className="contact-card">
            <img src={img} alt="" />
            <h3>{cname}</h3>
            <div className="info-group">
                <img src="./images/phone-icon.png" alt="" />
                <p>{phone}</p>
            </div>
            <div className="info-group">
                <img src="./images/mail-icon.png" alt="" />
                <p>{email}</p>
            </div>
        </div>
    )
}
export default Contact