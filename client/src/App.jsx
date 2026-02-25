import React, { useEffect } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom'
import LoginForm from './components/auth/LoginForm';
import RegisterUser from './components/auth/RegisterUser';
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Users from './components/users/Users'
import Feed from './components/tweet/Feed';
import LogoutPage from './components/auth/LogoutPage';
import PrivateRoute from './components/auth/PrivateRoute';
import Profile from './components/profile/Profile';
import AuthContextProvider from './context/AuthContext';
import Home from './components/layout/Home';
import SubscribeContextProvider from './context/SubscribeContext';
import MyHashtag from './components/tweet/MyHashtag';


const App = () => {

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const currentUrl = localStorage.getItem('currentUrl')
    // console.log(currentUrl);
    if (currentUrl == null) {
      navigate('/', { replace: true })
    } else {
      navigate(currentUrl, { replace: true });
    }
  }, [navigate])

  useEffect(() => {
    localStorage.setItem('currentUrl', location.pathname);
  }, [location.pathname])



  return (

    <div className="h-100 min-vh-100 d-flex flex-column h-100 bg-dark" >
      <SubscribeContextProvider>
        <AuthContextProvider>
          <Navbar />
          <div className="container mt-4 mb-4 d-flex jutify-content-between flex-column">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<LoginForm />} />
              <Route path="/register" element={<RegisterUser />} />
              <Route path="/users" element={<PrivateRoute><Users /></PrivateRoute>} />
              <Route path="/feed" element={<PrivateRoute><Feed /></PrivateRoute>} />
              <Route path="/profile/:id" element={<PrivateRoute><Profile /></PrivateRoute>} />
              <Route path="/myhashtag" element={<PrivateRoute><MyHashtag /></PrivateRoute>} />
              <Route path="/logout" element={<LogoutPage />} />
            </Routes>
          </div>
          <Footer />
        </AuthContextProvider>
      </SubscribeContextProvider>
    </div>
  );
}

export default App;
