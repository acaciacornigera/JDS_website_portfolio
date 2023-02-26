import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import './Skills.scss';

const Skills = () => {
  const [levels, setLevels] = useState([]);
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const levelsQuery = '*[_type == "skillsLevel"]';
    const skillsQuery = '*[_type == "skills"] | order(name asc)';

    client.fetch(levelsQuery).then((data) => {
      // sort the levels array in ascending order based on the `level` property
      const sortedData = data.sort((a, b) => a.level_order - b.level_order);
      setLevels(sortedData);
    });

    client.fetch(skillsQuery).then((data) => {
      setSkills(data);
    });

  }, []);

  return (
    <>
      <p className="head-text">Skills</p>
      <div className="app__skills-container">
        <div>
          {levels.map((level) => (
            <div className="app__skills-level" key={level._id}>
              <p>{level.level}</p>
              
              <motion.div className="app__skill-list">
                {skills.filter((skill) => skill.level && skill.level.some((l) => l._ref === level._id))
                  .map((skill) => (
                    <motion.div className="app__skills-item"
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      key={skill._id}
                    >
                      <div className="app__skills-item" style={{ backgroundColor: skill.bgColor }}>
                        {skill.icon && (
                          <img src={urlFor(skill.icon).url()} alt={skill.name} />
                        )}
                      </div>
                      <p className="p-text" style={{ textTransform: 'lowercase' }}>{skill.name}</p>
                    </motion.div>
                  ))}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AppWrap(MotionWrap(Skills, 'app__skills'), 'skills', 'app__primarybg');
