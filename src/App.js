//import logo from './logo.svg'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import './App.css'; 
import NavbarFooter from './components/NavbarFooter'; 
import Home from './components/Home'; 
import Products from './components/Products'; 
import Cart from './components/Cart'; 
import NotFound from './components/NotFound'; 
import Login from './components/Login'; 
import { UserProvider } from './contexts/UserContext'; 
import AuthChecker from './components/AuthChecker'; 
import ProductDetails from './components/ProductDetails';
// import { Provider } from 'react-redux';
// import store from './redux/store';

function App() {
  return (
    <div className="App">
      <UserProvider>
        <Router>
          {/* <Provider store={store}> */}
            <Routes>
              <Route path="/" element={<NavbarFooter />}>
                <Route index element={<Home />} /> 
                <Route path="/shop" element={<Products />} /> 
                <Route path="/shop/:id" element={<ProductDetails />} /> 
                <Route path="/cart" element={
                  <AuthChecker>
                    <Cart />
                  </AuthChecker> 
                } /> 
                <Route path="/login" element={<Login />} /> 
                <Route path="*" element={<NotFound />} /> 
              </Route> 
            </Routes> 
          {/* </Provider>  */}
        </Router> 
      </UserProvider> 
    </div> 
  );
}

export default App;