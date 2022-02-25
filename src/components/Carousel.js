import React, { Fragment, useState } from "react";
import { SliderData } from "./SliderData";
import next from "../assets/images/icon-next.svg";
import previous from "../assets/images/icon-previous.svg";
import close from "../assets/images/icon-close.svg";

import {
  CarouselContainer,
  NextLogo,
  PrevLogo,
  ImageContainer,
  ImageGrid,
  LightGrid,
  StyledDiv,
  StyledClose,
  Backdrop,
  ImageBox,
  Image,
} from "./styles/Carousel.styled";

const Carousel = ({ slides }) => {
  const [current, setCurrent] = useState(0);

  // LightBox Display State
  const [lightBoxDisplay, setLightBoxDisplay] = useState(false);

  const length = slides.length;
  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }
  const nextSlide = () => {
    if (current === length - 1) {
      setCurrent(0);
    } else {
      setCurrent(current + 1);
    }
  };
  const prevSlide = () => {
    if (current <= 0) {
      setCurrent(length - 1);
    } else {
      setCurrent(current - 1);
    }
  };

  const currentHandler = (e) => {
    setCurrent(parseInt(e.currentTarget.dataset.index));
  };

  // SHOW LIGHTBOX
  const lightBoxDisplayHandler = () => {
    setLightBoxDisplay(true);
  };

  // HIDE LIGHTBOX
  const hideLightBoxHandler = () => {
    setLightBoxDisplay(false);
  };

  return (
    <Fragment>
      <Backdrop display={lightBoxDisplay}>
        <CarouselContainer display={lightBoxDisplay}>
          <StyledClose onClick={hideLightBoxHandler}>
            <img src={close} alt='next icon' />
          </StyledClose>
          <PrevLogo>
            <img src={previous} alt='previous icon' onClick={prevSlide} />
          </PrevLogo>
          <NextLogo>
            <img src={next} alt='next icon' onClick={nextSlide} />
          </NextLogo>
          {SliderData.map((slide, index) => {
            return (
              <StyledDiv key={index}>
                {index === current && <img src={slide.image} alt='product' />}
              </StyledDiv>
            );
          })}
          <LightGrid>
            {SliderData.map((slide, index) => {
              return (
                <div key={index}>
                  <button
                    onClick={currentHandler}
                    key={index}
                    data-index={index}
                  >
                    <img
                      src={slide.image}
                      alt='product'
                      onClick={lightBoxDisplayHandler}
                    />
                  </button>
                </div>
              );
            })}
          </LightGrid>
        </CarouselContainer>
      </Backdrop>

      {/* LightBox, Large Screens */}

      <ImageContainer>
        {SliderData.map((slide, index) => {
          return (
            <ImageBox key={index}>
              {index === current && <Image src={slide.image} alt='product' />}
            </ImageBox>
          );
        })}
        <ImageGrid>
          {SliderData.map((slide, index) => {
            return (
              <div key={index} onClick={lightBoxDisplayHandler}>
                <button onClick={currentHandler} key={index} data-index={index}>
                  <img src={slide.image} alt='product' />
                </button>
              </div>
            );
          })}
        </ImageGrid>
      </ImageContainer>
    </Fragment>
  );
};

export default Carousel;
