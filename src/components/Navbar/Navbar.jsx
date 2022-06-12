import React from 'react'
import "./Navbar.css"
import MenuImg from "../../assets/menu.png"

const SobreGoogleLink = "https://about.google/?fg=1&utm_source=google-ES&utm_medium=referral&utm_campaign=hp-header"
const TiendaGoogleLink = "https://store.google.com/ES?utm_source=hp_header&utm_medium=google_ooo&utm_campaign=GS100042&hl=es-ES&pli=1"
const GmailLink ="https://mail.google.com/mail/&ogbl"
const ImagenesLink = "https://www.google.es/imghp?hl=es&ogbl"


const Navbar = (navBar) => {
  return (
    <div className="header">
      <div className="left-box">
        <a href={SobreGoogleLink}> {navBar.items.navBar1.item1}</a>
        <a href={TiendaGoogleLink}> {navBar.items.navBar1.item2}</a>
      </div>
      <div className="right-box">
        <a href={GmailLink}> {navBar.items.navBar2.item1}</a>
        <a href={ImagenesLink}> {navBar.items.navBar2.item2}</a>
        <img src={MenuImg}/>
        <button className="LoginButton">{navBar.items.navBar2.item3}</button>
      </div>
    </div>
  )
}

export default Navbar