import React from "react";
import { Route, Switch } from "react-router-dom";
import AppliedRoute from "./AppliedRoute";
import AuthenticatedRoute from "./AuthenticatedRoute";
import UnauthenticatedRoute from "./UnauthenticatedRoute";
import Inicio from "../pages/";
import Informacion from "../pages/Informacion";
import ProyectoHermanitos from "../pages/ProyectoHermanitos";
import Galeria from "../pages/Galeria";
import OfrecerEmpleo from "../pages/OfrecerEmpleo";
import Contacto from "../pages/Contacto";

import Login from "../pages/Login";
import Admin from "../pages/Admin";
import Error404 from "../pages/Error404";

export default ({ childProps }) =>
  <Switch>
    <AppliedRoute path="/" exact component={Inicio} props={childProps} />
    {/* Enlaces en español */}
    <AppliedRoute path="/conociendo-tu-espacio" exact component={Informacion} props={childProps} pLocation={'conhecendo-seu-espaco'}/>
    <AppliedRoute path="/cultura-y-convivencia" exact component={Informacion} props={childProps} pLocation={'cultura-e-convivencia'} />
    <AppliedRoute path="/documentacion" exact component={Informacion} props={childProps} pLocation={'documentacao'} />
    <AppliedRoute path="/trabajo" exact component={Informacion} props={childProps} pLocation={'trabalho'} />
    <AppliedRoute path="/salud" exact component={Informacion} props={childProps} pLocation={'saude'} />
    <AppliedRoute path="/educacion" exact component={Informacion} props={childProps} pLocation={'educacao'} />

    <AppliedRoute path="/proyecto-hermanitos" exact component={ProyectoHermanitos} props={childProps} />
    <AppliedRoute path="/ofrecer-empleo" exact component={OfrecerEmpleo} props={childProps} />
    <AppliedRoute path="/contacto" exact component={Contacto} props={childProps} />
    
    {/* Enlaces en portugues */}
    <AppliedRoute path="/conhecendo-seu-espaco" exact component={Informacion} props={childProps} pLocation={'conhecendo-seu-espaco'} />
    <AppliedRoute path="/cultura-e-convivencia" exact component={Informacion} props={childProps} pLocation={'cultura-e-convivencia'} />
    <AppliedRoute path="/documentacao" exact component={Informacion} props={childProps} pLocation={'documentacao'} />
    <AppliedRoute path="/trabalho" exact component={Informacion} props={childProps} pLocation={'trabalho'} />
    <AppliedRoute path="/saude" exact component={Informacion} props={childProps} pLocation={'saude'} />
    <AppliedRoute path="/educacao" exact component={Informacion} props={childProps} pLocation={'educacao'} />

    <AppliedRoute path="/projecto-hermanitos" exact component={ProyectoHermanitos} props={childProps} />
    <AppliedRoute path="/ofrecer-emprego" exact component={OfrecerEmpleo} props={childProps} />
    <AppliedRoute path="/contato" exact component={Contacto} props={childProps} />

    {/* Enlaces */}
    <AppliedRoute path="/galeria" exact component={Galeria} props={childProps} />
    <UnauthenticatedRoute path="/login" exact component={Login} props={childProps} />
    <AuthenticatedRoute path="/admin" exact component={Admin} props={childProps} />
    
    <Route component={Error404} />
  </Switch>;