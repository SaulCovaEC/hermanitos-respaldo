import React, { Component } from 'react';
import { Row, Col, Form, Input, Button } from 'antd';
import { newSesion, API } from "../helpers/Auth";
import { BrowserRouter as Link } from 'react-router-dom';
import Logo from '../img/component/logo.png';
import { LockOutlined, UserOutlined } from '@ant-design/icons';

export default class Login extends Component {
  constructor(...props) {
    super(...props)
    this.state = {
      user: '',
      password: '',
      loading: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }  
  componentDidMount() {

  }
  
  handleSubmit = event => {
    event.preventDefault();
    this.setState({
      user: document.getElementById('user').value,
      password: document.getElementById('password').value
    })
    let user = this.state.user;
    let password = this.state.password;
    
    let data = `{"user": "${user}", "pass": "${password}"}`;
    
    fetch(API+'/login', {
      method: 'POST',
      body: data,
      headers:{
        'Content-Type': 'application/json'
      }
    })
      .then(res => {
        return (res.ok)
        ? res.json()
        : Promise.reject({ status: res.status, statusText: res.statusText })
      })
      .then(res => {
        document.getElementById('status').innerHTML = res.msg;
        console.log(res);
        console.info(API);
        if(!res.err){
          newSesion(res.id);
          this.props.userHasAuthenticated(true);
        }
        else {
          setTimeout(() => {
            document.getElementById('status').innerHTML = " "
          }, 3000);
        }
      })
  };

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

	render() {
    return (
      <Row type="flex" justify="space-around" align="middle" id="login">
        <Col span={16} className="login">
          <Row gutter={16}>
            <Col sm={{ span: 24 }} md={{ span: 10 }} className="logo">
              <Link to='/'><img src={Logo} alt="Hermanitos"/></Link>
            </Col>
            <Col sm={{ span: 24 }} md={{ span: 10 }}>
              <Form className="login-form">
                <Form.Item>
                  <Input 
                    prefix={<UserOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
                    type="text"
                    id="user"
                    placeholder="Correo"
                    value={this.state.user}
                    onChange={this.handleChange}
                  />
                </Form.Item>
                
                <Form.Item>
                  <Input 
                    prefix={<LockOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
                    type="password"
                    id="password"
                    placeholder="Clave"
                    value={this.state.password}
                    onChange={this.handleChange}
                  />
                </Form.Item>
                  
                <p id="status"></p>
                  
                <Form.Item>
                  <Button type="primary" htmlType="submit" className="login-form-button" loading={this.state.loading} onClick={this.handleSubmit}>
                    Iniciar sesion
                  </Button>
                </Form.Item>
              </Form>
            </Col>
          </Row>
        </Col>
      </Row>
    )
	}
}
