import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { OrderProvider } from './contexts/OrderContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import Order from './pages/Order';
import MyOrders from './pages/MyOrders';
import Gallery from './pages/Gallery';
import Contacts from './pages/Contacts';
import Auth from './pages/Auth';
import Profile from './pages/Profile';

function App() {
  return (
    <AuthProvider>
      <OrderProvider>
        <Router>
          <div className="min-h-screen bg-gray-50">
            <Header />
            <main className="flex-1">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/services" element={<Services />} />
                <Route path="/services/:id" element={<ServiceDetail />} />
                <Route path="/order" element={<Order />} />
                <Route path="/order/:serviceId" element={<Order />} />
                <Route path="/my-orders" element={<MyOrders />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="/auth" element={<Auth />} />
                <Route path="/profile" element={<Profile />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </OrderProvider>
    </AuthProvider>
  );
}

export default App;