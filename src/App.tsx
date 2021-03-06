import {Routes, Route, BrowserRouter} from 'react-router-dom';
import Home from './pages/home';
import RegisterPage from './pages/registerPage';
import SignInPage from './pages/signInPage';
import DetailPage from './pages/detailPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/register" element={<RegisterPage/>}/>
        <Route path="/signIn" element={<SignInPage/>}/>
        <Route path="/detail/:touristRouteId" element={<DetailPage/>}/>
        <Route path="*" element={<h1>404 not found</h1>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App
