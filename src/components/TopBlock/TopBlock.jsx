import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import Header from './Header';
import superQ1 from '../../assets/img/superQ1.png';

const Body = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  background: #f0f7ff;
  overflow: hidden;
`;

const contentFadeIn = keyframes`
  0% {
    opacity: 0;
    left: calc(100vw / 2 - 440px);
  }
  
  100% {
    opacity: 1;
    left: calc(100vw / 2 - 540px);
  }

`;

const ContentWrap = styled.div`
  max-width: 1580px;
  height: 100vh;
  margin: 0px auto;
  padding: 0px 30px;
  position: absolute;
  top: calc(100vh / 4);
  left: calc(100vw / 2 - 540px);
  animation: ${contentFadeIn} 1s linear;

  @media (max-width: 1200px) {
    width: 610px;
    left: calc(100vw / 2 - 340px);
    animation: null;
  }

  @media (max-width: 740px) {
    width: calc(100vw - 60px);
    top: 100px;
    left: 0px;
  }
`;

const imageFadeIn = keyframes`
  0% {
    opacity: 0;
    top: -80px;
    left: 640px;
  }
  
  100% {
    opacity: 1;
    top: -100px;
    left: 740px;
  }

`;

const Introduction = styled.div`
  color: #1f3f83;
  & > h1 {
    font-size: 60px;
    font-weight: bold;
    letter-spacing: .12em;
    line-height: 1.4;
  }

  &::after {
    content: "";
    position: absolute;
    left: 740px;
    top: -100px;
    width: 440px;
    height: 700px;
    background: url(${(props) => props.superQ1});
    background-position: 50% 50%;
    background-repeat: no-repeat;
    background-size: cover;
    animation: ${imageFadeIn} 1s linear;
  }

  @media (max-width: 1200px) {
    &::after {
      left: 340px;
      animation: null;
    }
  }

  @media (max-width: 740px) {
    width: calc(100vw - 60px);
    & > h1 {
      font-size: 32px;
    }

    &::after {
      width: 330px;
      height: 500px;
      top: 260px;
      left: calc(100vw / 2 - 126px);
    }
  }
`;

const IntroductionPassage = styled.div`
  width: 320px;
  font-size: 18px;
  word-wrap: break-word;
  margin: 30px 0px 50px 0px;

  @media (max-width: 740px) {
    font-size: 12px;
    width: 100%;
  }
`;

const UseButton = styled.button`
  color: #ffffff;
  background: #4184f3;
  border: 2px #4184f3 solid;
  text-decoration: none;
  padding: 10px 30px;
  font-size: 24px;
  transition: background 0.5s;

  & :visited {
    color: #ffffff;
  }

  & :hover {
    color: #4184f3;
    background: #ffffff;
    transition: background 0.5s;
  }

  @media (max-width: 740px) {
    width: 100%;
    font-size: 16px;
  }
`;

const shake = keyframes`
  0% {
    bottom: 32px;
  }
  
  30% {
    bottom: 40px;
  }
  
  45% {
    bottom: 28px;
  }

  60% {
    bottom: 32px;
  }
`;

const SeeMore = styled.div`
  color: #1f3f83;
  font-size: 60px;
  width: 100vw;
  text-align: center;
  position: absolute;
  bottom: 32px;
  animation: ${shake} 1.5s linear infinite;
  
`;

const TopBlock = () => (
  <Body>
    <Header />
    <ContentWrap>
      <Introduction superQ1={superQ1}>
        <h1>OOOOOO</h1>
        <h1>XXXXX</h1>
        <IntroductionPassage>
          XXXXXX，XXXXXXXXXXXX，XXXXXXXXX，XXX
          XXXXXX，XXXXXXXXXXXX，XXXXXXXXX，XXXXXXX
          XXXXXX，XXXXXXXXXXXX，XXXXXXXXX，XXXXXXXXX
        </IntroductionPassage>
        <UseButton
          onClick={() => { window.open('https://github.com/ms314006/biskett-clone'); }}
        >
          GitHub Repositories!
        </UseButton>
      </Introduction>
    </ContentWrap>
    <SeeMore>
      <FontAwesomeIcon icon={faAngleDown} />
    </SeeMore>
  </Body>
);

export default TopBlock;
