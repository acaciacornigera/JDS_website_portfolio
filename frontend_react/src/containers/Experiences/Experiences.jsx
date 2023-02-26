import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaFilePdf } from 'react-icons/fa';

import { AppWrap, MotionWrap } from '../../wrapper';
import { client } from '../../client';
import './Experiences.scss';

const Experiences = () => {
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    const query = '*[_type == "experiences"] | order(order asc)';

    client.fetch(query).then((data) => {
      setExperiences(data);
    });

  }, []);

  return (
    <>
      <p className="head-text">Experiences</p>
      <div className="app__skills-pdf">
        <a href="https://raw.githubusercontent.com/acaciacornigera/CV/main/SIDLER_JD_OnePager_v202302.pdf">
          <FaFilePdf size={70} color="red"/>
          <p>OnePager</p>
        </a>
        <div style={{ marginRight: '50px' }}></div>
        <a href="https://raw.githubusercontent.com/acaciacornigera/CV/main/SIDLER_JD_CV_v202302.pdf">
          <FaFilePdf size={70} color="blue" />
          <p>CV</p>
        </a>
          
      </div>
      
      <div className="app__skills-container">
        <div>
          {experiences.map((experience) => (
            <motion.div
              className="app__skills-exp-item"
              key={experience.year}
            >
              <div className="bold-text">
                <p>{experience.year}</p>
              </div>
  
              <div className="app__skills-exp-cpy">
                <a href={experience.weblink} target="blank">{experience.company}</a>
                <p style={{ marginTop: 2 }}>{experience.punchline}</p>
                <p style={{ color: 'grey' }}>{experience.position}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
  
};

export default AppWrap(
  MotionWrap(Experiences, 'app__skills'),
  'experiences',
  'app__whitebg',
);
