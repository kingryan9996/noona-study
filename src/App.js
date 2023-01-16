import './App.css';
import Homepage from './component/Homepage';
import Aboutpage from './component/Aboutpage';
import Productpage from './component/Productpage';
import { Routes, Route, Navigate } from 'react-router-dom';
//여기서 적는 Navigate는 리액트 훅인 useNavigate가 아닌
//컴포넌트인 Navigate임 //리다이렉트를 도와주는 Navigate 컴포넌트 
import Productdetailpage from './component/Productdetailpage';
import LoginPage from './component/LoginPage';
import { useState } from 'react';
import UserPage from './component/UserPage';




function App() {
  const [authenticate, setAuthenticate] = useState(false)
  const PrivateRoute = () => {
    return authenticate == true ? <UserPage /> : <Navigate to="/login" />
  }
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/about' element={<Aboutpage />} />
        <Route path='/products' element={<Productpage />} />
        <Route path='/products/:id/:num' element={<Productdetailpage />} />
        {/* products/ :id <- 파라미터값이므로 어떤값이든 상관없음 */}
        <Route path='/login' element={<LoginPage />} />
        <Route path='/user' element={<PrivateRoute />} />

      </Routes>
    </div>
  );
}

export default App;
