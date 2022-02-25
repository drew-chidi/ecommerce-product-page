import React, { Fragment, useEffect, useState } from "react";
import plus from "../assets/images/icon-plus.svg";
import minus from "../assets/images/icon-minus.svg";
import { ReactComponent as Cart } from "../assets/images/icon-cart.svg";
import {
  CountContainer,
  InfoContainer,
  Price,
  PriceBox,
  Title,
  Flex,
  StyledP,
} from "./styles/ProductInfo.styled";
import { Button } from "./styles/Button.styled";

const ProductInfo = ({ setProductInfo, deleteInfo, setDelete }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (deleteInfo === true) {
      setCount(0);
      setDelete(false);
    }
  }, [deleteInfo, setDelete]);

  const addToCartHandler = () => {
    setProductInfo({
      price: "125",
      count,
    });
  };

  const increaseCountHandler = () => {
    setCount((prevState) => prevState + 1);
  };
  const decreaseCountHandler = () => {
    if (count === 0) {
      setCount(0);
    } else {
      setCount((prevState) => prevState - 1);
    }
  };

  return (
    <Fragment>
      <InfoContainer>
        <Title>SNEAKER COMPANY</Title>
        <div>
          <h1>
            Fall Limited Edition <br /> Sneakers
          </h1>
          <StyledP>
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they'll withstand everything
            the weather can offer.
          </StyledP>
          <PriceBox>
            <div>
              <Price>$125.00</Price>
              <div>50%</div>
            </div>
            <p>$250.00</p>
          </PriceBox>
          <Flex>
            <CountContainer>
              <button onClick={decreaseCountHandler}>
                <img src={minus} alt='minus 1' />
              </button>
              <p>{count}</p>
              <button onClick={increaseCountHandler}>
                <img src={plus} alt='add 1' />
              </button>
            </CountContainer>
            <Button
              bg='hsl(26, 100%, 55%)'
              color='#fff'
              width='100%'
              onClick={addToCartHandler}
            >
              <Cart style={{ margin: "0 20px 0 0" }} />
              <p>Add to cart</p>
            </Button>
          </Flex>
        </div>
      </InfoContainer>
    </Fragment>
  );
};

export default ProductInfo;
