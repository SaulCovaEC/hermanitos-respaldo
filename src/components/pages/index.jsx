import React, { Component } from 'react';
import { Row, Col, Divider, Modal, Card } from 'antd';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard, faUserGraduate, faAngleRight } from '@fortawesome/free-solid-svg-icons';

import Slider from './Slider';

const { confirm } = Modal;
const { Meta } = Card;


export default class Home extends Component {
  state = {
    loading: false,
  };

  componentDidMount() {
  }

  registrarCurriculo = () => {
    confirm({
      title: 'Registrar curriculo',
      content: 'Some descriptions',
      okText: 'Enviar curriculo',
      cancelText: 'Cancelar'
    });
  }

  registrarEmpleo = () => {
    confirm({
      title: 'Registrar oferta de empleo',
      content: 'Some descriptions',
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

  render() {
    return (
      <section className="home">
        <Slider />
        <div className="proyecto">
          <Divider className="title-section">Conozca el proyecto</Divider>
          <Row justify="space-around" align="middle">
            <Col span={11}>
            <p className="text-important">Estamos aquí para acoger e integrar a nuestros hermanos venezolanos en Manaos, contribuyendo a su desarrollo y mejora de la calidad de vida.
            Traemos informaciones, servicios de ciudadanía, noticias y conectamos oportunidades para quien busca trabajar y para quien busca un perfil profesional calificado.</p>
            <p className="text-enfasis">¡Bienvenido a hermanito!</p>
            </Col>
            <Col span={11}>
            <iframe width="580" height="320" src="https://www.youtube.com/embed/7B3GoEzFSX0" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </Col>
          </Row>
        </div>
        <div className="oportunidades">
          <Row justify="space-around" align="middle">
            <Col span={12} className="registrar-curriculo">
              <p className="title">Buscando Oportunidad</p>
              <p className="subtitle">Registra tu curriculo</p>
              <button className="btn-icon btn-registrar-curriculo" onClick={this.registrarCurriculo}>
                <FontAwesomeIcon icon={faAddressCard} className="front-icon" fixedWidth/>
                <FontAwesomeIcon icon={faAddressCard} className="back-icon" fixedWidth/>
              </button>
            </Col>
            <Col span={12} className="registrar-empleo">
              <p className="title">Encontrar Profesionales</p>
              <p className="subtitle">Solicitar indicaciones</p>
              <button className="btn-icon btn-registrar-empleo" onClick={this.registrarEmpleo}>
                <FontAwesomeIcon icon={faUserGraduate} className="front-icon" fixedWidth/>
                <FontAwesomeIcon icon={faUserGraduate} className="back-icon" fixedWidth/>
              </button>
            </Col>
          </Row>
        </div>
        <div className="informacion">
          <Divider orientation="left">
            Informacion importante
          </Divider>
          <Row>
            <Col className="gutter-row" span={8}>
              <div className="card-info">
              <Card
                hoverable
                cover={<img alt="Conociendo tu espacio" src="./img/component/conociendo-tu-espacio.jpg" />}
                actions={[
                  <Link to="./login">Mas informacion<FontAwesomeIcon icon={faAngleRight} className="card-icon" fixedWidth/></Link>
                ]}
              >
                <Meta title="CONOCIENDO TU ESPACIO" description="Acabo de llegar a un lugar nuevo? ¡Información para ayudarlo a situarse y adaptarse!" />
              </Card>
              </div>
            </Col>
            <Col className="gutter-row" span={8}>
              <div className="card-info">
              <Card
                hoverable
                cover={<img alt="Cultura y convivencia" src="./img/component/cultura-y-convivencia.jpg" />}
                actions={[
                  <Link to="./login">Mas informacion<FontAwesomeIcon icon={faAngleRight} className="card-icon" fixedWidth/></Link>
                ]}
              >
                <Meta title="CULTURA Y CONVIVENCIA" description="Un nuevo país tiene normas y culturas diferentes a las suyas. Comprende aquí un poco sobre Brasil." />
              </Card>
              </div>
            </Col>
            <Col className="gutter-row" span={8}>
              <div className="card-info">
              <Card
                hoverable
                cover={<img alt="Documentacion" src="./img/component/documentacion.jpg" />}
                actions={[
                  <Link to="./login">Mas informacion<FontAwesomeIcon icon={faAngleRight} className="card-icon" fixedWidth/></Link>
                ]}
              >
                <Meta title="DOCUMENTACIÓN" description="Documentación requerida para vivir en Brasil. Lo que necesitas saber para vivir legalmente." />
              </Card>
              </div>
            </Col>
            <Col className="gutter-row" span={8}>
              <div className="card-info">
              <Card
                hoverable
                cover={<img alt="Trabajo" src="./img/component/trabajo.jpg" />}
                actions={[
                  <Link to="./login">Mas informacion<FontAwesomeIcon icon={faAngleRight} className="card-icon" fixedWidth/></Link>
                ]}
              >
                <Meta title="TRABAJO" description="El trabajo es esencial para su mantenimiento en Brasil. Consejos sobre cómo buscar oportunidades e ingresar al mercado laboral." />
              </Card>
              </div>
            </Col>
            <Col className="gutter-row" span={8}>
              <div className="card-info">
              <Card
                hoverable
                cover={<img alt="Salud" src="./img/component/salud.jpg" />}
                actions={[
                  <Link to="./login">Mas informacion<FontAwesomeIcon icon={faAngleRight} className="card-icon" fixedWidth/></Link>
                ]}
              >
                <Meta title="SALUD" description="El Sistema de Salud de Brasil es gratuito, pero necesita la tarjeta SUS para acceder a los servicios." />
              </Card>
              </div>
            </Col>
            <Col className="gutter-row" span={8}>
              <div className="card-info">
              <Card
                hoverable
                cover={<img alt="Educacion" src="./img/component/educacion.jpg" />}
                actions={[
                  <Link to="./login">Mas informacion<FontAwesomeIcon icon={faAngleRight} className="card-icon" fixedWidth/></Link>
                ]}
              >
                <Meta title="EDUCACIÓN" description="La educación en Brasil es un derecho, incluso para los inmigrantes. Importante saber los lugares y el período de registro." />
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
          <iframe id="mapa" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.0256844895443!2d-60.01512628555877!3d-3.0878183411144224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x926c1bb6e6e04aa3%3A0xaa1055237a454ef9!2sEspa%C3%A7o%20Hermanitos!5e0!3m2!1ses-419!2sbr!4v1583271700375!5m2!1ses-419!2sbr"></iframe>
        </div>
      </section>
    );
  }
}
