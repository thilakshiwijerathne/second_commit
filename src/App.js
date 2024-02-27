import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
  
function App() {
  return (
    <div>
      
      <Router>
      <Navbar />  
        <Routes>
          <Route exact path='/' element={<Shop />} />
          <Route path='/Mens' element={<ShopCategory category="Men" />} />
          <Route path='/Women' element={<ShopCategory category="Women" />} />
          <Route path='/Kids' element={<ShopCategory category="Kids" />} />
          <Route path='/product/:productId' element={<Product />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<LoginSignup />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
