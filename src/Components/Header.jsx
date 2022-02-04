import React,{useState} from 'react';
import Logo from '../images/logo.svg';
import menuIcon from '../images/icon-hamburger.svg';
import closeIcon from '../images/icon-close-menu.svg';
import { motion } from 'framer-motion';
import '../Styles/Header.css'
export default function Header() {
  const [menuBtn,setMenuBtn] = useState(menuIcon);
  const [menuVisablity,setMenuVisablity] = useState("hide");
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
        setMenuVisablity("show");
        }else{
        setMenuBtn(menuIcon);
        setMenuVisablity("hide");
        }
      }} className='menuBtn'>
        <img src={menuBtn} alt='menu icon' />
      </div>
      <div id={menuVisablity} className='blur'>
      <div className='HeaderContainer' style={{padding:'20px'}}>
      <div className='logoContainer'>
        <img src={Logo} alt='site logo' />
      </div>
      <div onClick={()=>{
        if(menuBtn == menuIcon){
        setMenuBtn(closeIcon);
        setMenuVisablity("show");
        }else{
        setMenuBtn(menuIcon);
        setMenuVisablity("hide");
        }
      }} className='menuBtn'>
        <img src={menuBtn} alt='menu icon' />
      </div>
      </div>
  <div className='menu'>
        <a href="#">About</a>
        <a href="#">Discover</a>
        <a href="#">Get Started</a>
  </div>
  </div>
  </div>;
}
