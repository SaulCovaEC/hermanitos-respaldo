import React, { Component } from 'react';
import { Menu } from 'antd';
import { FacebookOutlined, InstagramOutlined, WhatsAppOutlined, LinkedinOutlined, PhoneOutlined } from '@ant-design/icons';


export default class FooterNormal extends Component {
  
  render() {
    return (
      <div className="footer">
        <div className="copyright">
          ©{new Date().getFullYear()} Espaço Hermanitos.
        </div>
        <div className="redes-sociales">
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
      </div>
    );
  }
}
