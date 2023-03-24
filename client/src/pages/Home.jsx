import React from 'react';
import Annoucement from '../components/Annoucement';
import Categories from '../components/Categories';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';
import Products from '../components/Products';
import Slider from '../components/Slider';
import PageTransition from '../components/style/PageTransition';

const Home = () => {
  return (
    <PageTransition>
      <Annoucement />
      <Navbar />
      <Slider />
      <Categories />
      <Products />
      <Newsletter />
      <Footer />
    </PageTransition>
  );
};

export default Home;
