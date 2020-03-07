import React, { Component } from 'react';


export default class Informacion extends Component {
  constructor(...props) {
    super(...props)
    this.state = {
      loading: false
    };
  }
  async componentDidMount() {
    await this.props.location(this.props.pathLocation);
    console.log(this.props.pathLocation);
  }

  render() {
    return (
      <section id="informacion">
        
      </section>
    );
  }
}
