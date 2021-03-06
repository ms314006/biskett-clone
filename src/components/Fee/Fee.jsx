import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
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

const SubTitle = styled.div`
  font-size: 32px;
  margin-top: 30px;
`;

const Fees = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 15px;
  margin-left: -20px;

  @media (max-width: 740px) {
    & > div:last-child {
      min-width: 384px;
    }
  }
`;

const FeeItem = styled.div`
  background: #ffffff;
  max-width: 192px;
  margin-top: 20px;
  margin-left: 20px;
  padding: 35px 20px;
  background-color: #fff;
  text-align: center;

  & > h3 {
    position: relative;
    font-size: 20px;
    padding-bottom: 20px;

    &::before {
      content: "";
      border-bottom: 2px #1f3f83 solid;
      position: absolute;
      width: 34px;
      bottom: 0;
      left: calc(50% - 17px);
    }
  }

  & > div {
    font-size: 14px;
    min-height: 75px;
    margin-top: 30px;
    letter-spacing: .02em;
    line-height: 1.5;

    & > p {
      & > strong {
        font-size: 32px;
        font-weight: bold;
      }
    }
  }

  & > button {
    margin-top: 25px;
    border: 2px solid #4184f3;
    background: #4184f3;
    color: #ffffff;
    padding: 14px 38px;
    cursor: pointer;
    transition: background 0.5s, color 0.5s;

    & :hover {
      background: #ffffff;
      color: #4184f3;
    }
  }

  &:last-child {

    & > button {
      background: #ffffff;
      color: #4184f3;
  
      & :hover {
        background: #4184f3;
        color: #ffffff;
      }
    }
  }
`;

const Fee = () => {
  const sectionRef = useRef(null);
  useEffect(() => {
    fadeInObserver.registerObservers([
      sectionRef.current,
    ]);
  }, []);
  return (
    <Body>
      <Warp ref={sectionRef} data-triggerpoint={3400}>
        <Title>
          OOOOOOOOOO
        </Title>
        <SubTitle>
          XXXXXXXXXX
          <br />
          XXXXXXXXXXXXXXX
        </SubTitle>
        <Fees>
          <FeeItem>
            <h3>Personal</h3>
            <div>
              <p>
                <strong>750</strong>
                &nbsp;???/???
              </p>
              <p>???XXXXXXXX???</p>
              <p>XXXXXXXXXXXXXX</p>
            </div>
            <button type="button">
              XXXXXXXX
            </button>
          </FeeItem>
          <FeeItem>
            <h3>Basic</h3>
            <div>
              <p>
                <strong>1,800</strong>
                &nbsp;???/???
              </p>
              <p>???XXXXXXXX???</p>
              <p>XXXXXXXXXXXXXX</p>
            </div>
            <button type="button">
              XXXXXXXX
            </button>
          </FeeItem>
          <FeeItem>
            <h3>Standard</h3>
            <div>
              <p>
                <strong>4,900</strong>
                &nbsp;???/???
              </p>
              <p>???XXXXXXXX???</p>
              <p>XXXXXXXXXXXXXX</p>
            </div>
            <button type="button">
              XXXXXXXX
            </button>
          </FeeItem>
          <FeeItem>
            <h3>Premium</h3>
            <div>
              <p>
                <strong>15,000</strong>
                &nbsp;???/???
              </p>
              <p>???XXXXXXXX???</p>
              <p>XXXXXXXXXXXXXX</p>
            </div>
            <button type="button">
              XXXXXXXX
            </button>
          </FeeItem>
          <FeeItem>
            <h3>Advanced</h3>
            <div>
              <p>XXXXXXXXXXXXX</p>
              <p>XXXXXXXXXXXXXX</p>
              <p>XXXXXXX???</p>
            </div>
            <button type="button">
              XXXXXXXX
            </button>
          </FeeItem>
        </Fees>
      </Warp>
    </Body>
  );
};

export default Fee;
