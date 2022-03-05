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
  EmptyCart,
} from "./styles/Cart.styled";

import Product from "../assets/images/image-product-1-thumbnail.jpg";

const Cart = ({ info, setDelete }) => {
  const [price, setPrice] = useState("");
  const [count, setCount] = useState(0);

  const deleteHandler = () => {
    setDelete(true);
    setPrice("0");
    setCount(0);
    info.count = 0;
    info.price = "0";
  };
  useEffect(() => {
    setPrice(info.price);
    setCount(info.count);
  }, [info.price, info.count]);

  console.log(typeof price);
  return (
    <CartContainer>
      <Box>
        <Title>Cart</Title>
        <hr />
        <div>
          {/* Conditionally display cart items */}
          {info.count === 0 || info.count === undefined ? (
            <EmptyCart>Your cart is empty.</EmptyCart>
          ) : (
            <Flex>
              <Image>
                <img src={Product} alt='' />
              </Image>
              <div>
                <p>Fall Limited Edition Edition Sneakers</p>
                <p>{`$${parseFloat(price).toFixed(2)} x ${count} `}</p>
                <Total>{`${(parseFloat(price) * count).toFixed(2)}`}</Total>
              </div>
              <Delete style={{ margin: "0 0 0 0px" }} onClick={deleteHandler} />
            </Flex>
          )}
        </div>
        <div style={{ width: "100%", padding: "0 20px" }}>
          <Button
            bg='hsl(26, 100%, 55%)'
            color='#fff'
            width='100%'
            $display={
              info.count === 0 || info.count === undefined ? "none" : "block"
            }
          >
            Checkout
          </Button>
        </div>
      </Box>
    </CartContainer>
  );
};

export default Cart;
