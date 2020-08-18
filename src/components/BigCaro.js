import React, { useState } from "react";
import "react-alice-carousel/lib/scss/alice-carousel.scss";
import AliceCarousel from "react-alice-carousel";
import one from "../images/1.jpg";
import two from "../images/2.jpg";
import three from "../images/3.jpg";
import four from "../images/4.jpg";
import "../css/BigCaro.scss";

class Gallery extends React.Component {
  items = [one, two, three, four];

  state = {
    galleryItems: this.items.map(i => <img src={i} key={i} />)
  };

  thumbItem = (item, i) => (
    <span key={item} onClick={() => this.Carousel.slideTo(i)}>
      *{" "}
    </span>
  );

  render() {
    return (
      <div>
        <AliceCarousel
          dotsDisabled={true}
          buttonsDisabled={true}
          items={this.state.galleryItems}
          autoPlay={true}
          ref={el => (this.Carousel = el)}
          autoPlayInterval={2500}
          duration={750}
        />
        {/*
        <nav>{this.items.map(this.thumbItem)}</nav>
        <button onClick={() => this.Carousel.slidePrev()}>Prev button</button>
        <button onClick={() => this.Carousel.slideNext()}>Next button</button>
	     */}
      </div>
    );
  }
}

export default Gallery;
