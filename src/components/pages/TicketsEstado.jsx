import React, { Component } from 'react';
import { Table } from 'antd';
import { API, currentSesion } from "../helpers/Auth";
import Actions from "../helpers/Actions";

const user = currentSesion();

export default class Tickets extends Component {
  state = {
    data: [],
    pagination: {},
    loading: false,
  };

  componentDidMount() {
    var ini = document.querySelector('.ant-menu-item');
    ini.className = 'ant-menu-item';
    this.fetch();
  }

  handleTableChange = (pagination, filters, sorter) => {
    const pager = { ...this.state.pagination };
    pager.current = pagination.current;
    this.setState({
      pagination: pager,
    });
    this.fetch({
      results: pagination.pageSize,
      page: pagination.current,
      sortField: sorter.field,
      sortOrder: sorter.order,
      ...filters,
    });
  };

  fetch = () => {
    var pat = this.props.location.pathname.split('/');
    var status = pat[2];
		let data = new FormData()
    data.append('usuario', user.id);
    data.append('rol', user.rol);
    data.append('estado', status);
    data.append('results', 10);
    data.append('operacion', 'cargar-tickets-estado');
		this.setState({ loading: true });
    fetch(API, {
			body: data,
      method: 'post'
    })
      .then(res => {
        return (res.ok)
        ? res.json()
        : Promise.reject({ status: res.status, statusText: res.statusText })
      })
      .then(res => {
        let todos = res.todos;
        for(let i = 0; i < todos.length; i++){
          todos[i].key = todos[i].id
        }
				const pagination = { ...this.state.pagination };
				pagination.total = (Math.ceil(res.todos.length/10));
				this.setState({
          loading: false,
					data: todos,
					pagination,
				});
			});
  };

  render() {
    const columns = [
      {
        title: 'Id',
        dataIndex: 'id',
        sorter: (a, b) => a.id - b.id
      },
      {
        title: 'Usuario',
        dataIndex: 'usuario',
        render: nusuario => `${nusuario}`
      },
      {
        title: 'Empresa',
        dataIndex: 'empresa',
        render: empresa => `${empresa}`
      },
      {
        title: 'Asunto',
        dataIndex: 'asunto',
        render: asunto => `${asunto}`
      },
      {
        title: 'Creado',
        dataIndex: 'creado',
        sorter: (a, b) => a.creado - b.creado,
        render: creado => `${creado}`
      },
      {
        title: 'Prioridad',
        dataIndex: 'prioridad',
        onFilter: (value, record) => record.prioridad.indexOf(value) === 0,
        filters: [{ text: 'Baja', value: 'Baja' }, { text: 'Media', value: 'Media' }, { text: 'Alta', value: 'Alta' }]
      },
      {
        title: '',
        key: 'action',
        render: (text) => (
          <Actions id={text.id} user={user}/>
        )
      },
    ];    

    return (
      <Table
        columns={columns}
        dataSource={this.state.data}
        pagination={this.state.pagination}
        loading={this.state.loading}
        onChange={this.handleTableChange}
      />
    );
  }
}
