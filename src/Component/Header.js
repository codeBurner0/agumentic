import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BsFillMenuButtonFill } from 'react-icons/bs';
import { FaAward } from 'react-icons/fa';
import { AiFillHome } from 'react-icons/ai';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { BsFillMenuButtonWideFill } from 'react-icons/bs';
import Logo from '../assets/images/esalinkLogo.svg'
import '../assets/styles/Header.css'
function Header() {

  const [bool,setBool]=useState(false);
  function clicker(){
    setBool(!bool);
  }
  const navigate=useNavigate()
  return (
    <div className="h-container">
    <div className="nav-bar">
      <div className="title">
        <span className="logo"><Link to="/">
            <img src={Logo} alt="" className="logo1"/>
          </Link>
        </span>
       {(bool)?<BsFillMenuButtonFill className="icon" onClick={()=>clicker()} />:<BsFillMenuButtonWideFill className="icon" onClick={()=>clicker()} />}
      </div>
      <div  className={bool?"show":"list"}>
        <li>
          <Link className={bool?"anchor":"anchor2"} to="/">
           <FaAward/> Facturation électronique 2024
          </Link>
        </li>
        <li>
          <Link className="anchor" to="/">
            Expertise
          </Link>
        </li>
        <li>
          <Link className="anchor" to="/">
            Solutions
          </Link>
        </li>
        <li>
          <Link className="anchor" to="/">
            Services
          </Link>
        </li>
        <li>
          <Link className="anchor" to="/">
            Blog
          </Link>
        </li>
          
      </div>

      
    </div>
    <p className="h-p"><AiFillHome/>Accueil <MdKeyboardArrowRight className="h-arrow"/> Notre expertise <MdKeyboardArrowRight className="h-arrow"/> <span className="h-la">La facturation électronique</span>
</p>
    <div className="h-content">
        <h1 className="header-h1">La facturation électronique</h1>
        <p className="header-p">La dématérialisation fiscale sera obligatoire dès 2024. Prenez de l'avance et optez pour l'E-facture avec EsaLink.</p>
      </div>
      <div className="h-b-buttons">
      <span className="h-button1">Passer à la e-facturation 2024</span>
      <span className="h-button2">Analysons votre projet d’E-facturation</span>
      </div>
   </div>
   
  );
}
export default Header;

