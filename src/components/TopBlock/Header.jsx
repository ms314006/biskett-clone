import React from 'react';
import styled from 'styled-components';
import logoBlue from '../../assets/img/logo-blue.png';

const Body = styled.div`
  color: #1f3f83;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 50px 50px 25px 50px;
  box-sizing: border-box;

  @media (max-width: 740px) {
    padding: 20px;
  }
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

const Header = () => (
  <Body>
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
  </Body>
);

export default Header;
