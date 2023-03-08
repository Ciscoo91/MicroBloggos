import React from 'react';
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import AuthContextProvider from './context/AuthContext';
import SubscribeContextProvider from './context/SubscribeContext';

import { Outlet } from 'react-router-dom';


const App = () => {

  return (

    <div className="h-100 min-vh-100 d-flex flex-column h-100 bg-dark" >
      <SubscribeContextProvider>
        <AuthContextProvider>
          <Navbar />
          <div className="container mt-4 mb-4 d-flex jutify-content-between flex-column">
            <Outlet />
          </div>
          <Footer />
        </AuthContextProvider>
      </SubscribeContextProvider>
    </div>
  );
}

export default App;
