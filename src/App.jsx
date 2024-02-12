import "./App.css";
import Footer from "./Components/Footer/Footer";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./Components/Pages/Shop";
import ShopCategory from "./Components/Pages/ShopCategory";
import kid_banner from './Components/Assets/banner_kids.png'
import Product from "./Components/Pages/Product";
import ProductDisplay from "./Components/ProductDisplay/ProductDisplay";
import Cart from './Components/Pages/Cart'
import LoginSignup from "./Components/Pages/LoginSignup";
import Login from "./Components/Pages/Login";
function App() {
  return (
    <>
      <div>
        <BrowserRouter>
        <div>
          <Navbar />
          <Routes>
        
            <Route path="/" element={<Shop />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/clothes" element={<ShopCategory banner={kid_banner} category="clothes"/>} />
            <Route path="/nursery" element={<ShopCategory banner={kid_banner} category="nursery" />}/>
            <Route path="/nutrition" element={<ShopCategory banner={kid_banner} category="nutrition" />}/>
            <Route path='/toys' element={<ShopCategory banner={kid_banner} category="toys" />}/>
            <Route path="/product" element={<Product />}>
              <Route path=":id" element={<ProductDisplay />} />
            </Route>
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Login />} />
            <Route path="/loginsignup" element={<LoginSignup />} />
          </Routes>
          <Footer />
          </div>
          
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
