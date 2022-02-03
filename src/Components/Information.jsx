import React from 'react';
import '../Styles/Information.css'
import { useViewportScroll,motion } from 'framer-motion';
export default function Information() {
  const variants = {
    hidden: { x:-1000,opacity:0.5},
    visible: { x:0,opacity:1},
  }
  return <motion.div className='InformationContainer' initial="hidden"
  animate="visible"
  variants={variants} >
      <h2>$89,914</h2>
      <p>of $100,000 backed</p>
      <hr style={{width:'100px',hieght:'1px'}}/>
      <h2>5,007</h2>
      <p>total backers</p>
      <hr style={{width:'100px',hieght:'1px'}}/>
      <h2>56</h2>
      <p>days left</p>
      <div className='percentageContainer'>
        <div className='percentage'></div>
      </div>
  </motion.div>;
}
