import { ThemeProvider } from '@emotion/react';
import AdminLayout from 'layout/AdminLayout';
import MainLayout from 'layout/MainLayout';
import Admin from 'pages/admin/Admin';
import Catalog from 'pages/catalog/Catalog';
import Contacts from 'pages/contacts/Contacts';
import MainPage from 'pages/mainPage/MainPage';
import OurStory from 'pages/our-story/OurStory';
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
              <Route path="/catalog/" element={<Catalog />} />
              <Route path="/catalog/:filter/:value" element={<Catalog />} />
              <Route path="/catalog/product/:id" element={<ProductDetails />} />
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
