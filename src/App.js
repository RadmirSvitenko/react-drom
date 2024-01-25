import { ThemeProvider } from '@emotion/react';
import AdminLayout from 'layout/AdminLayout';
import MainLayout from 'layout/MainLayout';
import Admin from 'pages/admin/Admin';
import Cart from 'pages/cart/Cart';
import Catalog from 'pages/catalog/Catalog';
import Contacts from 'pages/contacts/Contacts';
import MainPage from 'pages/mainPage/MainPage';
import OurStory from 'pages/our-story/OurStory';
import Payment from 'pages/payment/Payment';
import ProductDetails from 'pages/productDetails/ProductDetails';
import Reviews from 'pages/reviews/Reviews';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import store from 'store';
import theme from 'theme';

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route element={<MainLayout />}>
              <Route path="/" element={<MainPage />} />
              <Route path="/our-story" element={<OurStory />} />
              <Route path="/reviews" element={<Reviews />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/catalog/:id" element={<ProductDetails />} />
              <Route path="/payment" element={<Payment />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/catalog" element={<Catalog />} />
            </Route>

            <Route element={<AdminLayout />}>
              <Route path="/admin" element={<Admin />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
