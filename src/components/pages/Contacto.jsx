import React, { Component } from 'react';


export default class Contacto extends Component {
  state = {
    loading: false,
  };

  componentDidMount() {
    this.props.location('contato');
  }


  render() {
    return (
      <section id="contacto">
        
      </section>
    );
  }
}
