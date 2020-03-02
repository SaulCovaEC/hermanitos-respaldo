import React from "react";
import { Route, Switch } from "react-router-dom";
import AppliedRoute from "./AppliedRoute";
import AuthenticatedRoute from "./AuthenticatedRoute";
import UnauthenticatedRoute from "./UnauthenticatedRoute";
import Inicio from "../pages/";
import Login from "../pages/Login";
import Admin from "../pages/Admin";
import Curriculos from "../pages/Curriculos";
import CadastrarCurriculo from "../pages/CadastrarCurriculo";
import TicketsEstado from "../pages/TicketsEstado";
import Error404 from "../pages/Error404";

export default ({ childProps }) =>
  <Switch>
    <AppliedRoute path="/" exact component={Inicio} props={childProps} />
    <UnauthenticatedRoute path="/login" exact component={Login} props={childProps} />
    <AuthenticatedRoute path="/admin" exact component={Admin} props={childProps} />
    <AuthenticatedRoute path="/admin/curriculos" exact component={Curriculos} props={childProps} />
    <AuthenticatedRoute path="/admin/cadastrar-curriculo" exact component={CadastrarCurriculo} props={childProps} />
    <AuthenticatedRoute path="/admin/tickets/:status" exact component={TicketsEstado} props={childProps} />
    <Route component={Error404} />
  </Switch>;