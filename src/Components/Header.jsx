import React,{useState} from 'react';
import Logo from '../images/logo.svg';
import menuIcon from '../images/icon-hamburger.svg';
import closeIcon from '../images/icon-close-menu.svg';
import { motion } from 'framer-motion';
import '../Styles/Header.css'
export default function Header() {
  const [menuBtn,setMenuBtn] = useState(menuIcon);
  return <div className='HeaderContainer'>
      <div className='logoContainer'>
        <img src={Logo} alt='site logo' />
      </div>
      <div className='navigtation'>
        <a href="#">About</a>
        <a href="#">Discover</a>
        <a href="#">Get Started</a>
      </div>
      <div onClick={()=>{
        if(menuBtn == menuIcon){
        setMenuBtn(closeIcon);
        }else{
        setMenuBtn(menuIcon);
        }
      }} className='menuBtn'>
        <img src={menuBtn} alt='menu icon' />
      </div>

  </div>;
}
