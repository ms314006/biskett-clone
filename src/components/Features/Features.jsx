import React from 'react';
import styled from 'styled-components';
import superQ1 from '../../assets/img/superQ1.png';

const Body = styled.nav`
  color: #1f3f83;
  background: #edf4ff;
  padding: 161px 0px 100px 0px;
`;

const Warp = styled.div`
  max-width: 1040px;
  margin: -81px auto 0px auto;
  padding: 0px 30px;
`;

const Title = styled.div`
  font-size: 56px;
`;

const Features = styled.div`
  display: flex;
  flex-flow: wrap;
  margin-left: -6.731%;
`;

const Feature = styled.h3`
  max-width: 290px;
  margin-top: 70px;
  margin-left: 6.731%;

  & > h3 {
    display: flex;
    font-size: 26px;

    & > img {
      width: 54px;
    }
  }

  & > p {
    margin-top: 20px;
    font-size: 12px;
    line-height: 2.167;
  }
`;

const HowToUse = () => {
  return (
    <Body>
      <Warp>
        <Title>
          OOOOOOOOOO
        </Title>
        <Features>
          <Feature>
            <h3>
              <img src={superQ1} />
              XXXXXXX，XXX，XXXXXX
            </h3>
            <p>
              OOOOOOOOOOOOOOO，OOOOOOOOO，OOOOOOOOOOOOOOOO，OOOOOOOOO，OOOOOOOOO。OOOOO「OOO」OOOOOOOOO，OOOOOOOOOOO，OOOOOOOOOOOOO。
            </p>
          </Feature>
          <Feature>
            <h3>
              <img src={superQ1} />
              XXXXXXX，XXX，XXXXXX
            </h3>
            <p>
              OOOOOOOOOOOOOOO，OOOOOOOOO，OOOOOOOOOOOOOOOO，OOOOOOOOO，OOOOOOOOO。OOOOO「OOO」OOOOOOOOO，OOOOOOOOOOO，OOOOOOOOOOOOO。
            </p>
          </Feature>
          <Feature>
            <h3>
              <img src={superQ1} />
              XXXXXXX，XXX，XXXXXX
            </h3>
            <p>
              OOOOOOOOOOOOOOO，OOOOOOOOO，OOOOOOOOOOOOOOOO，OOOOOOOOO，OOOOOOOOO。OOOOO「OOO」OOOOOOOOO，OOOOOOOOOOO，OOOOOOOOOOOOO。
            </p>
          </Feature>
          <Feature>
            <h3>
              <img src={superQ1} />
              XXXXXXX，XXX，XXXXXX
            </h3>
            <p>
              OOOOOOOOOOOOOOO，OOOOOOOOO，OOOOOOOOOOOOOOOO，OOOOOOOOO，OOOOOOOOO。OOOOO「OOO」OOOOOOOOO，OOOOOOOOOOO，OOOOOOOOOOOOO。
            </p>
          </Feature>
          <Feature>
            <h3>
              <img src={superQ1} />
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
