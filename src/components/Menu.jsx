import React, { Component } from 'react';
import { Row, Col, Menu, Drawer, Layout, Button, Dropdown, Divider } from 'antd';
import { Link } from 'react-router-dom';
import { CaretDownFilled } from '@ant-design/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faWhatsapp, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'

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

    let menuLangResponsive = (<Menu
    mode="vertical"
    className="idioma-responsive"
    onClick={this.updateLang}
    selectedKeys={[this.props.lang]}
      >
      <Menu.Item key="es"><Button type="link" className="btn-lang" id="es"></Button></Menu.Item>
      <Menu.Item key="pt"><Button type="link" className="btn-lang" id="pt"></Button></Menu.Item>
      <Menu.Item key="en"><Button type="link" className="btn-lang" id="en"></Button></Menu.Item>
    </Menu>);

    return (
      <Header id="header-section" className={(window.location.pathname === '/login') ? 'oculto' : ''}>
        <Row id="nav-menu" align="middle" justify="space-between">
          <Col xs={24} sm={24} md={24} lg={4} xl={4} className="logo">
            <div className="logo-img" />
          </Col>
          <Col xs={0} sm={0} md={0} lg={15} xl={15}>
            {menu}
          </Col>
          <Col xs={0} sm={0} md={0} lg={2} xl={2} id="lang-menu">
            <div id="dropdown-lang">  
              <Dropdown overlay={menuLang} trigger={['click']} overlayClassName="dropdown-content">
                <Button>
                  <span id={[this.props.lang]} className="btn-lang"></span> <FontAwesomeIcon icon={faChevronDown}/>
                </Button>
              </Dropdown>
            </div>
          </Col>
        </Row>
        <Row id="responsive-submenu" align="middle" justify="end">
          <Col xs={0} sm={0} md={0} lg={24} xl={24} id="menu-social">
            <Menu
              mode="horizontal"
              className="redes-sociales"
            >
              <Menu.Item key="1"><a href={this.props.redes['facebook']}><FontAwesomeIcon icon={faFacebook} className="icon-social"/></a></Menu.Item>
              <Menu.Item key="2"><a href={this.props.redes['instagram']}><FontAwesomeIcon icon={faInstagram} className="icon-social"/></a></Menu.Item>
              <Menu.Item key="3"><a href={this.props.redes['whatsapp'][0]}><FontAwesomeIcon icon={faWhatsapp} className="icon-social"/></a></Menu.Item>
              <Menu.Item key="4"><a href={this.props.redes['linkedin']}><FontAwesomeIcon icon={faLinkedin} className="icon-social"/></a></Menu.Item>
              <Menu.Item key="5"><a href={this.props.redes['tel'][0]}><FontAwesomeIcon icon={faPhone} className="icon-social"/></a></Menu.Item>
            </Menu>
          </Col>
          <Col xs={24} sm={24} md={24} lg={0} xl={0} id="col-responsive-menu">
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
              <section>
                {menuResponsive}
              </section>
              <Divider />
              <section>
                {menuLangResponsive}
              </section>
            </Drawer>
            </Col>
        </Row>
      </Header>
    );
  }
}
