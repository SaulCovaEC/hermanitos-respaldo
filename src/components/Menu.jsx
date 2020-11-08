import React, { Component } from 'react';
import { Row, Col, Menu, Drawer, Layout, Button, Dropdown } from 'antd';
import { Link } from 'react-router-dom';
import { DownOutlined, GlobalOutlined, FacebookOutlined, InstagramOutlined, WhatsAppOutlined, LinkedinOutlined, PhoneOutlined, CaretDownFilled } from '@ant-design/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

const { Header } = Layout;
const { SubMenu } = Menu;

export default class NavMenu extends Component {
  constructor(...props) {
    super(...props)
    this.state = {
      current: this.props.location,
      visible: false,
    };
  }

  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  async componentDidMount() {
    await this.setState({
      current: this.props.location
    })
  }

  handleClick = e => {
    this.setState({
      current: e.key,
      visible: false,
    });
    this.props.updateLocation(e.key);
  };

  updateLang = e => {
    this.props.changeLang(e.key);
  };
  menu = () => {

  }

  render() {
    let text = this.props.text['nav-menu'];
    let menu = (<Menu
      mode="horizontal"
      className="navmenu"
      onClick={this.handleClick}
      selectedKeys={[this.props.location]}
    >
      {text.map((value, key) => {
          return (value['submenu']
            ? <SubMenu key={key} title={<span className="submenu">{value['label']} <CaretDownFilled /></span>}>
              {value['submenu'].map((subvalue) => {
                return <Menu.Item key={subvalue['key']}><Link to={subvalue['link']}>{subvalue['label']}</Link></Menu.Item>
              })}
            </SubMenu>
            : <Menu.Item key={value['key']}><Link to={value['link']}>{value['label']}</Link></Menu.Item>
          )
        })
      }
    </Menu>);

    let menuLang = (<Menu
        mode="vertical"
        className="idioma"
        onClick={this.updateLang}
        selectedKeys={[this.props.lang]}
      >
        <Menu.Item key="es"><Button type="link" className="btn-lang" id="es"></Button></Menu.Item>
        <Menu.Item key="pt"><Button type="link" className="btn-lang" id="pt"></Button></Menu.Item>
        <Menu.Item key="en"><Button type="link" className="btn-lang" id="en"></Button></Menu.Item>
      </Menu>
    );

    let menuResponsive = (<Menu
      mode="vertical"
      className="navmenu"
      onClick={this.handleClick}
      selectedKeys={[this.props.location]}
    >
      {text.map((value, key) => {
          return (value['submenu']
            ? <SubMenu key={key} title={<span className="submenu">{value['label']}</span>}>
              {value['submenu'].map((subvalue) => {
                return <Menu.Item key={subvalue['key']}><Link to={subvalue['link']}>{subvalue['label']}</Link></Menu.Item>
              })}
            </SubMenu>
            : <Menu.Item key={value['key']}><Link to={value['link']}>{value['label']}</Link></Menu.Item>
          )
        })
      }
    </Menu>);

    return (
      <Header id="header-section" className={(window.location.pathname === '/login') ? 'oculto' : ''}>
        <Row id="nav-menu" align="middle">
          <Col xs={24} sm={24} md={24} lg={4} xl={4} className="logo">
            <div className="logo-img" />
          </Col>
          <Col xs={0} sm={0} md={0} lg={15} xl={15}>
            {menu}
          </Col>
          <Col xs={0} sm={0} md={0} lg={5} xl={5} id="lang-menu">
            <div id="dropdown-lang">  
              <Dropdown overlay={menuLang} placement="bottomRight" trigger={['click']}>
                <Button>
                  <span id={[this.props.lang]} className="btn-lang"></span> <FontAwesomeIcon icon={faChevronDown}/>
                </Button>
              </Dropdown>
            </div>
          </Col>
          <Col xs={24} sm={24} md={24} lg={0} xl={0}>
            <Button type="primary" id="menu-show" onClick={this.showDrawer}>
              Menu
            </Button>
            <Drawer
              title="Menu"
              placement="right"
              closable={false}
              onClose={this.onClose}
              visible={this.state.visible}
            >
              {menuResponsive}
              </Drawer>
            </Col>
        </Row>
      </Header>
    );
  }
}
