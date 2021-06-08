import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import superQ1 from '../../assets/img/superQ1.png';
import fadeInObserver from '../../modules/fadeInObserver';

const Body = styled.div`
  color: #1f3f83;
  padding: 161px 0px 100px 0px;
  position: relative;
  transition: opacity 1s, top 1s;
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

const SliderWrap = styled.div`
  margin-top: 60px;
  height: max-content;

  & > .slick-slider {
    & > .slick-dots {
      & > li {
        margin: 0 12px;
        & > button {
          &::before {
            font-size: 18px;
          }

          &:hover::before{
            color: #c0c0c0;
          }
        }
      }

      & > .slick-active {
        & > button {
          &::before {
            color: #4184f3;
          }
        }
      }
    }
  }
`;

const SliderItem = styled.div`
`;

const SliderItemImage = styled.div`
  width: 586px;
  height: 400px;
  display: flex;
  justify-content: center;
`;

const SliderItemIntroduction = styled.div`
  height: 176px;
  padding: 45px;
  box-sizing: border-box;

  & > h4 {
    font-size: 16px;
  }

  & > p {
    margin-top: 10px;
    font-size: 12px;
    line-height: 2.167;
  }
`;

const HowToUse = () => {
  const sliderRef = useRef(null);
  useEffect(() => {
    sliderRef.current.slickPlay();
  }, []);


  const sectionRef = useRef(null);
  useEffect(() => {
    fadeInObserver.registerObservers([
      sectionRef.current,
    ]);
  }, []);
  return (
    <Body ref={sectionRef} data-triggerpoint={2500}>
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
      <SliderWrap>
        <Slider
          dots
          infinite
          autoplay
          autoplaySpeed={5000}
          speed={500}
          slidesToShow={3}
          slidesToScroll={1}
          ref={sliderRef}
        >
          <SliderItem>
            <SliderItemImage>
              <img alt="slider1Image" src={superQ1} />
            </SliderItemImage>
            <SliderItemIntroduction>
              <h4>OOOOOOOOOOOOO1</h4>
              <p>
                XXXXXXXXXX，XXXXXXXXX，XXXXXXXXXXX，XXXXXXXXXXXX，XXXXXXXXXXXXXXXXXX。
                <br />
                XXXXXXXXXXXXXXXX。
              </p>
            </SliderItemIntroduction>
          </SliderItem>
          <SliderItem>
            <SliderItemImage>
              <img alt="slider1Image" src={superQ1} />
            </SliderItemImage>
            <SliderItemIntroduction>
              <h4>OOOOOOOOOOOOO2</h4>
              <p>
                XXXXXXXXXX，XXXXXXXXX，XXXXXXXXXXX，XXXXXXXXXXXX，XXXXXXXXXXXXXXXXXX。
                <br />
                XXXXXXXXXXXXXXXX。
              </p>
            </SliderItemIntroduction>
          </SliderItem>
          <SliderItem>
            <SliderItemImage>
              <img alt="slider1Image" src={superQ1} />
            </SliderItemImage>
            <SliderItemIntroduction>
              <h4>OOOOOOOOOOOOO3</h4>
              <p>
                XXXXXXXXXX，XXXXXXXXX，XXXXXXXXXXX，XXXXXXXXXXXX，XXXXXXXXXXXXXXXXXX。
                <br />
                XXXXXXXXXXXXXXXX。
              </p>
            </SliderItemIntroduction>
          </SliderItem>
          <SliderItem>
            <SliderItemImage>
              <img alt="slider1Image" src={superQ1} />
            </SliderItemImage>
            <SliderItemIntroduction>
              <h4>OOOOOOOOOOOOO4</h4>
              <p>
                XXXXXXXXXX，XXXXXXXXX，XXXXXXXXXXX，XXXXXXXXXXXX，XXXXXXXXXXXXXXXXXX。
                <br />
                XXXXXXXXXXXXXXXX。
              </p>
            </SliderItemIntroduction>
          </SliderItem>
          <SliderItem>
            <SliderItemImage>
              <img alt="slider1Image" src={superQ1} />
            </SliderItemImage>
            <SliderItemIntroduction>
              <h4>OOOOOOOOOOOOO5</h4>
              <p>
                XXXXXXXXXX，XXXXXXXXX，XXXXXXXXXXX，XXXXXXXXXXXX，XXXXXXXXXXXXXXXXXX。
                <br />
                XXXXXXXXXXXXXXXX。
              </p>
            </SliderItemIntroduction>
          </SliderItem>
          <SliderItem>
            <SliderItemImage>
              <img alt="slider1Image" src={superQ1} />
            </SliderItemImage>
            <SliderItemIntroduction>
              <h4>OOOOOOOOOOOOO6</h4>
              <p>
                XXXXXXXXXX，XXXXXXXXX，XXXXXXXXXXX，XXXXXXXXXXXX，XXXXXXXXXXXXXXXXXX。
                <br />
                XXXXXXXXXXXXXXXX。
              </p>
            </SliderItemIntroduction>
          </SliderItem>
        </Slider>
      </SliderWrap>
    </Body>
  );
};

export default HowToUse;
