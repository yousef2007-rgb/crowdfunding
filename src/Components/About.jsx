import React,{useState} from 'react';
import '../Styles/About.css'
import checkIcon from '../images/icon-check.svg';
import { useViewportScroll,motion } from 'framer-motion';

export default function About() {
    const [blurVisablity,setBlurVisablity] = useState("hide");
    const variants = {
        hidden: { x:1000,opacity:0.5},
        visible: { x:0,opacity:1},
      }
  return <motion.div className='AboutContainer' initial="hidden"
  animate="visible"
  variants={variants} >
      <h2>About this project</h2>
      <p>  The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen 
  to a more comfortable viewing height. Placing your monitor at eye level has the potential to improve 
  your posture and make you more comfortable while at work, helping you stay focused on the task at hand.
    </p>
    <p>  Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer 
  to allow notepads, pens, and USB sticks to be stored under the stand.</p>
  <div className='rewardCard'>
      <h3>Bamboo Stand</h3>
      <span>Pledge $25 or more</span>
      <p>  You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and 
  you’ll be added to a special Backer member list.</p>
      <div><h2>101</h2> <p>left</p></div>
      <a href="#AboutContainer" onClick={()=>setBlurVisablity("show")}>Select Reward</a>
  </div>
  <div className='rewardCard'>
      <h3>Black Edition Stand</h3>
      <span>Pledge $75 or more</span>
      <p>  You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer 
  member list. Shipping is included.</p>
      <div><h2>64</h2> <p>left</p></div>
      <a href="#AboutContainer" onClick={()=>setBlurVisablity("show")}>Select Reward</a>
  </div>
  <div id='outOfStockCard' className='rewardCard'>
      <h3>Black Edition Stand</h3>
      <span>Pledge $200 or more</span>
      <p>  You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added 
  to our Backer member list. Shipping is included.</p>
      <div><h2>0</h2> <p>left</p></div>
      <a>Out of Stock</a>
  </div>
  <div id={blurVisablity} className="blur">
  <div className='thankCard'>
    <img src={checkIcon} alt="check icon" />
    <h2>Thanks for your support!</h2>
    <p>  Your pledge brings us one step closer to sharing Mastercraft Bamboo Monitor Riser worldwide. You will get
  an email once our campaign is completed.</p>
  <a href="#AboutContainer" onClick={()=>setBlurVisablity("hide")}>Got it!</a>
  </div>
  </div>
  </motion.div>;
}
