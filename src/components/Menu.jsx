import React, { Component } from 'react';
import { Row, Col, Menu, Layout, Button } from 'antd';
import { Link } from 'react-router-dom';
import { FacebookOutlined, InstagramOutlined, WhatsAppOutlined, LinkedinOutlined, PhoneOutlined } from '@ant-design/icons';

const { Header } = Layout;
const { SubMenu } = Menu;

export default class NavMenu extends Component {
  constructor(...props) {
    super(...props)
    this.state = {
      current: this.props.location
    };
  }

  async componentDidMount() {
    await this.setState({
      current: this.props.location
    })
  }

  onCollapse = collapsed => {
    this.setState({ collapsed });
  };

  handleClick = e => {
    this.setState({
      current: e.key,
    });
    this.props.updateLocation(e.key);
  };

  updateLang = e => {
    this.props.changeLang(e.key);
  };

  render() {
    return (
      <Header id="header-section" className={(window.location.pathname === '/login') ? 'oculto' : ''}>

            <div id="nav-menu">
                  <div className="logo">
                    <div className="logo-img" />
                  </div>
                  <Menu
                    mode="horizontal"
                    className="navmenu"
                    onClick={this.handleClick}
                    selectedKeys={[this.props.location]}
                  >
                    <Menu.Item key="inicio"><Link to="/">Inicio</Link></Menu.Item>
                    <SubMenu title={(this.props.lang === 'es') ?'Informacion importante' : 'Informação importante'}>
                      <Menu.Item key="conhecendo-seu-espaco">
                        <Link to={(this.props.lang === 'es') ? `/conociendo-tu-espacio` : `/conhecendo-seu-espaco`}>{(this.props.lang === 'es') ? `Conociendo tu espacio` : `Conhecendo seu espaço`}</Link>
                      </Menu.Item>
                      <Menu.Item key="cultura-e-convivencia">
                        <Link to={(this.props.lang === 'es') ? `/cultura-y-convivencia` : `/cultura-e-convivencia`}>{(this.props.lang === 'es') ? `Cultura y convivencia` : `Cultura e convivência`}</Link>
                      </Menu.Item>
                      <Menu.Item key="documentacao">
                        <Link to={(this.props.lang === 'es') ? `/documentacion` : `/documentacao`}>{(this.props.lang === 'es') ? `Documentacion` : `Documentação`}</Link>
                      </Menu.Item>
                      <Menu.Item key="trabalho">
                        <Link to={(this.props.lang === 'es') ? `/trabajo` : `/trabalho`}>{(this.props.lang === 'es') ? `Trabajo` : `Trabalho`}</Link>
                      </Menu.Item>
                      <Menu.Item key="saude">
                        <Link to={(this.props.lang === 'es') ? `/salud` : `/saude`}>{(this.props.lang === 'es') ? `Salud` : `Saude`}</Link>
                      </Menu.Item>
                      <Menu.Item key="educacao">
                        <Link to={(this.props.lang === 'es') ? `/educacion` : `/educacao`}>{(this.props.lang === 'es') ? `Educacion` : `Educação`}</Link>
                      </Menu.Item>
                    </SubMenu>
                    <Menu.Item key="projecto-hermanitos"><Link to={(this.props.lang === 'es') ? '/proyecto-hermanitos' : '/projecto-hermanitos'}>{(this.props.lang === 'es') ? 'Proyecto Hermanitos' : 'Projecto Hermanitos'}</Link></Menu.Item>
                    <Menu.Item key="galeria"><Link to="/galeria">Galeria</Link></Menu.Item>
                    <Menu.Item key="ofrecer-emprego"><Link to={(this.props.lang === 'es') ? '/ofrecer-empleo' : '/ofrecer-emprego'}>{(this.props.lang === 'es') ?'Ofrecer empleo' : 'Ofrecer emprego'}</Link></Menu.Item>
                    <Menu.Item key="contato"><Link to={(this.props.lang === 'es') ? '/contacto' : '/contato'}>{(this.props.lang === 'es') ?'Contacto' : 'Contato'}</Link></Menu.Item>
                  </Menu>
                  <Menu
                    mode="horizontal"
                    className="idioma"
                    onClick={this.updateLang}
                    selectedKeys={[this.props.lang]}
                  >
                    <Menu.Item key="es"><Button type="link" className="btn-lang" id="es"></Button></Menu.Item>
                    <Menu.Item key="pt"><Button type="link" className="btn-lang" id="pt"></Button></Menu.Item>
                  </Menu>
            </div>
            <div className="social-bar">
              <Menu
                mode="horizontal"
                className="redes-sociales"
              >
                <Menu.Item key="1"><a href="https://www.facebook.com/EspacoHermanitos/"><FacebookOutlined className="icon-social"/></a></Menu.Item>
                <Menu.Item key="2"><a href="https://www.instagram.com/espaco_hermanitos/"><InstagramOutlined className="icon-social"/></a></Menu.Item>
                <Menu.Item key="3"><a href="https://api.whatsapp.com/send?phone=5592994315431"><WhatsAppOutlined className="icon-social"/></a></Menu.Item>
                <Menu.Item key="4"><a href="https://www.linkedin.com/company/espacohermanitos/about/"><LinkedinOutlined className="icon-social"/></a></Menu.Item>
                <Menu.Item key="5"><a href="tel:+5592994315431"><PhoneOutlined className="icon-social"/></a></Menu.Item>
              </Menu>
            </div>
      </Header>
    );
  }
}
