import React from 'react';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>
      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, autem
        est placeat dolor fuga rerum debitis modi voluptate quis totam sapiente
        alias quasi asperiores soluta dignissimos officiis maiores non
        distinctio? Officiis, nobis architecto! Recusandae deleniti enim commodi
        magni modi? Facere!
      </motion.p>
    </>
  );
};

export default About;
