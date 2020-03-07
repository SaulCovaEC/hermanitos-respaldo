import React, { Component } from 'react';

export default class ProyectoHermanitos extends Component {
  state = {
    loading: false,
  };

  componentDidMount() {
    this.props.location('projecto-hermanitos');
  }

  
  render() {
    return (
      <section id="prooyecto-hermanitos">
        
      </section>
    );
  }
}
