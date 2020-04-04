import React, { Component } from 'react';
import { Row, Col } from 'antd';

export default class ConociendoTuEspacio extends Component {
  constructor(...props) {
    super(...props)
    this.state = {
      loading: false
    };
  }
  async componentDidMount() {
    await this.props.location('conociendo-tu-espacio');
  }

  render() {
    return (
      <section id="informacion">
        <div id="page-title">{this.props.text['conociendo-title-1']}</div>
        <Row justify="center" align="middle" style={{marginTop: '20px'}}>
					<Col xs={24} sm={24} md={12} lg={12} xl={10}>
            <img src="./img/conociendo-tu-espacio-1.jpg" alt="Conociendo tu espacio"/>
          </Col>
          <Col xs={24} sm={24} md={12} lg={10} xl={10}>
            <p style={{textAlign: 'center', padding: '20px'}}>{this.props.text['conociendo-text-1']}</p>
          </Col>
        </Row>
        <Row justify="center" align="middle">
					<Col xs={24} sm={24} md={12} lg={10} xl={10}>
            <p style={{textAlign: 'center', padding: '20px'}}>{this.props.text['conociendo-text-2']}</p>
          </Col>
          <Col xs={24} sm={24} md={12} lg={12} xl={10}>
            <img src="./img/conociendo-tu-espacio-2.jpg" alt="Conociendo tu espacio"/>
          </Col>
        </Row>
        <div id="page-title-2" style={{textAlign: 'center'}}>{this.props.text['conociendo-title-2']}</div>
        <Row className="text-informacion" justify="center"  style={{marginTop: '20px'}}>
          <Col span={20}>
            <p>{this.props.text['conociendo-text-3']}</p>
            <p>{this.props.text['conociendo-text-4']}</p>
            <p><span className="enfasis-text">{this.props.text['conociendo-enfasis-5']}</span> {this.props.text['conociendo-text-5']}</p>
            <p><span className="enfasis-text">{this.props.text['conociendo-enfasis-6']}</span> {this.props.text['conociendo-text-6']}</p>
            <p>{this.props.text['conociendo-text-7']}</p>
            <p><span className="enfasis-text">{this.props.text['conociendo-enfasis-8']}</span> {this.props.text['conociendo-text-8']}</p>
            <p>{this.props.text['conociendo-text-9']}</p>
            <p>{this.props.text['conociendo-text-10']} <span className="enfasis-text">{this.props.text['conociendo-enfasis-10']}</span></p>
            <p><span className="enfasis-text">{this.props.text['conociendo-enfasis-11']}</span> {this.props.text['conociendo-text-11']}</p>
            <p><span className="enfasis-text">{this.props.text['conociendo-enfasis-12']}</span> {this.props.text['conociendo-text-12']}</p>
            <p><span className="enfasis-text">{this.props.text['conociendo-enfasis-13']}</span> {this.props.text['conociendo-text-13']}</p>
            <p>{this.props.text['conociendo-text-14']}</p>
          </Col>
        </Row>
        <p id="info-note">* {this.props.text['informacion-nota']}</p>
      </section>
    );
  }
}
