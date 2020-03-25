import React, { Component } from 'react';
import { Row, Col, Divider, Modal, Card, Form, Input } from 'antd';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard, faUserGraduate } from '@fortawesome/free-solid-svg-icons';

import Slider from './Slider';

const { confirm } = Modal;
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

  registrarCurriculo = () => {
    confirm({
      title: (this.props.lang === 'es') ? `Registra tu curriculo` : `Registre seu currículo`,
      content: (
        <Form>
          <Input name="nome" className="input-form" placeholder={(this.props.lang === 'es') ? `Nombre` : `Nome`}></Input>
        </Form>
        ),
      okText: 'Enviar curriculo',
      cancelText: 'Cancelar'
    });
  }

  registrarEmpleo = () => {
    confirm({
      title: 'Registrar oferta de empleo',
      content: (
        <Form></Form>
      ),
      okText: 'Enviar empleo',
      cancelText: 'Cancelar',
      onOk() {
        console.log('OK');
      },
      onCancel() {
        console.log('Cancel');
      },
    });
  }

  masInfo = () => {
    return (this.props.lang === 'es') ? `Mas informacion` : `Mais informação`;
  }

  render() {
    
    return (
      <section id="home">
        <Slider />
        <div className="proyecto">
          <Divider className="title-section">{this.props.text['home-title-1']}</Divider>
          <Row justify="space-around" align="middle">
            <Col lg={11} sm={24}>
            <p className="text-important">{this.props.text['home-text-1-1']}</p>
            <p className="text-enfasis">{this.props.text['home-text-1-2']}</p>
            </Col>
            <Col lg={11} sm={24}>
            <iframe width="580" title="Video Bienvenida" height="320" src="https://www.youtube.com/embed/7B3GoEzFSX0" frameBorder="0" allowFullScreen/>
            </Col>
          </Row>
        </div>
        <div className="oportunidades">
          <Row justify="space-around" align="middle">
            <Col lg={12} sm={24} className="registrar-curriculo">
              <p className="title">{this.props.text['home-title-2-1']}</p>
              <p className="subtitle">{this.props.text['home-text-2-1']}</p>
              <button className="btn-icon btn-registrar-curriculo" onClick={this.registrarCurriculo}>
                <FontAwesomeIcon icon={faAddressCard} className="front-icon" fixedWidth/>
                <FontAwesomeIcon icon={faAddressCard} className="back-icon" fixedWidth/>
              </button>
            </Col>
            <Col lg={12} sm={24} className="registrar-empleo">
              <p className="title">{this.props.text['home-title-2-2']}</p>
              <p className="subtitle">{this.props.text['home-text-2-2']}</p>
              <button className="btn-icon btn-registrar-empleo" onClick={this.registrarEmpleo}>
                <FontAwesomeIcon icon={faUserGraduate} className="front-icon" fixedWidth/>
                <FontAwesomeIcon icon={faUserGraduate} className="back-icon" fixedWidth/>
              </button>
            </Col>
          </Row>
        </div>
        <div className="informacion">
          <Divider orientation="left">
          {this.props.text['home-title-3']}
          </Divider>
          <Row>
            <Col className="gutter-row" lg={8} sm={24}>
              <div className="card-info">
              <Card
                hoverable
                cover={<img alt="Conociendo tu espacio" src="./img/component/conociendo-tu-espacio.jpg" />}
                actions={[
                  <Link to={this.props.text['home-grid-link-1']}>{this.masInfo()}</Link>
                ]}
              >
                <Meta title={this.props.text['home-grid-title-1']} description={this.props.text['home-grid-text-1']} />
              </Card>
              </div>
            </Col>
            <Col className="gutter-row" lg={8} sm={24}>
              <div className="card-info">
              <Card
                hoverable
                cover={<img alt="Cultura y convivencia" src="./img/component/cultura-y-convivencia.jpg" />}
                actions={[
                  <Link to={this.props.text['home-grid-link-2']}>{this.masInfo()}</Link>
                ]}
              >
                <Meta title={this.props.text['home-grid-title-2']} description={this.props.text['home-grid-text-2']} />
              </Card>
              </div>
            </Col>
            <Col className="gutter-row" lg={8} sm={24}>
              <div className="card-info">
              <Card
                hoverable
                cover={<img alt="Documentacion" src="./img/component/documentacion.jpg" />}
                actions={[
                  <Link to={this.props.text['home-grid-link-3']}>{this.masInfo()}</Link>
                ]}
              >
                <Meta title={this.props.text['home-grid-title-3']} description={this.props.text['home-grid-text-3']} />
              </Card>
              </div>
            </Col>
            <Col className="gutter-row" lg={8} sm={24}>
              <div className="card-info">
              <Card
                hoverable
                cover={<img alt="Trabajo" src="./img/component/trabajo.jpg" />}
                actions={[
                  <Link to={this.props.text['home-grid-link-4']}>{this.masInfo()}</Link>
                ]}
              >
                <Meta title={this.props.text['home-grid-title-4']} description={this.props.text['home-grid-text-4']} />
              </Card>
              </div>
            </Col>
            <Col className="gutter-row" lg={8} sm={24}>
              <div className="card-info">
              <Card
                hoverable
                cover={<img alt="Salud" src="./img/component/salud.jpg" />}
                actions={[
                  <Link to={this.props.text['home-grid-link-5']}>{this.masInfo()}</Link>
                ]}
              >
                <Meta title={this.props.text['home-grid-title-5']} description={this.props.text['home-grid-text-5']} />
              </Card>
              </div>
            </Col>
            <Col className="gutter-row" lg={8} sm={24}>
              <div className="card-info">
              <Card
                hoverable
                cover={<img alt="Educacion" src="./img/component/educacion.jpg" />}
                actions={[
                  <Link to={this.props.text['home-grid-link-6']}>{this.masInfo()}</Link>
                ]}
              >
                <Meta title={this.props.text['home-grid-title-6']} description={this.props.text['home-grid-text-6']} />
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
