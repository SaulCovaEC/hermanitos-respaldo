import React, { Component } from 'react';
import { Row, Col, Divider, Card } from 'antd';
import { Link } from "react-router-dom";

import CadastrarCurriculo from './CadastrarCurriculo';
import CadastrarVaga from './CadastrarVaga';

const { Meta } = Card;


export default class Home extends Component {
  constructor(...props) {
    super(...props)
    this.state = {
      loading: false,
      lang: this.props.lang
    };

  }

  componentDidMount() {
    this.props.location('inicio');
  }

  render() {
    let text = this.props.text['home'];
    
    return (
      <section id="home">
        <div className="proyecto">
          <Divider className="title-section">{text['title-1']}</Divider>
          <Row justify="space-around" align="middle">
            <Col xs={24} sm={24} md={24} lg={11} xl={11}>
              <p className="text-important">{text['text-1-1']}</p>
              <p className="text-enfasis">{text['text-1-2']}</p>
            </Col>
            <Col xs={24} sm={24} md={24} lg={11} xl={11}>
              <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/7t-SDl4ID5A" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </Col>
          </Row>
        </div>
        <div className="oportunidades">
          <Row justify="space-around" align="middle">
            <Col xs={24} sm={24} md={24} lg={12} xl={12} className="registrar-curriculo">
              <p className="title">{text['title-2-1']}</p>
              <p className="subtitle">{text['text-2-1']}</p>
              <CadastrarCurriculo text={this.props.text['form']}/>
            </Col>
            <Col xs={24} sm={24} md={24} lg={12} xl={12} className="registrar-empleo">
              <p className="title">{text['title-2-2']}</p>
              <p className="subtitle">{text['text-2-2']}</p>
              <CadastrarVaga text={this.props.text['form']}/>
            </Col>
          </Row>
        </div>
        <div className="informacion">
          <Divider orientation="left">
            {text['title-3']}
          </Divider>
          <Row>
            <Col className="gutter-row" xs={24} sm={24} md={24} lg={8} xl={8}>
              <div className="card-info">
              <Card
                hoverable
                cover={<img alt={text['grid-title-1']} src="./img/component/conociendo-tu-espacio.jpg" />}
                actions={[
                  <Link to={text['grid-link-1']}>{text['info']}</Link>
                ]}
              >
                <Meta title={text['grid-title-1']} description={text['grid-text-1']} />
              </Card>
              </div>
            </Col>
            <Col className="gutter-row" xs={24} sm={24} md={24} lg={8} xl={8}>
              <div className="card-info">
              <Card
                hoverable
                cover={<img alt={text['grid-title-2']} src="./img/component/cultura-y-convivencia.jpg" />}
                actions={[
                  <Link to={text['grid-link-2']}>{text['info']}</Link>
                ]}
              >
                <Meta title={text['grid-title-2']} description={text['grid-text-2']} />
              </Card>
              </div>
            </Col>
            <Col className="gutter-row" xs={24} sm={24} md={24} lg={8} xl={8}>
              <div className="card-info">
              <Card
                hoverable
                cover={<img alt={text['grid-title-3']} src="./img/component/documentacion.jpg" />}
                actions={[
                  <Link to={text['grid-link-3']}>{text['info']}</Link>
                ]}
              >
                <Meta title={text['grid-title-3']} description={text['grid-text-3']} />
              </Card>
              </div>
            </Col>
            <Col className="gutter-row" xs={24} sm={24} md={24} lg={8} xl={8}>
              <div className="card-info">
              <Card
                hoverable
                cover={<img alt={text['grid-link-4']} src="./img/component/trabajo.jpg" />}
                actions={[
                  <Link to={text['grid-link-4']}>{text['info']}</Link>
                ]}
              >
                <Meta title={text['grid-title-4']} description={text['grid-text-4']} />
              </Card>
              </div>
            </Col>
            <Col className="gutter-row" xs={24} sm={24} md={24} lg={8} xl={8}>
              <div className="card-info">
              <Card
                hoverable
                cover={<img alt={text['grid-link-5']} src="./img/component/salud.jpg" />}
                actions={[
                  <Link to={text['grid-link-5']}>{text['info']}</Link>
                ]}
              >
                <Meta title={text['grid-title-5']} description={text['grid-text-5']} />
              </Card>
              </div>
            </Col>
            <Col className="gutter-row" xs={24} sm={24} md={24} lg={8} xl={8}>
              <div className="card-info">
              <Card
                hoverable
                cover={<img alt={text['grid-link-6']} src="./img/component/educacion.jpg" />}
                actions={[
                  <Link to={text['grid-link-6']}>{text['info']}</Link>
                ]}
              >
                <Meta title={text['grid-title-6']} description={text['grid-text-6']} />
              </Card>
              </div>
            </Col>
          </Row>
        </div>
        <div className="media-video"></div>
        <div className="servicios"></div>
        <div className="donacion"></div>
        <div className="parceros"></div>
        <div className="map">
          <iframe id="mapa" title="Mapa" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.0256844895443!2d-60.01512628555877!3d-3.0878183411144224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x926c1bb6e6e04aa3%3A0xaa1055237a454ef9!2sEspa%C3%A7o%20Hermanitos!5e0!3m2!1ses-419!2sbr!4v1583271700375!5m2!1ses-419!2sbr"/>
        </div>
      </section>
    );
  }
}
