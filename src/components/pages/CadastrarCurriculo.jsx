import React, { Component } from 'react';
import { Row, Col, Form, Input, Divider } from 'antd';
import { API } from "../helpers/Auth";

export default class CadastrarCurriculo extends Component {
	constructor(...props) {
    super(...props)
    this.state = {
    	nome: '',
    	idade: '',
    	idEnsino: 0,
      loading: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  } 

	componentDidMount() {
  }

	handleSubmit = event => {
    event.preventDefault();
    this.setState({
      nome: document.getElementById('nome').value,
      idade: document.getElementById('idade').value
    })
    let nome = this.state.nome;
    let idade = this.state.idade;

    let data = {'nome': nome, 'idade': idade}
    
    fetch(API+'/cadastrar', {
      method: 'POST',
      body: JSON.stringify(data),
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
      	
      })
  };

	render() {
		return (
			<Row gutter={16} type="flex" justify="space-around" align="middle" className="componente">
				<Col span={24} className="cadastrar-curriculo">
					<Form className="salvar-form" onSubmit={this.handleSubmit}>
						<Divider orientation="left">Dados pessoais</Divider>
				    <Form.Item>
				      <Input
	              type="text"
	              id="nome"
	              placeholder="Nome"
	              value={this.state.nome}
	            />
				    </Form.Item>
				    <Row gutter={8}>
				    	<Col span={4}>
						    <Form.Item>
						      <Input
			              type="number"
			              id="idade"
			              placeholder="Idade"
			              value={this.state.idade}
			            />
						    </Form.Item>
				    	</Col>
            	<Col span={10}>
						    <Form.Item>
						    	<Input
			              type="number"
			              id="telefone"
			              placeholder="Telefone"
			              value={this.state.telefone}
			            />
						    </Form.Item>
						  </Col>
						  <Col span={10}>
						    <Form.Item>
						    	<Input
			              type="email"
			              id="email"
			              placeholder="Email"
			              value={this.state.email}
			            />
						    </Form.Item>
						  </Col>
				    </Row>
				    <Form.Item>
				    	<Input
	              type="text"
	              id="enderecao"
	              placeholder="Endereção"
	              value={this.state.enderecao}
	            />
				    </Form.Item>
				    <Form.Item>
				    	<Input
	              type="text"
	              id="objetivo"
	              placeholder="Objetivo"
	              value={this.state.objetivo}
	            />
				    </Form.Item>
				    <Form.Item>
				    	<Input
	              type="text"
	              id="outras"
	              placeholder="Outras atividades"
	              value={this.state.outras}
	            />
				    </Form.Item>
				    <Form.Item>
				    	<Input
	              type="text"
	              id="info"
	              placeholder="Informação adicional"
	              value={this.state.info}
	            />
				    </Form.Item>
				  </Form>
				</Col>
			</Row>
		)
	}
}
