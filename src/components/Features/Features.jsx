import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import superQ1 from '../../assets/img/superQ1.png';
import fadeInObserver from '../../modules/fadeInObserver';

const Body = styled.div`
  color: #1f3f83;
  background: #edf4ff;
  padding: 161px 0px 100px 0px;
`;

const Warp = styled.div`
  max-width: 1040px;
  margin: -81px auto 0px auto;
  padding: 0px 30px;
  position: relative;
  transition: opacity 1s, top 1s;

  @media (max-width: 1200px) {
    width: 640px;
  }

  @media (max-width: 740px) {
    width: 420px;
  }
`;

const Title = styled.div`
  font-size: 56px;
`;

const Features = styled.div`
  display: flex;
  flex-flow: wrap;
  align-items: center;
  margin-left: -6.731%;
`;

const Feature = styled.div`
  max-width: 290px;
  margin-top: 70px;
  margin-left: 6.731%;

  & > h3 {
    display: flex;
    font-size: 26px;

    & > div {
      width: 54px;
      height: 54px;
      background: url(${(props) => props.superQ1});
      background-position: 50% 50%;
      background-repeat: no-repeat;
      background-size: cover;
    }
  }

  & > p {
    margin-top: 20px;
    font-size: 12px;
    line-height: 2.167;
  }

  @media (max-width: 740px) {
    max-width: 100%;
  }
`;

const HowToUse = () => {
  const sectionRef = useRef(null);
  useEffect(() => {
    fadeInObserver.registerObservers([
      sectionRef.current,
    ]);
  }, []);
  return (
    <Body>
      <Warp ref={sectionRef} data-triggerpoint={1800}>
        <Title>
          OOOOOOOOOO
        </Title>
        <Features>
          <Feature superQ1={superQ1}>
            <h3>
              <div />
              XXXXXXX，XXX，XXXXXX
            </h3>
            <p>
              OOOOOOOOOOOOOOO，OOOOOOOOO，OOOOOOOOOOOOOOOO，OOOOOOOOO，OOOOOOOOO。OOOOO「OOO」OOOOOOOOO，OOOOOOOOOOO，OOOOOOOOOOOOO。
            </p>
          </Feature>
          <Feature superQ1={superQ1}>
            <h3>
              <div />
              XXXXXXX，XXX，XXXXXX
            </h3>
            <p>
              OOOOOOOOOOOOOOO，OOOOOOOOO，OOOOOOOOOOOOOOOO，OOOOOOOOO，OOOOOOOOO。OOOOO「OOO」OOOOOOOOO，OOOOOOOOOOO，OOOOOOOOOOOOO。
            </p>
          </Feature>
          <Feature superQ1={superQ1}>
            <h3>
              <div />
              XXXXXXX，XXX，XXXXXX
            </h3>
            <p>
              OOOOOOOOOOOOOOO，OOOOOOOOO，OOOOOOOOOOOOOOOO，OOOOOOOOO，OOOOOOOOO。OOOOO「OOO」OOOOOOOOO，OOOOOOOOOOO，OOOOOOOOOOOOO。
            </p>
          </Feature>
          <Feature superQ1={superQ1}>
            <h3>
              <div />
              XXXXXXX，XXX，XXXXXX
            </h3>
            <p>
              OOOOOOOOOOOOOOO，OOOOOOOOO，OOOOOOOOOOOOOOOO，OOOOOOOOO，OOOOOOOOO。OOOOO「OOO」OOOOOOOOO，OOOOOOOOOOO，OOOOOOOOOOOOO。
            </p>
          </Feature>
          <Feature superQ1={superQ1}>
            <h3>
              <div />
              XXXXXXX，XXX，XXXXXX
            </h3>
            <p>
              OOOOOOOOOOOOOOO，OOOOOOOOO，OOOOOOOOOOOOOOOO，OOOOOOOOO，OOOOOOOOO。OOOOO「OOO」OOOOOOOOO，OOOOOOOOOOO，OOOOOOOOOOOOO。
            </p>
          </Feature>
        </Features>
      </Warp>
    </Body>
  );
};

export default HowToUse;
