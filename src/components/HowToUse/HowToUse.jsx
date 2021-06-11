import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import logoBlueBig from '../../assets/img/logo-blue-big.png';
import fadeInObserver from '../../modules/fadeInObserver';

const Body = styled.div`
  max-width: 1040px;
  margin: -81px auto 0px auto;
  color: #1f3f83;
  padding: 161px 0px 100px 0px;

  @media (max-width: 1200px) {
    width: 640px;
  }

  @media (max-width: 740px) {
    width: 420px;
  }
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

  @media (max-width: 740px) {
    & > span {
      position: relative;
  
      &::after {
        bottom: 10px;
      }
    }
  }
`;

const Steps = styled.div`
  & > div:nth-child(2) {
    flex-direction: row-reverse;
  }
  @media (max-width: 1200px) {
    & > div {
      flex-direction: column-reverse;
    }
    & > div:nth-child(2) {
      flex-direction: column-reverse;
    }
  }
`;

const Step = styled.div`
  display: flex;
  align-items: center;
  margin-top: 120px;
  position: relative;
  transition: opacity 1s, top 1s;

  @media (max-width: 1200px) {
    margin-top: 40px;
    margin-bottom: -40px;

    & > img {
      margin: 10px;
      max-width: 500px;
    }
  }
`;

const StepImg = styled.div`
  width: 500px;
  height: 200px;

  & > img {
    max-height: 100%;
    max-width: 100%;
    width: auto;
    height: auto;
    margin: 0px auto;
  }
`;

const StepIntroduction = styled.div`
  position: relative;
  padding-left: 130px;
  height: 190px;
  max-width: 500px;

  & > p {
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

  @media (max-width: 1200px) {
    max-width: 500px;
  }

  @media (max-width: 740px) {
    padding-left: 80px;

    &::before {
      left: 40px;
    }

    & > p {
      font-size: 36px;
    }

    & > h3 {
      font-size: 20px;
    }
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
      <Steps>
        <Step ref={step1Ref} data-triggerpoint={500}>
          <StepImg>
            <img alt="step1Img" src={logoBlueBig} />
          </StepImg>
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
          <StepImg>
            <img alt="step2Img" src={logoBlueBig} />
          </StepImg>
          <StepIntroduction>
            <p>2</p>
            <h3>XXXXXXXXX</h3>
            <div>
              OOOOOOOO，OOOOOOO，OOOOOOOOOO，OOOOO，OOO，
              OOOOOOOOOOOOOOO，OOOOOOO，OOOOOOOOOO，OOOOO，OOO，OOOOOOOOOOOOOOO，OOOOOOO
            </div>
          </StepIntroduction>
        </Step>
        <Step ref={step3Ref} data-triggerpoint={1200}>
          <StepImg>
            <img alt="step3Img" src={logoBlueBig} />
          </StepImg>
          <StepIntroduction>
            <p>3</p>
            <h3>XXXXXXXXX</h3>
            <div>
              OOOOOOOO，OOOOOOO，OOOOOOOOOO，OOOOO，OOO，O
              OOOOOOOOOOOOOO，OOOOOOO，OOOOOOOOOO，OOOOO，OOO，OOOOOOOOOOOOOOO，OOOOOOO
            </div>
          </StepIntroduction>
        </Step>
      </Steps>
    </Body>
  );
};

export default HowToUse;
