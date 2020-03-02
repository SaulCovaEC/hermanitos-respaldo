import React, { Component } from 'react';
import { Modal, Row, Col, Divider } from 'antd';
import { API } from "../helpers/Auth";
import { formatFecha } from "../helpers/Template";

export default class Actions extends Component {
  state = {
    id: this.props.id,
    data: [],
    visible: false,
    loading: false,
  };

  componentDidMount() {
    this.fetch()
  }

  fetch = () => {
		let data = new FormData()
    data.append('id', this.state.id);
    data.append('operacion', 'cargar-ticket');
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
				this.setState({
          loading: false,
					data: res.ticket,
        });
			});
  };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  verTicket = () => {
    this.showModal()
    console.log('Ver ticket', this.state.data)
  }

  render() {
    let fcr = formatFecha(this.state.data.creado);
    let fas = (this.state.data.asignado) ? formatFecha(this.state.data.asignado) : '';
    let fat = (this.state.data.atendido) ? formatFecha(this.state.data.atendido) : '';
    let fci = (this.state.data.cerrado) ? formatFecha(this.state.data.cerrado) : '';
    let fan = (this.state.data.anulado) ? formatFecha(this.state.data.anulado) : '';
    return (
      <span>
        <button onClick={this.verTicket}>Ver</button>
        {
          (this.state.visible) ?
            <Modal
            title={this.state.data.asunto}
            visible={this.state.visible}
            onOk={this.handleOk}
            onCancel={this.handleCancel}
            >
              <Row gutter={16} type="flex">
                <Col span={16} className="tickets-desc">
                  <div id="info">
                    <p><strong>Empresa: </strong>{this.state.data.empresa}</p>
                    <p><strong>Numero de ID: </strong>{this.state.data.id}</p>
                  
                    <div className="divider"></div>
                    <p><strong>Descripcion:</strong></p>
                    <p id="asunto-ticket">{this.state.data.descripcion}</p>
                  </div>
                  {
                    (this.state.data.diagnostico === null && this.state.data.ntecnico === null) ?
                      (this.props.user.rol === 'analista' || this.props.user.rol === 'admin') ?
                        <div id="diag">
                          <Divider />
                          <p><strong id="t-diagnostico">Diagnostico:</strong></p>
                          <div id="diagnostico-ticket">
                            <form id="asignar">
                              <div className="input-field">
                                <textarea name="diagnostico" id="diagnostico" placeholder="Diagnostico" required></textarea>
                              </div>
                              
                              <div className="input-field">
                                <select name="opc" id="opc" defaultValue="asignar" required>
                                  <option value="asignar">Asignar</option>
                                  <option value="anular">Anular</option>
                                </select>
                              </div>
                              
                              <button id="asignar-agente" type="submit">Asignar</button>
                            </form>
                          </div>
                        </div>
                      : ''
                    : <div id="diag">
                      <Divider />
                      {
                        (this.state.data.anulado !== null) ? <p><strong id="t-diagnostico">Diagnostico:</strong></p> : <p><strong id="t-diagnostico">Diagnostico(Anulado):</strong></p>
                      }
                      <p id="diagnostico-ticket">{this.state.data.diagnostico}</p>
                    </div>
                  }

                  {
                    (this.state.data.solucion === null) ?
                      (this.state.data.diagnostico !== null) ?
                        (this.props.user.rol === 'tecnico' || this.props.user.rol === 'admin') ?
                        <div id="solucion">
                          <Divider />
                          <p><strong>Recomendacion:</strong></p>
                          <div id="solucion-ticket">
                            <form id="atender-ticket">
                              <div className="input-field">
                                <textarea name="solucion" id="solucion" placeholder="Recomendacion" required></textarea>
                              </div>
                              <button id="guardar-recomendacion" type="submit">Atender ticket</button>
                            </form>
                          </div>
                        </div>
                        : ''
                      : ''
                    : <div id="solucion">
                        <Divider />
                        <p><strong>Recomendacion:</strong></p>
                        <div id="solucion-ticket">
                          <p id="solucion-ticket">{this.state.data.solucion}</p>
                        </div>
                      </div>
                  }
                </Col>
                
                <Col span={8} className="tickets-info">
                  <div id="estado">
                    <p><strong>Estado de ticket:</strong></p>
                    <Divider />
                    <p className="capitalize">{this.state.data.estado}</p>
                  </div>
                  <p><strong>Fechas:</strong></p>
                  <div id="creado">
                    <Divider />
                    <p className="f-creacion"><strong>Fecha de creacion: </strong>{fcr.d} {fcr.m} {fcr.y}</p>
                    <p className="h-creacion"><strong>Hora de creacion: </strong>{fcr.h}</p>
                    <p className="usuario-creacion"><strong>Creado por: </strong>{this.state.data.ncreado}</p>
                  </div>
                  {
                    (this.state.data.asignado) ?
                    <div id="asignado">
                      <Divider />
                      <p className="f-asignacion"><strong>Fecha de asignacion: </strong>{fas.d} {fas.m} {fas.y}</p>
                      <p className="h-asignacion"><strong>Hora de asignacion: </strong>{fas.h}</p>
                      <p className="usuario-asignacion"><strong>Asignado por: </strong>{this.state.data.nasignad}</p>
                      <p className="usuario-asignacion"><strong>Asignado a: </strong>{this.state.data.ntecnico}</p>
                    </div>
                    : ''
                  }
                  {
                    (this.state.data.atendido) ?
                    <div id="atencion">
                      <Divider />
                      <p className="f-atencion"><strong>Fecha de atencion: </strong>{fat.d} {fat.m} {fat.y}</p>
                      <p className="h-atencion"><strong>Hora de atencion: </strong>{fat.h}</p>
                      <p className="usuario-atencion"><strong>Atendido por: </strong>{this.state.data.ntecnico}</p>
                    </div>
                    : ''
                  }
                  {
                    (this.state.data.cerrado) ?
                    <div id="cierre">
                      <Divider />
                      <p className="f-cierre"><strong>Fecha de cierre: </strong>{fci.d} {fci.m} {fci.y}</p>
                      <p className="h-cierre"><strong>Hora de cierre: </strong>{fci.h}</p>
                      <p className="usuario-cierre"><strong>Cerrado por: </strong>{this.state.data.ncerrado}</p>
                    </div>
                    : ''
                  }
                  {
                    (this.state.data.anulado) ?
                    <div id="anulado">
                      <Divider />
                      <p className="f-anulado"><strong>Fecha de anulacion: </strong>{fan.d} {fan.m} {fan.y}</p>
                      <p className="h-anulado"><strong>Hora de anulacion: </strong>{fan.h}</p>
                      <p className="usuario-anulado"><strong>Anulado por: </strong>{this.state.data.nanulado}</p>
                    </div>
                    : ''
                  }
                </Col>
              </Row>
            </Modal>
          : ''
        }
      </span>
    )
  }
}