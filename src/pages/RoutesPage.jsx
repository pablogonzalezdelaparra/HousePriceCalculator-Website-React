import React, { Fragment, createContext } from 'react';
import { Navigate, Route, Routes } from "react-router-dom";
import UserSign from './UserSign';
import HomePage from './HomePage';

import UserProvider from '../providers/UserProvider';
export const UserContext = createContext();

function RoutesPage() {
  return (
    <Fragment>
        <UserProvider>
          <Routes>
              <Route path="/"  element={<HomePage />}/>
              <Route path="/login"  element={<UserSign type={"Iniciar Sesión"}/>}/>
              <Route path="/register"  element={<UserSign type={"Registrarse"}/>}/>
          </Routes>
        </UserProvider>
    </Fragment>
    
  )
}

export default RoutesPage;