import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Particle from "react-tsparticles";

import './App.css';
import particlesConfig from "./components/assets/particlesConfig.json";

import Home from './components/Home';
import SignUp from './components/Authentication/SignUp';
import LogIn from './components/Authentication/LogIn';
import ResetPassword from './components/Authentication/ResetPassword';
import ResetPasswordConfirm from './components/Authentication/ResetPasswordConfirm';
import Activate from './components/Authentication/Activate';
import ThinkKeywords from './components/ThinkKeywords';
import ShowKeywordsDuringEight from './components/ShowKeywordsDuringEight';
import WriteOpinion from './components/WriteOpinion';
import ViewAllPost from './components/ViewAllPost';
import Notification from './components/Notification';

import { Provider } from 'react-redux';
import store from './store'


function App() {
  return (
    // <>
    <Provider store={store}>
      <Router>
        <Particle params={particlesConfig} className="App-particles__container" />
        <Routes>
          <Route path="" element={<Home />} />

          <Route path="login" element={<LogIn />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="reset_password" element={<ResetPassword />} />
          <Route path="password/reset/confirm/:uid/:token" element={<ResetPasswordConfirm />} />
          <Route path="/activate/:uid/:token" element={<Activate />} />
          
          <Route path="thinkkeywords" element={<ThinkKeywords />} />
          <Route path="showkeywordsduringeight" element={<ShowKeywordsDuringEight />} />
          <Route path="writeopinion" element={<WriteOpinion />} />
          <Route path="viewallpost" element={<ViewAllPost />} />
          <Route path="notification" element={<Notification />} />
        </Routes>
      </Router>
    </Provider>
    // </>
  );
}

export default App;
