import React from 'react'
import { MdEmail } from 'react-icons/md';
import { BsTelephoneFill } from 'react-icons/bs';
import { FaLinkedin ,FaWhatsapp} from 'react-icons/fa';
import { FaInstagram, FaFacebook } from 'react-icons/fa';
import "./social.css"
export default function Social() {
    function sendEmail() {
        console.log('clicked');
        window.location.assign("mailto:shhadyse@gmail.com");
      }
  return (
    <div className="social-icons">
    {/* Removed the surrounding divs */}
    <BsTelephoneFill className="iconPhone" onClick={() => window.open("tel:0543113297", "_blank")} />
    <MdEmail className="iconEmail" onClick={sendEmail} />
    <a href="https://api.whatsapp.com/send?phone=972543113297" target="_blank" rel="noreferrer">
      {/* Replace 'YourPhoneNumberHere' with the actual phone number in international format (e.g., +1234567890) */}
       <FaWhatsapp className="iconInstagram" />
    </a>
    <a href="https://www.instagram.com/shhadyse/" target="_blank" rel="noreferrer">
      <FaInstagram className="iconInstagram" />
    </a>
    <a href="https://www.facebook.com/shhady.serhan/" target="_blank" rel="noreferrer">
      <FaFacebook className="iconFacebook" />
    </a>
    <a href="https://www.linkedin.com/in/shhady-serhan-a11403124" target="_blank" rel="noreferrer">
      <FaLinkedin className="iconFacebook" />
    </a>
  </div>
  )
}
