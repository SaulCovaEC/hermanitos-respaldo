import React, { Component } from 'react';
import { Row, Col } from 'antd';

export default class ConociendoTuEspacio extends Component {
  constructor(...props) {
    super(...props)
    this.state = {
      loading: false,
      text: this.props.text['cultura']
    };
  }
  async componentDidMount() {
    await this.props.location('cultura-y-convivencia');
  }

  render() {
    let text = this.props.text['cultura'];
    return (
      <section id="informacion">
        <div id="page-title">{text['title']}</div>
        <Row id="cultura-description" justify="center" align="middle">
          <Col className="cultura-text" xs={24} sm={24} md={24} lg={24} xl={24}>
            <p style={{textAlign: 'center', padding: '20px'}}>{text['text-1']}</p>
            <p style={{textAlign: 'center', padding: '20px'}}>{text['text-2']}</p>
          </Col>
        </Row>
        <div id="div-img" className="cultura"></div>
        <div id="page-title-2" style={{textAlign: 'center', marginTop: '0'}}>{text['title-2']}</div>
        <Row className="text-informacion" justify="center"  style={{marginTop: '20px'}}>
          <Col span={20}>
            <ul>
              {text['list'].map((value, index) => {
                return <li key={index}>{value}</li>
              })}
            </ul>
          </Col>
        </Row>
        <div id="page-title-3" style={{textAlign: 'end'}}>{text['title-3']}</div>
        <Row className="text-informacion" justify="center"  style={{marginTop: '20px'}}>
          <Col span={20}>
            <p><span className="enfasis-text">{text['enfasis-3']}</span> {text['text-3']}</p>
            <p>{text['text-4']}</p>
            <p>{text['text-5']}</p>
            <p>{text['text-6']}</p>
            <p>{text['text-7']}</p>
            <p>{text['text-8']}</p>
            <p>{text['text-9']}</p>
            <p>{text['text-10']}</p>
            <p>{text['text-11']}</p>
            <p>{text['text-12']}</p>
            <p>{text['text-13']}</p>
            <p>{text['text-14']}</p>
          </Col>
        </Row>
        <p id="info-note">* {this.props.text['informacion-nota']}</p>
      </section>
    );
  }
}