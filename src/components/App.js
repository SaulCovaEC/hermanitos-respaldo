import React, { Component } from 'react';
import Routes from "./Routes/Routes";
import { ifSesion, logout } from "./helpers/Auth";
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
      lang: 'es',
    };
    this.userHasAuthenticated = this.userHasAuthenticated.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }
  
  async componentDidMount() {
    await (ifSesion()) ? this.userHasAuthenticated(true) : this.userHasAuthenticated(false);
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

  changeLang = lang => {
    let btnLang = lang;
    if(btnLang !== this.state.lang){
      this.setState({
        lang: btnLang
      })
    }
  }

  render() {
    const childProps = {
      isAuthenticated: this.state.isAuthenticated,
      userHasAuthenticated: this.userHasAuthenticated
    }
    let url = window.location.pathname;
    return (
      !this.state.isAuthenticating &&
      <Layout>
        {
          (url.slice(0, 6) === '/admin') ? <div><AdminMenu /><Header style={{ background: '#fff', padding: 0 }}><button id="logout" className="default-btn" onClick={this.handleLogout}><UnlockFilled /></button></Header></div> : <NavMenu lang={this.state.lang} changeLang={this.changeLang}/>
        }
                
        <Layout>
                    
          <section id="body-section">
            {console.log(window.location.pathname)}
            <Routes childProps={childProps} />
          </section>
            
        </Layout>
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