//import logo from './logo.svg'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import './App.css'; 
import NavbarFooter from './components/NavbarFooter'; 
import Home from './components/Home'; 
import Products from './components/Products'; 
import Cart from './components/Cart'; 
import NotFound from './components/NotFound'; 
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<NavbarFooter />}>
            <Route index element={<Home />} /> 
            <Route path="/shop" element={<Products />} /> 
            <Route path="/cart" element={<Cart />} /> 
            <Route path="/login" element={<Login />} /> 
            <Route path="*" element={<NotFound />} /> 
          </Route> 
        </Routes> 
      </Router> 
    </div> 
  );
}

export default App;