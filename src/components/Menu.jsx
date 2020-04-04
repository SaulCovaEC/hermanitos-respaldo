import React, { Component } from 'react';
import { Row, Col, Menu, Drawer, Layout, Button } from 'antd';
import { Link } from 'react-router-dom';
import { FacebookOutlined, InstagramOutlined, WhatsAppOutlined, LinkedinOutlined, PhoneOutlined, CaretDownFilled } from '@ant-design/icons';


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

    return (
      <Header id="header-section" className={(window.location.pathname === '/login') ? 'oculto' : ''}>
        <Row id="nav-menu">
          <Col xs={24} sm={24} md={24} lg={4} xl={4} className="logo">
            <div className="logo-img" />
          </Col>
          <Col xs={0} sm={0} md={0} lg={15} xl={15}>
            {menu}
          </Col>
          <Col xs={0} sm={0} md={0} lg={5} xl={5}>
            <Menu
              mode="horizontal"
              className="idioma"
              onClick={this.updateLang}
              selectedKeys={[this.props.lang]}
            >
              <Menu.Item key="es"><Button type="link" className="btn-lang" id="es"></Button></Menu.Item>
              <Menu.Item key="pt"><Button type="link" className="btn-lang" id="pt"></Button></Menu.Item>
              <Menu.Item key="en"><Button type="link" className="btn-lang" id="en"></Button></Menu.Item>
            </Menu>
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
              {menu}
              </Drawer>
            </Col>
        </Row>
        <Row className="social-bar" justify="space-between">
          <Col xs={0} sm={0} md={0} lg={4} xl={4} className="logo">
            <div className="logo-img" />
          </Col>
          <Col xs={0} sm={0} md={24} lg={20} xl={20}>
            <Menu
              mode="horizontal"
              className="redes-sociales"
            >
              <Menu.Item key="1"><a href={this.props.redes['facebook']}><FacebookOutlined className="icon-social"/></a></Menu.Item>
              <Menu.Item key="2"><a href={this.props.redes['instagram']}><InstagramOutlined className="icon-social"/></a></Menu.Item>
              <Menu.Item key="3"><a href={this.props.redes['whatsapp'][0]}><WhatsAppOutlined className="icon-social"/></a></Menu.Item>
              <Menu.Item key="4"><a href={this.props.redes['linkedin']}><LinkedinOutlined className="icon-social"/></a></Menu.Item>
              <Menu.Item key="5"><a href={this.props.redes['tel'][0]}><PhoneOutlined className="icon-social"/></a></Menu.Item>
            </Menu>
          </Col>
        </Row>
      </Header>
    );
  }
}
