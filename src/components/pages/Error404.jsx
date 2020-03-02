import React, { Component } from 'react';
import { Row, Col } from 'antd';

export default class Error404 extends Component {

	componentDidMount() {
  }
	render() {

		return (
			<Row gutter={16} type="flex" justify="space-around" align="middle" className="componente">
				<Col span={24} className="error-404">
					<h1>Error 404</h1>
					<h3>Elemento no encontrado.</h3>
				</Col>
			</Row>
		)
	}
}