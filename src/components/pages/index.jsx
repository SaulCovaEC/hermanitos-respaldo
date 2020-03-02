import React, { Component } from 'react';
import Slider from './Slider';


export default class Home extends Component {
  state = {
    loading: false,
  };

  componentDidMount() {
  }

  render() {
    return (
      <section className="home">
        <Slider />
        <div className="proyecto"></div>
        <div className="oportunidades"></div>
        <div className="informacion"></div>
        <div className="media-video"></div>
        <div className="servicios"></div>
        <div className="donacion"></div>
        <div className="parceros"></div>
        <div className="map"></div>
      </section>
    );
  }
}
