import React, { Component } from 'react';
import { Row, Col, Menu, Drawer, Layout, Button, Divider } from 'antd';
import { Link } from 'react-router-dom';
import { FacebookOutlined, InstagramOutlined, WhatsAppOutlined, LinkedinOutlined, PhoneOutlined } from '@ant-design/icons';


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
    });
    this.props.updateLocation(e.key);
  };

  updateLang = e => {
    this.props.changeLang(e.key);
  };

  render() {
    return (
      <Header id="header-section" className={(window.location.pathname === '/login') ? 'oculto' : ''}>
        <Row id="nav-menu">
          <Col xs={24} sm={24} md={24} lg={4} xl={4} className="logo">
            <div className="logo-img" />
          </Col>
          <Col xs={0} sm={0} md={0} lg={15} xl={15}>
            <Menu
              mode="horizontal"
              className="navmenu"
              onClick={this.handleClick}
              selectedKeys={[this.props.location]}
            >
              <Menu.Item key="inicio"><Link to={this.props.text['menu-1']['link']}>{this.props.text['menu-1']['label']}</Link></Menu.Item>
              <SubMenu title={this.props.text['menu-2']['label']}>
                <Menu.Item key="conhecendo-seu-espaco">
                  <Link to={this.props.text['menu-2-1']['link']}>{this.props.text['menu-2-1']['label']}</Link>
                </Menu.Item>
                <Menu.Item key="cultura-e-convivencia">
                  <Link to={this.props.text['menu-2-2']['link']}>{this.props.text['menu-2-2']['label']}</Link>
                </Menu.Item>
                <Menu.Item key="documentacao">
                  <Link to={this.props.text['menu-2-3']['link']}>{this.props.text['menu-2-3']['label']}</Link>
                </Menu.Item>
                <Menu.Item key="trabalho">
                  <Link to={this.props.text['menu-2-4']['link']}>{this.props.text['menu-2-4']['label']}</Link>
                </Menu.Item>
                <Menu.Item key="saude">
                  <Link to={this.props.text['menu-2-5']['link']}>{this.props.text['menu-2-5']['label']}</Link>
                </Menu.Item>
                <Menu.Item key="educacao">
                  <Link to={this.props.text['menu-2-6']['link']}>{this.props.text['menu-2-6']['label']}</Link>
                </Menu.Item>
              </SubMenu>
              <Menu.Item key="projecto-hermanitos"><Link to={this.props.text['menu-3']['link']}>{this.props.text['menu-3']['label']}</Link></Menu.Item>
              <Menu.Item key="galeria"><Link to={this.props.text['menu-4']['link']}>{this.props.text['menu-4']['label']}</Link></Menu.Item>
              <Menu.Item key="ofrecer-emprego"><Link to={this.props.text['menu-5']['link']}>{this.props.text['menu-5']['label']}</Link></Menu.Item>
              <Menu.Item key="contato"><Link to={this.props.text['menu-6']['link']}>{this.props.text['menu-6']['label']}</Link></Menu.Item>
            </Menu>
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
              <Menu
                  mode="vertical"
                  className="navmenu"
                  onClick={this.handleClick}
                  selectedKeys={[this.props.location]}
                >
                  <Menu.Item key="inicio"><Link to={this.props.text['menu-1']['link']}>{this.props.text['menu-1']['label']}</Link></Menu.Item>
                  <SubMenu title={this.props.text['menu-2']['label']}>
                    <Menu.Item key="conhecendo-seu-espaco">
                      <Link to={this.props.text['menu-2-1']['link']}>{this.props.text['menu-2-1']['label']}</Link>
                    </Menu.Item>
                    <Menu.Item key="cultura-e-convivencia">
                      <Link to={this.props.text['menu-2-2']['link']}>{this.props.text['menu-2-2']['label']}</Link>
                    </Menu.Item>
                    <Menu.Item key="documentacao">
                      <Link to={this.props.text['menu-2-3']['link']}>{this.props.text['menu-2-3']['label']}</Link>
                    </Menu.Item>
                    <Menu.Item key="trabalho">
                      <Link to={this.props.text['menu-2-4']['link']}>{this.props.text['menu-2-4']['label']}</Link>
                    </Menu.Item>
                    <Menu.Item key="saude">
                      <Link to={this.props.text['menu-2-5']['link']}>{this.props.text['menu-2-5']['label']}</Link>
                    </Menu.Item>
                    <Menu.Item key="educacao">
                      <Link to={this.props.text['menu-2-6']['link']}>{this.props.text['menu-2-6']['label']}</Link>
                    </Menu.Item>
                  </SubMenu>
                  <Menu.Item key="projecto-hermanitos"><Link to={this.props.text['menu-3']['link']}>{this.props.text['menu-3']['label']}</Link></Menu.Item>
                  <Menu.Item key="galeria"><Link to={this.props.text['menu-4']['link']}>{this.props.text['menu-4']['label']}</Link></Menu.Item>
                  <Menu.Item key="ofrecer-emprego"><Link to={this.props.text['menu-5']['link']}>{this.props.text['menu-5']['label']}</Link></Menu.Item>
                  <Menu.Item key="contato"><Link to={this.props.text['menu-6']['link']}>{this.props.text['menu-6']['label']}</Link></Menu.Item>
                </Menu>
                <Divider/>
                <Menu
                  mode="vertical"
                  className="idioma"
                  onClick={this.updateLang}
                  selectedKeys={[this.props.lang]}
                >
                  <Menu.Item key="es"><Button type="link" className="btn-lang" id="es"></Button></Menu.Item>
                  <Menu.Item key="pt"><Button type="link" className="btn-lang" id="pt"></Button></Menu.Item>
                  <Menu.Item key="en"><Button type="link" className="btn-lang" id="en"></Button></Menu.Item>
                </Menu>
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
