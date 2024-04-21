import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import CounterPage from './pages/CounterPage';
import FormPage from './pages/FormPage';
import EditorPage from './pages/EditorPage';
import SignInPage from './pages/SignInPage';
import NavLink from './Components/Navlink';
import PrivateRoutes from './Components/PrivateRoutes';
import SignIn from './Components/googleSignIn/SignIn';
import LogoutPage from './pages/LogoutPage';

function App() {
  return (
    <div className='app'>
      <BrowserRouter>
        <NavLink />
        <Routes>
          {/* Route for SignIn page */}
          <Route path='/signin' element={<SignIn />} />
          
          {/* Protected routes wrapped inside PrivateRoutes */}
          <Route element={<PrivateRoutes />}>
            <Route path='/counter' element={<CounterPage />} />
            <Route path='/form' element={<FormPage />} />
            <Route path='/editor' element={<EditorPage />} />
            <Route path='/logout' element={<LogoutPage />} />
          </Route>

          {/* If needed, add public routes here outside of PrivateRoutes */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
