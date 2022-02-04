import React from 'react';
import '../Styles/Mastercraft.css';
import mastercraftLogo from '../images/logo-mastercraft.svg';
import bookmarkIcon from '../images/icon-bookmark.svg'
import { useViewportScroll,motion } from 'framer-motion';
import closeIcon from '../images/icon-close-modal.svg'
import { useState } from 'react/cjs/react.development';
export default function Mastercraft() {
  const { scrollYProgress } = useViewportScroll()
  const variants = {
    hidden: { y:1000,opacity:0.5},
    visible: { y:0,opacity:1},
  }
  const [bambooCard,setBambooCard] = useState("");
  const [noRewardCard,setNoRewardCard] = useState("");
  const [standCard,setStandCard] = useState("");
  const [modelVisablity,setModelVisablity] = useState("hide");
  return <motion.div className='MastercraftContainer'     initial="hidden"
    animate="visible"
    variants={variants} > 
    <img className='mastercraftLogo' src={mastercraftLogo} alt="mastercraft logo" />
    <h2>Mastercraft Bamboo Monitor Riser </h2>
    <p>A beautiful & handcrafted monitor stand to reduce neck and eye strain.
    </p>
    <div className='donateSection'>
    <a className='donateBtn' href="#" onClick={()=>setModelVisablity("show")}>Back this project</a>
    <div className='bookmarkBtn'>
      <img src={bookmarkIcon} alt="bookmark icon" />
    </div>
    </div>
    <div id={modelVisablity} className='blur'>
  <div className='mastercraftMenu'>
    <div className='cardTop'>
      <h2>Back this project</h2>
      <img src={closeIcon} alt="close icon" />
    </div>
    <p>Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?</p>
    <div id={noRewardCard} className='mastercraftRewardCard'>
      <div className='cardHeader'>
      <div className='radioButton' onClick={()=>{
        if(noRewardCard == ""){
        setBambooCard("");
        setNoRewardCard("choosen");
        setStandCard("");
        }else{
          setBambooCard("");
          setNoRewardCard("");
          setStandCard("");
        }
        }}></div>
      <div className='cardTitle'>
      <h3>Pledge with no reward</h3>
      </div>
      </div>
      <p>   Choose to support us without a reward if you simply believe in our project. As a backer, 
  you will be signed up to receive product updates via email.</p> 
      <div className='pledge'>
        <p>Enter your pledge</p>
        <div className='continueBtn'>
        <div className='pledgeInput'>
          <p>$</p>
        <input type="number" />
        </div>
        <a href="#"  onClick={()=>setModelVisablity("hide")}>continue</a>
        </div>
      </div>
  </div>
    <div id={bambooCard} className='mastercraftRewardCard'>
      <div className='cardHeader'>
      <div className='radioButton' onClick={()=>{
        if(bambooCard == ""){
        setBambooCard("choosen");
        setNoRewardCard("");
        setStandCard("");
        }else{
          setBambooCard("");
          setNoRewardCard("");
          setStandCard("");
        }
        }}></div>
      <div className='cardTitle'>
      <h3>Bamboo Stand</h3>
      <span>Pledge $25 or more</span>
      </div>
      </div>
      <p>  You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and 
  you’ll be added to a special Backer member list.</p>
      <div><h2>101</h2> <p>left</p></div> 
      <div className='pledge'>
        <p>Enter your pledge</p>
        <div className='continueBtn'>
        <div className='pledgeInput'>
          <p>$</p>
        <input type="number" value="25" />
        </div>
        <a href="#"  onClick={()=>setModelVisablity("hide")}>continue</a>
        </div>
      </div>
  </div>
  <div id={standCard} className='mastercraftRewardCard'>
  <div className='cardHeader'>
      <div className='radioButton' onClick={()=>{
        if(standCard == ""){
        setBambooCard("");
        setNoRewardCard("");
        setStandCard("choosen");
        }else{
        setBambooCard("");
        setNoRewardCard("");
        setStandCard("");
        }
        }}></div>
      <div className='cardTitle'>
      <h3>Black Edition Stand</h3>
      <span>Pledge $75 or more</span>
      </div>
      </div>
      <p>  You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer 
  member list. Shipping is included.</p>
      <div><h2>64</h2> <p>left</p></div>
      <div className='pledge'>
        <p>Enter your pledge</p>
        <div className='continueBtn'>
        <div className='pledgeInput'>
          <p>$</p>
        <input type="number" value="75" />
        </div>
        <a href="#"  onClick={()=>setModelVisablity("hide")}>continue</a>
        </div>
      </div>
  </div>
  <div id='outOfStockCard' className='mastercraftRewardCard'>
      <h3>Black Edition Stand</h3>
      <span>Pledge $200 or more</span>
      <p>  You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added 
  to our Backer member list. Shipping is included.</p>
      <div><h2>0</h2> <p>left</p></div>
  </div>
  </div>
  </div>
  </motion.div>;
}
