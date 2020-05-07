import React, { useState, useEffect } from "react";
import {
  PortfolioSection,
  PortfolioTitle,
  Span,
  PortfolioList,
  PortfolioItem,
  ImageWrapper,
  Image,
  Overlay,
  OverlaySpan,
} from "./style.js";
import axios from "axios";
const Portfolio = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    axios.get("js/data.json").then((res) => {
      setImages(res.data.Portfolio);
    });
  }, []);

  /* 
  لازم تتأكد إن في 
  images 
  علشان تعمل
  map 
  عليها
  */
  let PortfolioImages;
  if (images && images.length > 0) {
    PortfolioImages = images.map((imageItem) => {
      return (
        <ImageWrapper key={imageItem.id}>
          <Image src={imageItem.image} alt="" />
          <Overlay>
            <OverlaySpan>Show Image</OverlaySpan>
          </Overlay>
        </ImageWrapper>
      );
    });
  } else {
    PortfolioImages = [];
  }

  return (
    <PortfolioSection>
      <PortfolioTitle>
        <Span>My</Span> Portfolio
      </PortfolioTitle>
      <PortfolioList>
        <PortfolioItem active>All</PortfolioItem>
        <PortfolioItem>HTML</PortfolioItem>
        <PortfolioItem>Photoshop</PortfolioItem>
        <PortfolioItem>Wordpress</PortfolioItem>
        <PortfolioItem>Mobile</PortfolioItem>
      </PortfolioList>

      <div class="box">{PortfolioImages}</div>
    </PortfolioSection>
  );
};
export default Portfolio;
