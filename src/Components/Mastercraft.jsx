import React from 'react';
import '../Styles/Mastercraft.css';
import mastercraftLogo from '../images/logo-mastercraft.svg';
import bookmarkIcon from '../images/icon-bookmark.svg'
import { useViewportScroll,motion } from 'framer-motion';
export default function Mastercraft() {
  const { scrollYProgress } = useViewportScroll()
  const variants = {
    hidden: { y:1000,opacity:0.5},
    visible: { y:0,opacity:1},
  }
  return <motion.div className='MastercraftContainer'     initial="hidden"
    animate="visible"
    variants={variants} > 
    <img className='mastercraftLogo' src={mastercraftLogo} alt="mastercraft logo" />
    <h2>Mastercraft Bamboo Monitor Riser </h2>
    <p>A beautiful & handcrafted monitor stand to reduce neck and eye strain.
    </p>
    <div className='donateSection'>
    <a className='donateBtn' href="#">Back this project</a>
    <div className='bookmarkBtn'>
      <img src={bookmarkIcon} alt="bookmark icon" />
    </div>
    </div>
  </motion.div>;
}
