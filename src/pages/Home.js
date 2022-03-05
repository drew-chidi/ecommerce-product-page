import React, { useState } from "react";
import Carousel from "../components/Carousel";
import Navbar from "../components/Navbar";
import { SliderData } from "../components/SliderData";
import ProductInfo from "../components/ProductInfo";
import { Container } from "../components/styles/Container.styled";

const Home = () => {
  const [productInfo, setProductInfo] = useState({});

  // Set and Store delete button click
  const [deleteInfo, setDelete] = useState(false);

  return (
    <div>
      <Container>
        <Navbar productInfo={productInfo} setDelete={setDelete} />
        <main>
          <Carousel slides={SliderData} />
          <ProductInfo
            setProductInfo={setProductInfo}
            deleteInfo={deleteInfo}
            setDelete={setDelete}
          />
        </main>
      </Container>
    </div>
  );
};

export default Home;
