import React from 'react';
import styled from 'styled-components';
import logo from '../../assets/img/logo.png';

const Body = styled.div`
  color: #ffffff;
  padding: 50px 30px 35px;
  background-color: #1f3f83;

  & > div :first-child {
    margin-bottom: 30px;
  }

  & > div :nth-child(2) {
    height: 24px;

    & > p {
      float: right;
      font-size: 12px;
      color: #8ea6d8;
    }
  }

  @media (max-width: 1200px) {
    & > div :nth-child(2) {
      & > p {
        padding-top: 16px;
        float: right;
        font-size: 12px;
        color: #8ea6d8;
      }
    }
  }

  @media (max-width: 740px) {
    width: 100%;
    box-sizing: border-box;

    & > div :nth-child(2) {
      & > p {
        float: left;
      }
    }
  }
`;

const Menu = styled.ul`
  float: left;
  font-size: 14px;

  & > li {
    position: relative;
    float: left;

    &:not(:last-child)::after {
      content: "";
      height: 26px;
      border-left: 2px #ffffff solid;
      margin: 0px 20px;
    }
  }

  @media (max-width: 740px) {
    & > li {
      font-size: 10px;

      &:not(:last-child)::after {
        margin: 0px 8px;
      }
    }
  }
`;

const Footer = () => (
  <Body>
    <div>
      <img alt="logo" src={logo} />
    </div>
    <div>
      <Menu>
        <li>プライバシーポリシー</li>
        <li>利用規約</li>
        <li>特定商取引法上の表記</li>
        <li>会社概要</li>
        <li>お問い合わせ</li>
      </Menu>
      <p>© XXXX XXXXXX XX.XXX. XXX XXXXXX XXXXXXXX.</p>
    </div>
  </Body>
);

export default Footer;
