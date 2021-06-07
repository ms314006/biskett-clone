import React, { useEffect } from 'react';
import styled from 'styled-components';
import TopBlock from '../../components/TopBlock';
import Navigation from '../../components/Navigation';
import HowToUse from '../../components/HowToUse';
import Features from '../../components/Features';
import Slideshow from '../../components/Slideshow';
import Fee from '../../components/Fee';
import Footer from '../../components/Footer';
import fadeInObserver from '../../modules/fadeInObserver';

const Body = styled.div`
  font-family: 'Sawarabi Gothic', sans-serif;
`;

const LandingPage = () => {
  useEffect(() => {
    window.addEventListener('scroll', () => {
      fadeInObserver.fadeIn();
    });
  }, []);

  return (
    <Body>
      <TopBlock />
      <Navigation />
      <HowToUse />
      <Features />
      <Slideshow />
      <Fee />
      <Footer />
    </Body>
  );
};

export default LandingPage;
