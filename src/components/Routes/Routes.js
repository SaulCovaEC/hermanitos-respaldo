import React from "react";
import { Route, Switch } from "react-router-dom";
import AppliedRoute from "./AppliedRoute";
import AuthenticatedRoute from "./AuthenticatedRoute";
import UnauthenticatedRoute from "./UnauthenticatedRoute";
import Inicio from "../pages/";
import ConociendoTuEspacio from "../pages/ConociendoTuEspacio";
import CulturaYConvivencia from "../pages/CulturaYConvivencia";
import Documentacion from "../pages/Documentacion";
import Trabajo from "../pages/Trabajo";
import Salud from "../pages/Salud";
import Educacion from "../pages/Educacion";

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
    <AppliedRoute path="/conociendo-tu-espacio" exact component={ConociendoTuEspacio} props={childProps} pLocation={'conhecendo-seu-espaco'}/>
    <AppliedRoute path="/cultura-y-convivencia" exact component={CulturaYConvivencia} props={childProps} pLocation={'cultura-e-convivencia'} />
    <AppliedRoute path="/documentacion" exact component={Documentacion} props={childProps} pLocation={'documentacao'} />
    <AppliedRoute path="/trabajo" exact component={Trabajo} props={childProps} pLocation={'trabalho'} />
    <AppliedRoute path="/salud" exact component={Salud} props={childProps} pLocation={'saude'} />
    <AppliedRoute path="/educacion" exact component={Educacion} props={childProps} pLocation={'educacao'} />

    <AppliedRoute path="/proyecto-hermanitos" exact component={ProyectoHermanitos} props={childProps} />
    <AppliedRoute path="/ofrecer-empleo" exact component={OfrecerEmpleo} props={childProps} />
    <AppliedRoute path="/contacto" exact component={Contacto} props={childProps} />
    
    {/* Enlaces en portugues */}
    <AppliedRoute path="/conhecendo-seu-espaco" exact component={ConociendoTuEspacio} props={childProps} pLocation={'conhecendo-seu-espaco'} />
    <AppliedRoute path="/cultura-e-convivencia" exact component={CulturaYConvivencia} props={childProps} pLocation={'cultura-e-convivencia'} />
    <AppliedRoute path="/documentacao" exact component={Documentacion} props={childProps} pLocation={'documentacao'} />
    <AppliedRoute path="/trabalho" exact component={Trabajo} props={childProps} pLocation={'trabalho'} />
    <AppliedRoute path="/saude" exact component={Salud} props={childProps} pLocation={'saude'} />
    <AppliedRoute path="/educacao" exact component={Educacion} props={childProps} pLocation={'educacao'} />

    <AppliedRoute path="/projeto-hermanitos" exact component={ProyectoHermanitos} props={childProps} />
    <AppliedRoute path="/ofrecer-emprego" exact component={OfrecerEmpleo} props={childProps} />
    <AppliedRoute path="/contato" exact component={Contacto} props={childProps} />

    {/* Enlaces en ingles */}
    <AppliedRoute path="/knowing-your-space" exact component={ConociendoTuEspacio} props={childProps} pLocation={'conhecendo-seu-espaco'} />
    <AppliedRoute path="/culture-and-coexistence" exact component={CulturaYConvivencia} props={childProps} pLocation={'cultura-e-convivencia'} />
    <AppliedRoute path="/documentation" exact component={Documentacion} props={childProps} pLocation={'documentacao'} />
    <AppliedRoute path="/work" exact component={Trabajo} props={childProps} pLocation={'trabalho'} />
    <AppliedRoute path="/health" exact component={Salud} props={childProps} pLocation={'saude'} />
    <AppliedRoute path="/education" exact component={Educacion} props={childProps} pLocation={'educacao'} />
    
    <AppliedRoute path="/gallery" exact component={Galeria} props={childProps} />
    <AppliedRoute path="/project-hermanitos" exact component={ProyectoHermanitos} props={childProps} />
    <AppliedRoute path="/offer-employmento" exact component={OfrecerEmpleo} props={childProps} />
    <AppliedRoute path="/contact" exact component={Contacto} props={childProps} />

    {/* Enlaces */}
    <AppliedRoute path="/galeria" exact component={Galeria} props={childProps} />
    <UnauthenticatedRoute path="/login" exact component={Login} props={childProps} />
    <AuthenticatedRoute path="/admin" exact component={Admin} props={childProps} />
    
    <Route component={Error404} />
  </Switch>;