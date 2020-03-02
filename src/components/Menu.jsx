import React, { Component } from 'react';
import { Menu, Layout, Button } from 'antd';
import { Link } from 'react-router-dom';
import { FacebookOutlined, InstagramOutlined, WhatsAppOutlined, LinkedinOutlined, PhoneOutlined, MailOutlined } from '@ant-design/icons';

const { Header } = Layout;

const itemsMenu = [
  {title: 'Inicio', ikey: 1, icon: 'home', url: '/'},
  {title: 'Curriculos', ikey: 2, icon: 'team', url: '/curriculos'},
  {title: 'Cadastrar curriculo', ikey: 3, icon: 'user-add', url: '/cadastrar-curriculo'}
]
const iLength = itemsMenu.length;

export default class NavMenu extends Component {
  state = {
    lang: 'es',
    collapsed: false
  }
  

  onCollapse = collapsed => {
    this.setState({ collapsed });
  };

  navItems = () => {
    let menu = [];
    var patn = window.location.pathname;
    
    for (let i = 0; i < iLength; i++) {
      menu.push(<Menu.Item 
        key={itemsMenu[i].ikey} className={(patn === itemsMenu[i].url) ? 'ant-menu-item-selected' : ''}>
        <Link to={itemsMenu[i].url}>
          <span>{itemsMenu[i].title}</span>
        </Link>
      </Menu.Item>)
      
    }
    return menu;
  }

  changeLang = (e) => {
    let btnLang = e.target.id;
    if(btnLang !== this.state.lang){
      this.setState({
        lang: btnLang
      })
    }
  }


  render() {
    return (
      <section id="header-section">
      {window.location.pathname !== '/login' &&
        <Layout className="layout">
          <Header>
            <div className="logo">
              <div className="logo-img" />
            </div>
            <div className="top-bar">
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
              <Menu
                mode="horizontal"
                className="idioma"
              >
                <Menu.Item key="1"><Button type="link" className={(this.state.lang === 'es') ? "es btn-lang activo" : "es btn-lang"} id="es" onClick={this.changeLang}><span>ES</span><img src="./img/component/venezuela.svg" alt="Español"/></Button></Menu.Item>
                <Menu.Item key="2"><Button type="link" className={(this.state.lang === 'pt') ? "pt btn-lang activo" : "pt btn-lang"} id="pt" onClick={this.changeLang}><span>PT</span><img src="./img/component/brasil.svg" alt="Portugues"/></Button></Menu.Item>
              </Menu>
            </div>
            <div className="nav-menu">
              <Menu
                mode="horizontal"
                className="navmenu"
              >
                <Menu.Item key="1"><a href="/">Inicio</a></Menu.Item>
                <Menu.Item key="2"><a href="/informacion">Informacion</a></Menu.Item>
                <Menu.Item key="3"><a href="/proyecto-hermanito">Proyecto Hermanitos</a></Menu.Item>
                <Menu.Item key="4"><a href="/galeria">Galeria</a></Menu.Item>
                <Menu.Item key="5"><a href="/ofrecer-empleo">Ofrecer empleo</a></Menu.Item>
                <Menu.Item key="6"><a href="/contacto">Contacto</a></Menu.Item>
              </Menu>
            </div>
          </Header>
        </Layout>
        }
      </section>
    );
  }
}
