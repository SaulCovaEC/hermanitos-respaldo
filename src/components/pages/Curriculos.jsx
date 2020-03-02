import React, { Component } from 'react';
import { Table, Input, Button } from 'antd';
import { API } from "../helpers/Auth";
import { SearchOutlined } from '@ant-design/icons';

const pagination = { position: 'bottom' };

export default class Tickets extends Component {
  state = {
    data: [],
    searchText: '',
    pagination,
    loading: false,
  };

  componentDidMount() {
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
    this.setState({ loading: true });
    
    fetch(API+'/pessoas', {
      method: 'GET',
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
        let pessoas = res.results;
        for(let i = 0; i < pessoas.length; i++){
          pessoas[i].key = pessoas[i].id
        }
        const pagination = { ...this.state.pagination };
        
        this.setState({
          loading: false,
          data: res.results,
          pagination,
        });
      });
  };

  getColumnSearchProps = dataIndex => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={node => {
            this.searchInput = node;
          }}
          placeholder={`Buscar ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => this.handleSearch(selectedKeys, confirm)}
          style={{ width: 188, marginBottom: 8, display: 'block' }}
        />
        <Button
          type="primary"
          onClick={() => this.handleSearch(selectedKeys, confirm)}
          icon="search"
          size="small"
          style={{ width: 80, marginRight: 8 }}
        >
          Buscar
        </Button>
        <Button onClick={() => this.handleReset(clearFilters)} size="small" style={{ width: 80 }}>
          Reset
        </Button>
      </div>
    ),
    filterIcon: filtered => (
      <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />
    ),
    onFilter: (value, record) =>
      record[dataIndex]
        .toString()
        .toLowerCase()
        .includes(value.toLowerCase()),
    onFilterDropdownVisibleChange: visible => {
      if (visible) {
        setTimeout(() => this.searchInput.select());
      }
    },
    
  });
  
  handleSearch = (selectedKeys, confirm) => {
    confirm();
    this.setState({ searchText: selectedKeys[0] });
  };

  handleReset = clearFilters => {
    clearFilters();
    this.setState({ searchText: '' });
  };


  render() {

    const columns = [
      {
        title: 'Nome',
        dataIndex: 'nome',
        render: nome => `${nome}`,
        sorter: (a, b) => a.id - b.id
      },
      {
        title: 'Telefone',
        dataIndex: 'telefone',
        render: telefone => `${telefone}`,
        ...this.getColumnSearchProps('telefone'),
      },
      {
        title: 'Formaçao',
        dataIndex: 'formacao',
        render: function (formacao) {
          let lg = (formacao != null) ? formacao.length : 0;
          let formt = ``
            for (let i = 0; i < lg; i++) {
              formt += formacao[i];
              formt += (i === (lg-1)) ? '' : ' / ';
            }
          
          return formt;
        },
        ...this.getColumnSearchProps('formacao'),
      },
      {
        title: 'Experiencias',
        dataIndex: 'experiencias',
        render: function (experiencias) {
          let lg = (experiencias != null) ? experiencias.length : 0;
          let formt = ``
            for (let i = 0; i < lg; i++) {
              formt += experiencias[i];
              formt += (i === (lg-1)) ? '' : ' / ';
            }
          
          return formt;
        },
        ...this.getColumnSearchProps('experiencias'),
      },
      {
        title: 'Outras',
        dataIndex: 'outras',
        render: outras => `${outras}`,
        ...this.getColumnSearchProps('outras'),
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
