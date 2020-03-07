import React, { Component } from 'react';


export default class OfrecerEmpleo extends Component {
  state = {
    loading: false,
  };

  componentDidMount() {
    this.props.location('ofrecer-emprego');
  }


  render() {
    return (
      <section id="ofrecer-empleo">
        
      </section>
    );
  }
}
