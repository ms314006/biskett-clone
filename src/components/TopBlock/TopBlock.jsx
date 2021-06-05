import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import logoBlue from '../../assets/img/logo-blue.png';
import superQ1 from '../../assets/img/superQ1.png';

const Body = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  background: #f0f7ff;
  overflow: hidden;
`;

const Header = styled.div`
  color: #1f3f83;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 50px 50px 25px 50px;
  box-sizing: border-box;
`;

const LogoWrapper = styled.div`
  & > img {
    width: 132px;
  }
`;

const Menu = styled.ul`
  font-size: 24px;

  & > li:nth-child(2) {
    &::before {
      content: "|";
      margin: 0px 12px;
    }
  }
`

const MenuItem = styled.li`
  float: left;

  & > a {
    text-decoration: none;

    & :visited {
      color: #1f3f83;
    }
  }
`;

const ContentWrap = styled.div`
  max-width: 1580px;
  height: 100vh;
  margin: 0px auto;
  padding: 0px 30px;
  position: absolute;
  top: calc(100vh / 4);
  left: calc(100vw / 2 - 600px);
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
    left: 800px;
    top: -100px;
    width: 440px;
    height: 700px;
    background: url(${(props) => props.superQ1});
    background-position: 50% 50%;
    background-repeat: no-repeat;
    background-size: cover;
  }
`;

const IntroductionPassage = styled.div`
  width: 320px;
  font-size: 18px;
  word-wrap: break-word;
  margin: 30px 0px 50px 0px;
`;

const UseButton = styled.a`
  color: #ffffff;
  background: #4184f3;
  text-decoration: none;
  padding: 10px 30px;
  font-size: 24px;

  & :visited {
    color: #ffffff;
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
    <Header>
      <LogoWrapper>
        <img src={logoBlue} />
      </LogoWrapper>
      <Menu>
        <MenuItem>
          <a href="https://github.com/ms314006/biskett-clone">
            OOOO
          </a>
        </MenuItem>
        <MenuItem>
          <a href="https://github.com/ms314006/biskett-clone">
            XXXX
          </a>
        </MenuItem>
      </Menu>
    </Header>
    <ContentWrap>
      <Introduction superQ1={superQ1}>
        <h1>OOOOOO</h1>
        <h1>XXXXX</h1>
        <IntroductionPassage>
          XXXXXX，XXXXXXXXXXXX，XXXXXXXXX，XXX
          XXXXXX，XXXXXXXXXXXX，XXXXXXXXX，XXX
          XXXXXX，XXXXXXXXXXXX，XXXXXXXXX，XXX
        </IntroductionPassage>
        <UseButton
          target="_blank"
          href="https://github.com/ms314006/kai-group-clone"
        >
          GitHub Repositories!
        </UseButton>
      </Introduction>
    </ContentWrap>
    <SeeMore>
      <FontAwesomeIcon icon={faAngleDown}/>
    </SeeMore>
  </Body>
);

export default TopBlock;