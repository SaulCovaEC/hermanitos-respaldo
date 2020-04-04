import React, { Component } from 'react';
import { Row, Col, Form, Input, Button } from 'antd';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: 'saulcova.ec@gmail.com',
    pass: 'sllax20.13'
  }
});

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};

const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

export default class Contacto extends Component {
  state = {
    loading: false,
  };

  componentDidMount() {
    this.props.location('contacto');
  }

  render() {
    const enviar = values => {
      console.log('enviar');
      
      // Definimos el email
      let mailOptions = {
        from: `${values.email}`,
        to: 'saulcova.ec@gmail.com',
        subject: `${values.asunto}`,
        text: `
        Mensaje: ${values.mensaje} 
        `
      };
      transporter.sendMail(mailOptions, function(error, info){
        if (error){
          console.log(error);
        } else {
          console.log("Email sent");
        }
      })
    }
    let text = this.props.text['contacto'];
    let form = this.props.text['form'];
    
    return (
      <section id="contacto">
        <div id="page-title">{text['title']}</div>
        <div className="map">
          <iframe id="mapa" title="Mapa" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.0256844895443!2d-60.01512628555877!3d-3.0878183411144224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x926c1bb6e6e04aa3%3A0xaa1055237a454ef9!2sEspa%C3%A7o%20Hermanitos!5e0!3m2!1ses-419!2sbr!4v1583271700375!5m2!1ses-419!2sbr"/>
        </div>
        <Row id="datos" justify="space-around" align="middle">
          <Col lg={11} sm={24} id="form-contact">
            <p>{text['form-title']}</p>
            <Form {...formItemLayout} onFinish={enviar}>
              <Form.Item
                label={form['form-nombre']}
                name="name"
                size="large"
                rules={[{ required: true }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label={form['form-email']}
                name="email"
              >
                <Input />
              </Form.Item>
              <Form.Item
                label={form['form-tel']}
                name="tel"
              >
                <Input />
              </Form.Item>
              <Form.Item
                label={form['form-asunto']}
                name="asunto"
                rules={[{ required: true}]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label={form['form-mensaje']}
                name="mensaje"
                rules={[{ required: true }]}
              >
                <Input.TextArea />
              </Form.Item>
              <Form.Item {...tailFormItemLayout}>
                <Button type="primary" htmlType="submit">
                  {form['form-enviar']}
                </Button>
              </Form.Item>
            </Form>
          </Col>

          <Col lg={11} sm={24}>
            <p id="cita">“{text['cita-1']}”</p>
            <p id="autor">{text['autor-cita-1']}</p>
          </Col>
        </Row>
      </section>
    );
  }
}
