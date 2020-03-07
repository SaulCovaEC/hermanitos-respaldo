import React, { Component } from 'react';
import Routes from "./Routes/Routes";
import { ifSesion, logout, updateLang, ifLang } from "./helpers/Auth";
import { Layout } from 'antd';
import { UnlockFilled } from '@ant-design/icons';

import {
  //BrowserRouter as Router,
  //Route,
  //Link,
  withRouter
} from 'react-router-dom';
/* Secciones */
import NavMenu from './Menu';
import AdminMenu from './Menu-admin';
import FooterNormal from './Footer';
import FooterAdmin from './FooterAdmin';

const { Header, Footer } = Layout;

class App extends Component {
  constructor(...props) {
    super(...props)
    this.state = {
      sesion: (localStorage.getItem('sesion')),
      isAuthenticated: false,
      isAuthenticating: true,
      location: '',
      lang: ''
    };
    this.userHasAuthenticated = this.userHasAuthenticated.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.changeLang = this.changeLang.bind(this);
  }
  
  async componentDidMount() {
    await (ifSesion()) ? this.userHasAuthenticated(true) : this.userHasAuthenticated(false);
    await (ifLang()) ? this.changeLang(localStorage.getItem('lang')) : this.changeLang('pt');
    this.setState({ isAuthenticating: false });
  }

  componentWillUnmount (){
  }

  handleLogout() {
    logout();
    this.userHasAuthenticated(false);
    this.props.history.push("/login");
  }

  userHasAuthenticated = authenticated => {
    this.setState({
      isAuthenticated: authenticated 
    });
  }

  changeLang = btnLang => {
    this.setState({
      lang: btnLang
    });
    updateLang(btnLang);
  }

  updateLocation = newLocation => {
    this.setState({
      location: newLocation
    })
  }

  render() {
    const childProps = {
      isAuthenticated: this.state.isAuthenticated,
      userHasAuthenticated: this.userHasAuthenticated,
      location: this.updateLocation,
      lang: this.state.lang
    }
    let url = window.location.pathname;
    return (
      !this.state.isAuthenticating &&
      <Layout>
        {
          (url.slice(0, 6) === '/admin') ? <div><AdminMenu /><Header style={{ background: '#fff', padding: 0 }}><button id="logout" className="default-btn" onClick={this.handleLogout}><UnlockFilled /></button></Header></div> : <NavMenu lang={this.state.lang} changeLang={this.changeLang} location={this.state.location} updateLocation={this.updateLocation}/>
        }
      
          <section id="body-section">
            <Routes childProps={childProps}/>
          </section>
        <Footer>
          {
            (url.slice(0, 6) === '/admin') ? <FooterAdmin /> : <FooterNormal />
          }
        </Footer>
      </Layout>
    )
  }
}

export default withRouter(App);