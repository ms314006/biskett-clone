import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import logoBlueBig from '../../assets/img/logo-blue-big.png';
import fadeInObserver from '../../modules/fadeInObserver';

const Body = styled.div`
  max-width: 1040px;
  margin: -81px auto 0px auto;
  color: #1f3f83;
  padding: 161px 0px 100px 0px;
`;

const Title = styled.div`
  font-size: 56px;

  & > span {
    position: relative;

    &::after {
      content: "";
      position: absolute;
      right: 0;
      bottom: 0px;
      left: 0;
      border-bottom: 3px solid #7df1fd;
    }
  }
`;

const Step = styled.div`
  display: flex;
  align-items: center;
  margin-top: 120px;
  position: relative;
  transition: opacity 1s, top 1s;

  & > img {
    height: 227px;
    flex: 1 1 50%;
    max-width: 50%;
  }
`;

const StepIntroduction = styled.div`
  position: relative;
  padding-left: 130px;
  height: 190px;
  max-width: 50%;

  & > p:nth-child(1) {
    font-size: 77px;
    position: absolute;
    top: 0;
    left: 0;
  }

  & > h3 {
    font-size: 36px;
  }

  & > div {
    margin-top: 25px;
    padding-right: 35px;
    line-height: 1.6;
  }

  &::before {
    content: "";
    position: absolute;
    top: 6px;
    bottom: 4px;
    left: 100px;
    border-left: 4px solid #7df1fd;
  }
`;

const HowToUse = () => {
  const step1Ref = useRef(null);
  const step2Ref = useRef(null);
  const step3Ref = useRef(null);
  useEffect(() => {
    fadeInObserver.registerObservers([
      step1Ref.current,
      step2Ref.current,
      step3Ref.current,
    ]);
  }, []);
  return (
    <Body>
      <Title>
        OOO
        <span>XXX</span>
        OOOOOOO
      </Title>
      <Step ref={step1Ref} data-triggerpoint={500}>
        <img alt="step1Img" src={logoBlueBig} />
        <StepIntroduction>
          <p>1</p>
          <h3>XXXXXXXXX</h3>
          <div>
            OOOOOOOO，OOOOOOO，OOOOOOOOOO，OOOOO，OOO，
            OOOOOOOOOOOOOOO，OOOOOOO，OOOOOOOOOO，OOOOO，OOO，OOOOOOOOOOOOOOO，OOOOOOO
          </div>
        </StepIntroduction>
      </Step>
      <Step ref={step2Ref} data-triggerpoint={850}>
        <StepIntroduction>
          <p>2</p>
          <h3>XXXXXXXXX</h3>
          <div>
            OOOOOOOO，OOOOOOO，OOOOOOOOOO，OOOOO，OOO，
            OOOOOOOOOOOOOOO，OOOOOOO，OOOOOOOOOO，OOOOO，OOO，OOOOOOOOOOOOOOO，OOOOOOO
          </div>
        </StepIntroduction>
        <img alt="step2Img" src={logoBlueBig} />
      </Step>
      <Step ref={step3Ref} data-triggerpoint={1200}>
        <img alt="step3Img" src={logoBlueBig} />
        <StepIntroduction>
          <p>3</p>
          <h3>XXXXXXXXX</h3>
          <div>
            OOOOOOOO，OOOOOOO，OOOOOOOOOO，OOOOO，OOO，O
            OOOOOOOOOOOOOO，OOOOOOO，OOOOOOOOOO，OOOOO，OOO，OOOOOOOOOOOOOOO，OOOOOOO
          </div>
        </StepIntroduction>
      </Step>
    </Body>
  );
};

export default HowToUse;
