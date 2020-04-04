import React, { Component } from 'react';
import { Row, Col, Form, Radio, Input, Button } from 'antd';


export default class OfrecerEmpleo extends Component {
  constructor(...props) {
    super(...props)
    this.state = {
			loading: false
		};
  } 

  componentDidMount() {
    this.props.location('ofrecer-empleo');
  }

  render() {
    let text = this.props.text['empleo'];
    let form = this.props.text['form'];

    return (
      <section id="ofrecer-empleo">
        <div id="page-title">{text['title']}</div>
        <Row className="empleo-form" gutter={[8, 8]} justify="space-around" style={{margin: '10px 0'}}>
          <Col xs={24} sm={24} md={12} lg={10} xl={10}>
            <div><img src="./img/img-11.jpg" alt="Curso de reciclo"/></div>
            <p className="title">{text['text-1']}</p>
            <p>{text['text-2']}</p>
            <p>{text['text-3-1']} <a href="mailto:hermanitosmanaus@gmail.com">hermanitosmanaus@gmail.com</a> {text['text-3-2']} <a href='te:+5592994315431'>(92) 99431-5431</a>.</p>
          </Col>
          <Col xs={24} sm={24} md={12} lg={10} xl={10}>
            <Form id="cadastrar-vaga" layout="vertical">
              <Form.Item label={form['form-nombre']+":"}>
                <Input
                  type="text"
                  id="nome"
                  name="nome"
                  placeholder={form['form-nombre']}
                />
              </Form.Item>
              <Form.Item label={form['form-tel']+":"}>
                <Input
                  type="text"
                  id="telefone"
                  name="telefone'"
                  placeholder={form['form-tel']}
                />
              </Form.Item>
              <Form.Item label={form['form-email']+":"}>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  placeholder={form['form-email']}
                />
              </Form.Item>
              <Form.Item label={form['form-empresa']+":"}>
                <Input
                  type="text"
                  id="empresa"
                  name="empresa"
                  placeholder={form['form-empresa']}
                />
              </Form.Item>
              <Form.Item label={form['form-empleo']+":"}>
                <Input
                  type="text"
                  id="vaga"
                  name="vaga"
                  placeholder={form['form-empleo']}
                />
              </Form.Item>
              <Form.Item label={form['form-sexo']+":"}>
                <Radio.Group name="sexo">
                  <Radio value="masculino">{form['form-sexo-1']}</Radio>
                  <Radio value="femenino">{form['form-sexo-2']}</Radio>
                  <Radio value="indiferente">{form['form-sexo-3']}</Radio>
                </Radio.Group>
              </Form.Item>
              <Form.Item label={form['form-formacion-1']+":"}>
                <Input.TextArea 
                  name="formacion"
                  placeholder={form['form-formacion-2']}
                />
              </Form.Item>
              <Form.Item label={form['form-experiencia-1']+":"}>
                <Input.TextArea 
                  name="experiencias"
                  placeholder={form['form-experiencia-2']}
                />
              </Form.Item>
              <Form.Item label={form['form-info-1']+":"}>
                <Input.TextArea 
                  name="adicional"
                  placeholder={form['form-info-2']}
                />
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit">
                  {form['form-enviar']}
                </Button>
              </Form.Item>
            </Form>
          </Col>
        </Row>
      </section>
    );
  }
}
