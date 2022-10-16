import React from 'react';
import { motion } from 'framer-motion';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import tribos from '../data/tribos.json';
import Carousel from '../components/Carousel';

export default class Trybes extends React.Component {

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <motion.section
        className="bg-wolf-01 bg-cover bg-center"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        exit={{
          y: -20,
          opacity: 0,
          transition: { duration: 0.5 }
        }}
      >
        <div className="features-div">
          <div className="nav-features">
            <Nav />
          </div>
          <h1 className="text-4xl text-white bg-gradient-to-r from-f-transp to-transparent p-5 ml-3 mt-2 sm:mt-3">Tribos</h1>
          <Carousel
            list={tribos}
            repository="trybes"
            navigation={true}
            loop={true}
          />
        </div>
        <div className="footer-features">
          <Footer />
        </div>
      </motion.section>
    );
  }
}