import React, { Component } from 'react';
import { Row, Col, Divider } from 'antd';

export default class ConociendoTuEspacio extends Component {
  constructor(...props) {
    super(...props)
    this.state = {
      loading: false,
    };
  }
  async componentDidMount() {
    await this.props.location('documentacion');
  }

  render() {
    let text = this.props.text['documentacion'];
    return (
      <section id="informacion">
        <div id="page-title">{text['title']}</div>
        <Row className="text-informacion" justify="center"  style={{marginTop: '20px'}}>
          <Col span={20}>
            <p className="bold">{text['title-1']}</p>
            <p>{text['text-1']}</p>
            <p>{text['text-2']} <span className="enfasis-text">{text['enfasis-2']}</span> </p>
            <p>{text['text-3-1']} <a href="mailto:conare@mj.gov.br">conare@mj.gov.br</a>{text['text-3-2']} <a href="mailto:cadastro.conare@mj.gov.br">cadastro.conare@mj.gov.br</a></p>
            <p>{text['text-4']}</p>
            <p className="bold">{text['title-2']}</p>
            <p>{text['title-list-1']}</p>
              <ol>
                {text['list-1'].map((value, index) => {
                  return <li key={index}>{value}</li>
                })}
              </ol>
            <Divider />
            <p>{text['title-list-2']}</p>
              <ol>
                {text['list-2'].map((value, index) => {
                  return <li key={index}>{value}</li>
                })}
              </ol>
            <Divider orientation="center" style={{fontSize: '1.2rem'}}>{text['title-list-3']}</Divider>
              <ol>
                {text['list-3'].map((value, index) => {
                  return <li key={index}>{value}</li>
                })}
              </ol>
            <p>{text['text-5']}</p>
            <p><span className="enfasis-text">{text['enfasis-6']}</span> {text['text-6']}</p>
            <p className="bold" style={{fontSize: '1.4rem'}}>{text['title-3']}</p>
            <p id="page-title-2">{text['title-4']}</p>
            <p>{text['text-7']}</p>
            <p>{text['text-8']}</p>
            <p>{text['text-9']}</p>
            <Divider orientation="left" style={{fontSize: '1.2rem'}}>{text['title-5']}</Divider>
            <p><span className="enfasis-text">{text['enfasis-10']}</span> {text['text-10']}</p>
            <p><span className="enfasis-text">{text['enfasis-11']}</span> {text['text-11']}</p>
            <p><span className="enfasis-text">{text['enfasis-12']}</span> {text['text-12']}</p>
            <p><span className="enfasis-text">{text['enfasis-13']}</span> {text['text-13']}</p>
            <p><span className="enfasis-text">{text['enfasis-14']}</span> {text['text-14']}</p>
            <p>{text['text-15']}</p>
            <p><strong>{text['title-list-4']}</strong></p>
            <ol>
              {text['list-4'].map((value, index) => {
                  return <li key={index}>{value}</li>
               })}
            </ol>
            <p>{text['text-16']}</p>
            <p id="page-title-3">{text['title-6']}</p>
            <p>{text['text-17']}</p>
            <p>{text['text-18']}</p>
            <p><strong>{text['title-7']}</strong></p>
            <p><span className="enfasis-text">{text['enfasis-19']}</span> {text['text-19']}</p>
            <p><strong>{text['title-list-5']}</strong></p>
            <ul>
              {text['list-5'].map((value, index) => {
                  return <li key={index}>{value}</li>
               })}
            </ul>
            <p><strong>{text['title-list-6']}</strong></p>
            <ul>
              {text['list-6'].map((value, index) => {
                  return <li key={index}>{value}</li>
               })}
            </ul>
            <p>{text['text-20']}</p>
            <p><span className="enfasis-text">{text['enfasis-21']}</span>{text['text-21-1']} <a href="tel:08007260207">0800 726 0207</a> {text['text-21-2']}</p>
            <p><span className="enfasis-text">{text['enfasis-22']}</span> {text['text-22']}</p>
            <p><strong>{text['title-list-7']}</strong></p>
            <ul>
              {text['list-7'].map((value, index) => {
                  return <li key={index}>{value}</li>
               })}
            </ul>
            <p><strong>{text['enfasis-23']}</strong> {text['text-23']}</p>
            <p>{text['text-24']}</p>
            <p><strong>{text['enfasis-25']}</strong> {text['text-25']}</p>
            <p>{text['text-26']}</p>
            <p><strong>{text['title-list-8']}</strong></p>
            <ul>
              {text['list-8'].map((value, index) => {
                  return <li key={index}>{value}</li>
               })}
            </ul>
            <p style={{textAlign: 'center', fontStyle: 'italic'}}>{text['text-27']}</p>
            <p><strong>{text['enfasis-28']}</strong> {text['text-28']}</p>
            <p><strong>{text['title-list-9']}</strong></p>
            <ul>
              {text['list-9'].map((value, index) => {
                  return <li key={index}>{value}</li>
               })}
            </ul>
            <p>{text['text-29']}</p>
          </Col>
        </Row>
        <p id="info-note">* {this.props.text['informacion-nota']}</p>
      </section>
    );
  }
}