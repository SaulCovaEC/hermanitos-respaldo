import React, { Component } from 'react';

export default class Slider extends Component {
  state = {
    loading: false,
    slideIndex: 1, 
    slideLength: 3
  };

  componentDidMount() {
    this.setSlider = setInterval(
      () => this.animarSlider(),
      5000
    );
  }

  componentWillUnmount() {
    clearInterval(this.setSlider);
  }

  animarSlider = () => {
    let next = (this.state.slideIndex)+1;
    if(this.state.slideLength === next){
      this.setState({
        slideIndex: 1
      })
    } else {
      this.setState({
        slideIndex: next
      })
    }
  }

  render() {
    return (
      <div id="slider">
        <div className="slide fade" style={{display: (this.state.slideIndex === 1) ? "block" : "none"}}>
          <div className="numbertext">1 / 3</div>
          <img src="./img/Slider1.jpg" className="slider-back" alt="Slider 1"/>
        </div>

        <div className="slide fade" style={{display: (this.state.slideIndex === 2) ? "block" : "none"}}>
          <div className="numbertext">2 / 3</div>
          <img src="./img/Slider2.jpg" className="slider-back" alt="Slider 2"/>
        </div>

        <div className="slides fade" style={{display: (this.state.slideIndex === 3) ? "block" : "none"}}>
          <div className="numbertext">3 / 3</div>
          <img src="./img/Slider3.jpg" className="slider-back" alt="Slider 3"/>
        </div>
      </div>
    );
  }
}

