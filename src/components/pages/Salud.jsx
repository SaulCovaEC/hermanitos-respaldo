import React, { Component } from 'react';


export default class Salud extends Component {
  constructor(...props) {
    super(...props)
    this.state = {
      loading: false
    };
  }
  async componentDidMount() {
    await this.props.location('salud');
  }

  render() {
    return (
      <section id="informacion">
        
      </section>
    );
  }
}
