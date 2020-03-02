import React, { Component } from 'react';

export default class FooterAdmin extends Component {
  
  render() {
    return (
      <div style={{ textAlign: 'center', position: 'fixed', bottom: '0', width: '-webkit-fill-available', padding: '5px'}}>©{new Date().getFullYear()} Espaço Hermanitos.</div>
    );
  }
}
