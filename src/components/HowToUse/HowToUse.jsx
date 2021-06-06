import React from 'react';
import styled from 'styled-components';
import logoBlueBig from '../../assets/img/logo-blue-big.png';

const Body = styled.nav`
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
  return (
    <Body>
      <Title>
        OOO<span>XXX</span>OOOOOOO
      </Title>
      <Step>
        <img src={logoBlueBig} />
        <StepIntroduction>
          <p>1</p>
          <h3>XXXXXXXXX</h3>
          <div>
            OOOOOOOO，OOOOOOO，OOOOOOOOOO，OOOOO，OOO，OOOOOOOOOOOOOOO，OOOOOOO，OOOOOOOOOO，OOOOO，OOO，OOOOOOOOOOOOOOO，OOOOOOO
          </div>
        </StepIntroduction>
      </Step>
      <Step>
        <StepIntroduction>
          <p>2</p>
          <h3>XXXXXXXXX</h3>
          <div>
            OOOOOOOO，OOOOOOO，OOOOOOOOOO，OOOOO，OOO，OOOOOOOOOOOOOOO，OOOOOOO，OOOOOOOOOO，OOOOO，OOO，OOOOOOOOOOOOOOO，OOOOOOO
          </div>
        </StepIntroduction>
        <img src={logoBlueBig} />
      </Step>
      <Step>
        <img src={logoBlueBig} />
        <StepIntroduction>
          <p>3</p>
          <h3>XXXXXXXXX</h3>
          <div>
            OOOOOOOO，OOOOOOO，OOOOOOOOOO，OOOOO，OOO，OOOOOOOOOOOOOOO，OOOOOOO，OOOOOOOOOO，OOOOO，OOO，OOOOOOOOOOOOOOO，OOOOOOO
          </div>
        </StepIntroduction>
      </Step>
    </Body>
  );
};

export default HowToUse;
