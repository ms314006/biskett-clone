import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Body = styled.div`
  border-bottom: 2px solid #1f3f83;
  background: #ffffff;
  width: 100%;
  position: ${({ fixed }) => fixed ? 'sticky' : 'static'};
  top: ${({ fixed }) => fixed ? '0px' : 'auto'};
  z-index: 2;
`;

const Wrap = styled.div`
  height: 41px;
  width: 1040px;
  position: relative;
  padding 20px 0px;
  margin: 0px auto;
  display: flex;
  align-items: center;

  @media (max-width: 1200px) {
    width: 640px;
  }

  @media (max-width: 740px) {
    width: 420px;
  }
`;

const Menu = styled.ul`
  color: #1f3f83;

  & > li {
    font-size: 24px;
    float: left;
    margin-right: 64px;
  }

  @media (max-width: 1200px) {
    & > li {
      font-size: 24px;
      margin-right: 32px;
    }
  }

  @media (max-width: 740px) {
    & > li {
      font-size: 14px;
      margin-right: 16px;
    }
  }
`;

const UseButton = styled.a`
  color: #ffffff;
  background: #4184f3;
  border: 2px #4184f3 solid;
  text-decoration: none;
  position: absolute;
  right: 0px;
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
  const [fixed, setFixed] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setFixed(595 < window.pageYOffset);
    });
  }, []);

  return (
    <Body fixed={fixed}>
      <Wrap>
        <Menu>
          <li>OOOO1</li>
          <li>OOOO2</li>
          <li>OOOO3</li>
          <li>OOOO4</li>
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
