import React, { Component } from 'react';
import { Row, Col, Divider, Modal, Card } from 'antd';
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

  masInfo = () => {
    return (this.props.lang === 'es') ? `Mas informacion` : `Mais informação`;
  }

  render() {
    return (
      <section id="home">
        <Slider />
        <div className="proyecto">
          <Divider className="title-section">{(this.props.lang === 'es') ? `Conozca el proyecto` : `Conheça o projeto`}</Divider>
          <Row justify="space-around" align="middle">
            <Col span={11}>
            <p className="text-important">{(this.props.lang === 'es') ? `Estamos aquí para acoger e integrar a nuestros hermanos venezolanos en Manaos, contribuyendo a su desarrollo y mejora de la calidad de vida.
            Traemos informaciones, servicios de ciudadanía, noticias y conectamos oportunidades para quien busca trabajar y para quien busca un perfil profesional calificado.` : `Estamos aqui para acolher e integrar nossos irmãos venezuelanos em Manaus, contribuindo para o desenvolvimento e melhoria da qualidade de vida.
                         Trazemos informações, serviços de cidadania, notícias e conectamos oportunidades para quem quer trabalhar e para quem procura um perfil profissional qualificado.`}</p>
            <p className="text-enfasis">{(this.props.lang === 'es') ? `¡Bienvenido a hermanito!` : `Bem-vindo ao hemanito!`}</p>
            </Col>
            <Col span={11}>
            <iframe width="580" title="Video Bienvenida" height="320" src="https://www.youtube.com/embed/7B3GoEzFSX0" frameBorder="0" allowFullScreen/>
            </Col>
          </Row>
        </div>
        <div className="oportunidades">
          <Row justify="space-around" align="middle">
            <Col span={12} className="registrar-curriculo">
              <p className="title">{(this.props.lang === 'es') ? `Buscando Oportunidad` : `Procurando Oportunidade`}</p>
              <p className="subtitle">{(this.props.lang === 'es') ? `Registra tu curriculo` : `Registre seu currículo`}</p>
              <button className="btn-icon btn-registrar-curriculo" onClick={this.registrarCurriculo}>
                <FontAwesomeIcon icon={faAddressCard} className="front-icon" fixedWidth/>
                <FontAwesomeIcon icon={faAddressCard} className="back-icon" fixedWidth/>
              </button>
            </Col>
            <Col span={12} className="registrar-empleo">
              <p className="title">{(this.props.lang === 'es') ? `Encontrar Profesionales` : `Encontre Profissionais`}</p>
              <p className="subtitle">{(this.props.lang === 'es') ? `Solicitar indicaciones` : `Solicitar instruções`}</p>
              <button className="btn-icon btn-registrar-empleo" onClick={this.registrarEmpleo}>
                <FontAwesomeIcon icon={faUserGraduate} className="front-icon" fixedWidth/>
                <FontAwesomeIcon icon={faUserGraduate} className="back-icon" fixedWidth/>
              </button>
            </Col>
          </Row>
        </div>
        <div className="informacion">
          <Divider orientation="left">
          {(this.props.lang === 'es') ? `Informacion importante` : `Informação importante`}
          </Divider>
          <Row>
            <Col className="gutter-row" span={8}>
              <div className="card-info">
              <Card
                hoverable
                cover={<img alt="Conociendo tu espacio" src="./img/component/conociendo-tu-espacio.jpg" />}
                actions={[
                  <Link to={(this.props.lang === 'es') ? `/conociendo-tu-espacio` : `/conhecendo-seu-espaco`}>{this.masInfo()}</Link>
                ]}
              >
                <Meta title={(this.props.lang === 'es') ? `CONOCIENDO TU ESPACIO` : `CONHECENDO O SEU ESPAÇO`} description={(this.props.lang === 'es') ? `Acabo de llegar a un lugar nuevo? ¡Información para ayudarlo a situarse y adaptarse!` : `Acabei de chegar em um novo lugar? Informações para ajudá-lo a se posicionar e se adaptar!`} />
              </Card>
              </div>
            </Col>
            <Col className="gutter-row" span={8}>
              <div className="card-info">
              <Card
                hoverable
                cover={<img alt="Cultura y convivencia" src="./img/component/cultura-y-convivencia.jpg" />}
                actions={[
                  <Link to={(this.props.lang === 'es') ? `/cultura-y-convivencia` : `/cultura-e-convivencia`}>{this.masInfo()}</Link>
                ]}
              >
                <Meta title={(this.props.lang === 'es') ? `CULTURA Y CONVIVENCIA` : `CULTURA E CONVIVÊNCIA`} description={(this.props.lang === 'es') ? `Un nuevo país tiene normas y culturas diferentes a las suyas. Comprende aquí un poco sobre Brasil.` : `Um novo país tem normas e culturas diferentes das suas. Entenda aqui um pouco sobre o Brasil.` } />
              </Card>
              </div>
            </Col>
            <Col className="gutter-row" span={8}>
              <div className="card-info">
              <Card
                hoverable
                cover={<img alt="Documentacion" src="./img/component/documentacion.jpg" />}
                actions={[
                  <Link to={(this.props.lang === 'es') ? `/documentacion` : `/documentacao`}>{this.masInfo()}</Link>
                ]}
              >
                <Meta title={(this.props.lang === 'es') ? `DOCUMENTACIÓN` : `DOCUMENTAÇÃO`} description={(this.props.lang === 'es') ? `Documentación requerida para vivir en Brasil. Lo que necesitas saber para vivir legalmente.` : `Documentação necessária para morar no Brasil. O que você precisa saber para viver legalmente.`} />
              </Card>
              </div>
            </Col>
            <Col className="gutter-row" span={8}>
              <div className="card-info">
              <Card
                hoverable
                cover={<img alt="Trabajo" src="./img/component/trabajo.jpg" />}
                actions={[
                  <Link to={(this.props.lang === 'es') ? `/trabajo` : `/trabalho`}>{this.masInfo()}</Link>
                ]}
              >
                <Meta title={(this.props.lang === 'es') ? `TRABAJO` : `TRABALHO`} description={(this.props.lang === 'es') ? `El trabajo es esencial para su mantenimiento en Brasil. Consejos sobre cómo buscar oportunidades e ingresar al mercado laboral.` : `O trabalho é essencial para sua manutenção no Brasil. Dicas sobre como procurar oportunidades e entrar no mercado de trabalho.`} />
              </Card>
              </div>
            </Col>
            <Col className="gutter-row" span={8}>
              <div className="card-info">
              <Card
                hoverable
                cover={<img alt="Salud" src="./img/component/salud.jpg" />}
                actions={[
                  <Link to={(this.props.lang === 'es') ? `/salud` : `/saude`}>{this.masInfo()}</Link>
                ]}
              >
                <Meta title={(this.props.lang === 'es') ? `SALUD` : `SAÚDE`} description={(this.props.lang === 'es') ? `El Sistema de Salud de Brasil es gratuito, pero necesita la tarjeta SUS para acceder a los servicios.` : `O sistema de saúde brasileiro é gratuito, mas você precisa do cartão SUS para acessar os serviços.`} />
              </Card>
              </div>
            </Col>
            <Col className="gutter-row" span={8}>
              <div className="card-info">
              <Card
                hoverable
                cover={<img alt="Educacion" src="./img/component/educacion.jpg" />}
                actions={[
                  <Link to={(this.props.lang === 'es') ? `/educacion` : `/educacao`}>{this.masInfo()}</Link>
                ]}
              >
                <Meta title={(this.props.lang === 'es') ? `EDUCACIÓN` : `EDUCAÇÃO`} description={(this.props.lang === 'es') ? `La educación en Brasil es un derecho, incluso para los inmigrantes. Importante saber los lugares y el período de registro.` : `A educação no Brasil é um direito, mesmo para imigrantes. Importante conhecer os locais e o período de inscrição.`} />
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
