import React, { useEffect, useState } from "react";
import { Button } from "./styles/Button.styled";
import { ReactComponent as Delete } from "../assets/images/icon-delete.svg";
import {
  CartContainer,
  Box,
  Title,
  Image,
  Flex,
  Total,
} from "./styles/Cart.styled";

import Product from "../assets/images/image-product-1-thumbnail.jpg";

const Cart = ({ info, setDelete }) => {
  const [price, setPrice] = useState("");
  const [count, setCount] = useState(0);

  // const deleteHandler = () => {
  //   console.log("I am clicked");
  //   setDelete(true);
  //   info.price = "0";
  //   info.count = 0;
  //   setDelete(false);
  //   console.log(info);
  // };
  const deleteHandler = () => {
    console.log("I am clicked");
    setDelete(true);
    setPrice("0");
    setCount(0);
    info.count = 0;
    info.price = "0";
    // setDelete(false);
    console.log(info);
  };
  useEffect(() => {
    setPrice(info.price);
    setCount(info.count);
  }, [info.price, info.count]);
  console.log(price);
  console.log(count);
  console.log(typeof price);

  return (
    <CartContainer>
      <Box>
        <Title>Cart</Title>
        <hr />
        <div>
          {/* Conditionally display cart items */}
          {info.count === 0 || info.count === undefined ? (
            <p>Your cart is empty.</p>
          ) : (
            <Flex>
              <Image>
                <img src={Product} alt='' />
              </Image>
              <div>
                <p>Autumn Limited Edition...</p>
                <p>{`$${price} x ${count} `}</p>
                <Total>{`$${parseFloat(price) * count}`}</Total>
              </div>
              <Delete
                style={{ margin: "0 0 0 30px" }}
                onClick={deleteHandler}
              />
            </Flex>
          )}
        </div>
        <div style={{ width: "100%", padding: "0 20px" }}>
          <Button bg='hsl(26, 100%, 55%)' color='#fff' width='100%'>
            Checkout
          </Button>
        </div>
      </Box>
    </CartContainer>
  );
};

export default Cart;
