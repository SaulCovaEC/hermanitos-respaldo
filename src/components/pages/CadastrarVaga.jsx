import React, { Component } from 'react';
import { Form, Input, Button, Radio, Drawer } from 'antd';
//import { API } from "../helpers/Auth";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserGraduate } from '@fortawesome/free-solid-svg-icons';

export default class CadastrarVaga extends Component {
	constructor(...props) {
    super(...props)
    this.state = {
      visible: false,
			loading: false
		};
  } 

	componentDidMount() {
		
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
	
	registrarVaga = () => {
		let formVaga = document.getElementById('cadastrar-vaga');
		let formData = new FormData(formVaga);
    for(var pair of formData.entries()) {
			if(pair[1] !== ''){
				console.log(pair[0]+ ': '+ pair[1]); 
			}
		}
	}

	render() {

		return (
			<div>
				<button className="btn-icon" onClick={this.showDrawer}>
          <FontAwesomeIcon icon={faUserGraduate} fixedWidth/>
        </button>
        <Drawer
          title="Registrar empleo"
          placement="right"
          width={"80%"}
          closable={false}
          onClose={this.onClose}
          visible={this.state.visible}
          footer={
            <div
              style={{
                textAlign: 'right',
              }}
            >
              <Button
                onClick={this.onClose}
                style={{ marginRight: 8 }}
              >
                Cancelar
              </Button>
              <Button onClick={this.registrarVaga} type="primary">
                Enviar empleo
              </Button>
            </div>
          }
        >
					<Form id="cadastrar-vaga" layout="vertical">
				    <Form.Item label="Nombre:">
				      <Input
	              type="text"
								id="nome"
								name="nome"
	              placeholder="Nome"
	            />
				    </Form.Item>
				    <Form.Item label="Telefono:">
  			    	<Input
	              type="text"
								id="telefone"
								name="telefone'"
	              placeholder="Telefone"
	            />
	  		    </Form.Item>
				    <Form.Item label="Email:">
				    	<Input
		            type="email"
								id="email"
								name="email"
		            placeholder="Email"
		          />
				    </Form.Item>
				    <Form.Item label="Empresa">
				    	<Input
	              type="text"
	              id="empresa"
	              name="empresa"
	              placeholder="Empresa"
	            />
				    </Form.Item>
            <Form.Item label="Empleo ofrecido">
				    	<Input
	              type="text"
	              id="vaga"
	              name="vaga"
	              placeholder="Empleo ofrecido"
	            />
				    </Form.Item>
				    <Form.Item label="Género preferido para la vacante:">
              <Radio.Group name="sexo">
                <Radio value="masculino">Masculino</Radio>
                <Radio value="femenino">Femenino</Radio>
                <Radio value="indiferente">Indiferente</Radio>
              </Radio.Group>
				    </Form.Item>
				    <Form.Item label="Requisitos de formacion academica:">
              <Input.TextArea 
                name="formacion"
                placeholder="Escolaridad minima, cursos realizados, etc."
              />
				    </Form.Item>
            <Form.Item label="Requisitos de experiencias profesional:">
              <Input.TextArea 
                name="experiencias"
                placeholder="Actividades y trabajos anteriores."
              />
				    </Form.Item>
            <Form.Item label="Informacion adicional:">
              <Input.TextArea 
                name="adicional"
                placeholder="Requerimientos adicionales."
              />
				    </Form.Item>
				  </Form>
        </Drawer>
			</div>
		)
	}
}