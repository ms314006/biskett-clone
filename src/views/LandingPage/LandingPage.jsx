import React from 'react';
import styled from 'styled-components';
import TopBlock from '../../components/TopBlock';
import Navigation from '../../components/Navigation';

const Body = styled.div`
  font-family: 'Sawarabi Gothic', sans-serif;
`;

const LandingPage = () => (
  <Body>
    <TopBlock />
    <Navigation />
  </Body>
);

export default LandingPage;
