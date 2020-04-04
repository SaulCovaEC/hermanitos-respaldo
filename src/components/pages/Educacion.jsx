import React, { Component } from 'react';


export default class Educacion extends Component {
  constructor(...props) {
    super(...props)
    this.state = {
      loading: false
    };
  }
  async componentDidMount() {
    await this.props.location('educacion');
  }

  render() {
    return (
      <section id="informacion">
        
      </section>
    );
  }
}
