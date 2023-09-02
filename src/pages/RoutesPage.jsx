import React, { Fragment } from 'react';
import { Navigate, Route, Routes } from "react-router-dom";
import UserSign from './UserSign';
import HomePage from './HomePage';


function RoutesPage() {
  return (
    <Fragment>
        <Routes>
            <Route path="/"  element={<HomePage />}/>
            <Route path="/login"  element={<UserSign type={"Iniciar Sesión"}/>}/>
            <Route path="/register"  element={<UserSign type={"Registrarse"}/>}/>
        </Routes>
    </Fragment>
    
  )
}

export default RoutesPage;