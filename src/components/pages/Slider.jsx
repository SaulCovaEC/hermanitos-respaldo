import React, { Component } from 'react';

export default class Slider extends Component {
  state = {
    loading: false,
    slideIndex: 1, 
    slideLength: 10
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
    if(this.state.slideLength === this.state.slideIndex){
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
          <div className="numbertext">1 / {this.state.slideLength}</div>
          <img src="./img/img-3.jpg" className="slider-back" alt="Slider 1"/>
        </div>

        <div className="slide fade" style={{display: (this.state.slideIndex === 2) ? "block" : "none"}}>
          <div className="numbertext">2 / {this.state.slideLength}</div>
          <img src="./img/img-4.jpg" className="slider-back" alt="Slider 2"/>
        </div>

        <div className="slides fade" style={{display: (this.state.slideIndex === 3) ? "block" : "none"}}>
          <div className="numbertext">3 / {this.state.slideLength}</div>
          <img src="./img/img-6.jpg" className="slider-back" alt="Slider 3"/>
        </div>

        <div className="slides fade" style={{display: (this.state.slideIndex === 3) ? "block" : "none"}}>
          <div className="numbertext">4 / {this.state.slideLength}</div>
          <img src="./img/img-10.jpg" className="slider-back" alt="Slider 4"/>
        </div>

        <div className="slides fade" style={{display: (this.state.slideIndex === 3) ? "block" : "none"}}>
          <div className="numbertext">5 / {this.state.slideLength}</div>
          <img src="./img/img-11.jpg" className="slider-back" alt="Slider 5"/>
        </div>

        <div className="slides fade" style={{display: (this.state.slideIndex === 3) ? "block" : "none"}}>
          <div className="numbertext">6 / {this.state.slideLength}</div>
          <img src="./img/img-13.jpg" className="slider-back" alt="Slider 6"/>
        </div>

        <div className="slides fade" style={{display: (this.state.slideIndex === 3) ? "block" : "none"}}>
          <div className="numbertext">7 / {this.state.slideLength}</div>
          <img src="./img/img-12.jpg" className="slider-back" alt="Slider 7"/>
        </div>

        <div className="slides fade" style={{display: (this.state.slideIndex === 3) ? "block" : "none"}}>
          <div className="numbertext">8 / {this.state.slideLength}</div>
          <img src="./img/img-9.jpg" className="slider-back" alt="Slider 8"/>
        </div>

        <div className="slides fade" style={{display: (this.state.slideIndex === 3) ? "block" : "none"}}>
          <div className="numbertext">9 / {this.state.slideLength}</div>
          <img src="./img/img-8.jpg" className="slider-back" alt="Slider 9"/>
        </div>

        <div className="slides fade" style={{display: (this.state.slideIndex === 3) ? "block" : "none"}}>
          <div className="numbertext">10 / {this.state.slideLength}</div>
          <img src="./img/img-2.jpg" className="slider-back" alt="Slider 10"/>
        </div>

        <div className="slides fade" style={{display: (this.state.slideIndex === 3) ? "block" : "none"}}>
          <div className="numbertext">10 / {this.state.slideLength}</div>
          <img src="./img/img-7.jpg" className="slider-back" alt="Slider 3"/>
        </div>
      </div>
    );
  }
}

