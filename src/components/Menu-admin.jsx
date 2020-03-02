import React, { Component } from 'react';
import { Menu, Layout } from 'antd';
import { Link } from 'react-router-dom';
import Logo from './img/component/logo.png';

const { Sider } = Layout;

const itemsMenu = [
  {title: 'Inicio', ikey: 1, icon: 'home', url: '/'},
  {title: 'Curriculos', ikey: 2, icon: 'team', url: '/curriculos'},
  {title: 'Cadastrar curriculo', ikey: 3, icon: 'user-add', url: '/cadastrar-curriculo'}
]
const iLength = itemsMenu.length;

export default class AdminMenu extends Component {
  constructor(...props) {
    super(...props);
    this.state = {
      collapsed: false
    }
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

  render() {
    return (
      <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
        <div className="logo"><img src={Logo} alt="Astec"/></div>
        <Menu theme="dark" mode="inline">
          {this.navItems()}
        </Menu>
      </Sider>
    );
  }
}
