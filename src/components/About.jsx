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
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit nisi et,
        eligendi error sed reprehenderit ad eos ipsum autem aliquid consequatur
        odio qui rerum placeat adipisci perspiciatis. Obcaecati quia ex,
        debitis, nemo mollitia saepe ad placeat enim dignissimos asperiores
        perspiciatis, magnam laborum consequuntur adipisci fugit perferendis
        eius inventore quidem deserunt?
      </motion.p>
    </>
  );
};

export default About;
