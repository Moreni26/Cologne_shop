import { BrowserRouter, Routes, Route } from  "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import CartItem from "./components/CartItem";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Product from "./components/Product";
import Sidebar from "./components/Sidebar";



export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Product/:id" element={<ProductDetails />} />
      </Routes>
      <Sidebar />
      <Footer />
    </BrowserRouter>
  );
}


