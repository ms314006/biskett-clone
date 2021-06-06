import React from 'react';
import styled from 'styled-components';

const Body = styled.div`
  color: #1f3f83;
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

const SubTitle = styled.div`
  font-size: 32px;
  margin-top: 30px;
`;

const HowToUse = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };

  return (
    <Body>
      <Warp>
        <Title>
          OOOOOOOOOO
        </Title>
        <SubTitle>
          XXXXXXXXXX
          <br />
          XXXXXXXXXXXXXXX
        </SubTitle>
      </Warp>
    </Body>
  );
};

export default HowToUse;
