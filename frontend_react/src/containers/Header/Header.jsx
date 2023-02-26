import React from 'react';
import { motion } from 'framer-motion';

import { AppWrap } from '../../wrapper';
import { images } from '../../constants';
import './Header.scss';

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
};

const Header = () => (
  <div className="app__header app__flex">
    <motion.div
      whileInView={{ x: [-100, 0], opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
      className="app__header-info"
    >
      <div className="app__header-badge">
        <div className="tag-cmp app__flex">
          <span>👋🏻</span>
            <p style={{ textAlign: 'center' }}>Hello, I am <span>JD</span></p>
            <p style={{ fontWeight: 800 }}>Welcome to my website!</p>
        </div>

        <div className="tag-cmp app__flex"
             style={{ marginLeft: 75 }}
        >
          <p><jds style={{ fontWeight: 'bold' }}>Web3</jds> Advocate</p>
          <p>COO - <jds style={{ fontWeight: 'bold' }}>CFO</jds></p>
          <p><jds style={{ fontWeight: 'bold' }}>NED</jds> - Board Member</p>
          <p>Homemade <jds style={{ fontWeight: 'bold' }}>Geek</jds></p>
        </div>
      </div>
    </motion.div>

    <motion.div
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 0.5, delayChildren: 0.5 }}
      className="app__header-img"
    >
      <img src={images.jdsprofile} alt="profile_bg" />
      <motion.img
        whileInView={{ scale: [0, 1] }}
        transition={{ duration: 1, ease: 'easeInOut' }}
        src={images.circle} alt="profile_circle"
        className="overlay_circle"
      />
    </motion.div>

    <motion.div
      variants={scaleVariants}
      whileInView={scaleVariants.whileInView}
      className="app__header-circles"
    >
      {[images.ethlogo, images.ifrslogo, images.bislogo].map((circle, index) => (
        <div className="circle-cmp app__flex" key={`circle-${index}`}>
          <img src={circle} alt="profile_bg" />
        </div>
      ))}
    </motion.div>
  </div>
);

export default AppWrap(Header, 'home');
