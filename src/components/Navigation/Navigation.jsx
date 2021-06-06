import React from 'react';
import styled from 'styled-components';

const Body = styled.nav`
  border-bottom: 2px solid #1f3f83;
`;

const Wrap = styled.div`
  height: 41px;
  width: 1040px;
  position: relative;
  padding 20px 0px;
  margin: 0px auto;
  display: flex;
  align-items: center;
`;

const Menu = styled.ul`
  color: #1f3f83;

  & > li {
    font-size: 24px;
    float: left;
    margin-right: 64px;
  }
`;

const UseButton = styled.a`
  color: #ffffff;
  background: #4184f3;
  border: 2px #4184f3 solid;
  text-decoration: none;
  position: absolute;
  right: 30px;
  padding: 14px 40px;
  font-size: 20px;
  transition: background 0.5s;

  & :visited {
    color: #ffffff;
  }

  & :hover {
    color: #4184f3;
    background: #ffffff;
    transition: background 0.5s;
  }
`;

const Navigation = () => {
  return (
    <Body>
      <Wrap>
        <Menu>
          <li>OOOOOOO1</li>
          <li>OOOOOOO2</li>
          <li>OOOOOOO3</li>
        </Menu>
        <UseButton
          target="_blank"
          href="https://github.com/ms314006"
        >
          GitHub
        </UseButton>
      </Wrap>
    </Body>
  );
};

export default Navigation;
