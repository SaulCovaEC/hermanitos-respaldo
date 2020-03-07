import React, { Component } from 'react';


export default class Galeria extends Component {
  state = {
    loading: false,
  };

  componentDidMount() {
    this.props.location('galeria');
  }


  render() {
    return (
      <section id="galeria">
        
      </section>
    );
  }
}
