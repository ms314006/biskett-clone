import React from 'react';
import styled from 'styled-components';
import TopBlock from '../../components/TopBlock';
import Navigation from '../../components/Navigation';
import HowToUse from '../../components/HowToUse';
import Features from '../../components/Features';
import Slideshow from '../../components/Slideshow';
import Fee from '../../components/Fee';

const Body = styled.div`
  font-family: 'Sawarabi Gothic', sans-serif;
`;

const LandingPage = () => (
  <Body>
    <TopBlock />
    <Navigation />
    <HowToUse />
    <Features />
    <Slideshow />
    <Fee />
  </Body>
);

export default LandingPage;
