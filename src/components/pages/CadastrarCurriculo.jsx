import React, { Component } from 'react';
import { Row, Col, Form, Input, Divider, Button, Select, Drawer, DatePicker } from 'antd';
//import { API } from "../helpers/Auth";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard } from '@fortawesome/free-solid-svg-icons';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';

const { RangePicker } = DatePicker;
const { Option } = Select;

export default class CadastrarCurriculo extends Component {
	constructor(...props) {
    super(...props)
    this.state = {
      visible: false,
			loading: false,
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
	
	registrarCurriculo = () => {
		let formCurriculo = document.getElementById('cadastrar-curriculo');
		let formData = new FormData(formCurriculo);
    for(var pair of formData.entries()) {
			if(pair[1] !== ''){
				console.log(pair[0]+ ': '+ pair[1]); 
			}
		}
	}

	render() {
		let form = this.props.text;
		return (
			<div>
				<button className="btn-icon" onClick={this.showDrawer}>
          <FontAwesomeIcon icon={faAddressCard} fixedWidth/>
        </button>
        <Drawer
          title="Registrar curricuclo"
          placement="left"
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
              <Button onClick={this.registrarCurriculo} type="primary">
                Enviar curriculo
              </Button>
            </div>
          }
        >
					<Form id="cadastrar-curriculo" onFinish={this.registrarCurriculo}>
						<Divider orientation="left">Datos personales</Divider>
				    <Form.Item>
				      <Input
	              type="text"
								id="nombre"
								name="nombre"
	              placeholder={form['form-nombre']}
	            />
				    </Form.Item>
				    <Row gutter={8}>
				    	<Col span={4}>
						    <Form.Item>
						      <Input
			              type="number"
										id="edad"
										name="edad"
			              placeholder={form['form-edad']}
			            />
						    </Form.Item>
				    	</Col>
            	<Col span={10}>
						    <Form.Item>
						    	<Input
			              type="text"
										id="telefono"
										name="telefono"
			              placeholder={form['form-tel']}
			            />
						    </Form.Item>
						  </Col>
						  <Col span={10}>
						    <Form.Item>
						    	<Input
			              type="email"
										id="email"
										name="email"
			              placeholder={form['form-email']}
			            />
						    </Form.Item>
						  </Col>
				    </Row>
				    <Form.Item>
				    	<Input
	              type="text"
	              id="direccion"
	              name="direccion"
	              placeholder={form['form-direccion']}
	            />
				    </Form.Item>
				    <Form.Item>
				    	<Input
	              type="text"
	              id="objetivo"
	              name="objetivo"
	              placeholder={form['form-objetivo']}
	            />
				    </Form.Item>
				    <Form.Item>
				    	<Input
	              type="text"
	              id="otras"
	              name="otras"
	              placeholder={form['form-otras']}
	            />
				    </Form.Item>
				    <Form.Item>
				    	<Input
	              type="text"
	              id="info"
	              name="info"
	              placeholder={form['form-info-1']}
	            />
				    </Form.Item>

						<Form.List name="formacion">
							{(fields, { add, remove }) => {
								return (
									<div>
									<Divider orientation="left">{form['form-formacion']}</Divider>
										{fields.map((field, index) => (
											<Row key={field.key} gutter={[8, 8]}>
												<Col xs={24} sm={24} md={12} lg={6} xl={6}>
													<Form.Item
														name={[field.name, "nivel"]}
														fieldKey={[field.fieldKey, "nivel"]}
														label={form['form-nivel']}	
														labelCol={{span: 24}}
													>
														<Select name="nivel" placeholder={form['form-nivel']}>
															<Option value="Incompleto">{form['form-nivel-1']}</Option>
															<Option value="Completo">{form['form-nivel-2']}</Option>
														</Select>
													</Form.Item>
												</Col>
												<Col xs={24} sm={24} md={12} lg={6} xl={6}>
													<Form.Item
														name={[field.name, "estado"]}
														fieldKey={[field.fieldKey, "estado"]}
														label={form['form-estado']}
														labelCol={{span: 24}}
													>
														<Select name="estado" placeholder={form['form-estado']}>
															<Option value="Incompleto">{form['form-estado-1']}</Option>
															<Option value="Completo">{form['form-estado-2']}</Option>
														</Select>
													</Form.Item>
												</Col>
												<Col xs={24} sm={24} md={11} lg={5} xl={5}>
													<Form.Item
														name={[field.name, "periodo"]}
														fieldKey={[field.fieldKey, "periodo"]}
														label={form['form-periodo']}
														labelCol={{span: 24}}
													>
														<RangePicker name="periodo-formacion" picker="month" />
													</Form.Item>
												</Col>
												<Col xs={23} sm={23} md={11} lg={6} xl={6}>
													<Form.Item
														name={[field.name, "titulo"]}
														fieldKey={[field.fieldKey, "titulo"]}
														label={form['form-titulo']}
														labelCol={{span: 24}}
													>
														<Input name="titulo" placeholder={form['form-titulo']} />
													</Form.Item>
												</Col>
												<Col xs={1} sm={1} md={1} lg={1} xl={1}>
													<MinusCircleOutlined
														className="dynamic-delete-button"
														onClick={() => {
															remove(field.name);
														}}
													/>
												</Col>
											</Row>
										))}
										<Form.Item>
											<Button
												type="dashed"
												onClick={() => {
													add();
												}}
												style={{ width: "100%" }}
											>
												<PlusOutlined /> {form['form-add-formacion']}
											</Button>
										</Form.Item>
									</div>
								);
							}}
						</Form.List>

						<Form.List name="cursos">
							{(fields, { add, remove }) => {
								return (
									<div>
										<Divider orientation="left">{form['form-curso']}</Divider>
										{fields.map((field, index) => (
											<Row key={field.key}>
												<Col xs={23} sm={23} md={23} lg={23} xl={23}>
													<Form.Item
														name={[field.name, "curso"]}
														fieldKey={[field.fieldKey, "curso"]}
														label={form['form-curso-1']}
														labelCol={{span: 24}}
													>
														<Input placeholder={form['form-curso-1']} />
													</Form.Item>
												</Col>
												<Col xs={1} sm={1} md={1} lg={1} xl={1}>
													<MinusCircleOutlined
														className="dynamic-delete-button"
														onClick={() => {
															remove(field.name);
														}}
													/>
												</Col>
											</Row>
										))}
										<Form.Item>
											<Button
												type="dashed"
												onClick={() => {
													add();
												}}
												style={{ width: "100%" }}
											>
												<PlusOutlined /> {form['form-add-curso']}
											</Button>
										</Form.Item>
									</div>
								);
							}}
						</Form.List>

						<Form.List name="experiencias">
							{(fields, { add, remove }) => {
								return (
									<div>
										<Divider orientation="left">{form['form-experiencia']}</Divider>
										{fields.map((field, index) => (
											<Row key={field.key}>
												<Col xs={24} sm={24} md={12} lg={7} xl={7}>
													<Form.Item
														name={[field.name, "empresa"]}
														fieldKey={[field.fieldKey, "empresa"]}
														label={form['form-empresa']}
														labelCol={{span: 24}}
													>
														<Input placeholder={form['form-empresa-1']} />
													</Form.Item>
												</Col>
												<Col xs={24} sm={24} md={12} lg={8} xl={8}>
													<Form.Item
														name={[field.name, "cargo"]}
														fieldKey={[field.fieldKey, "cargo"]}
														label={form['form-cargo']}
														labelCol={{span: 24}}
													>
														<Input placeholder={form['form-cargo-1']} />
													</Form.Item>
												</Col>
												<Col xs={24} sm={24} md={11} lg={8} xl={8}>
													<Form.Item
														name={[field.name, "periodo"]}
														fieldKey={[field.fieldKey, "periodo"]}
														label={form['form-periodo']}
														labelCol={{span: 24}}
													>
														<RangePicker name="periodo-experiencia" picker="month" />
													</Form.Item>
												</Col>
												<Col xs={1} sm={1} md={1} lg={1} xl={1}>
													<MinusCircleOutlined
														className="dynamic-delete-button"
														onClick={() => {
															remove(field.name);
														}}
													/>
												</Col>
											</Row>
										))}
										<Form.Item>
											<Button
												type="dashed"
												onClick={() => {
													add();
												}}
												style={{ width: "100%" }}
											>
												<PlusOutlined /> {form['form-add-experiencia']}
											</Button>
										</Form.Item>
									</div>
								);
							}}
						</Form.List>
				  </Form>
        </Drawer>
			</div>
		)
	}
}