import React, { Component } from 'react';


export default class Trabajo extends Component {
  constructor(...props) {
    super(...props)
    this.state = {
      loading: false
    };
  }
  async componentDidMount() {
    await this.props.location('trabajo');
  }

  render() {
    return (
      <section id="informacion">
        
      </section>
    );
  }
}
