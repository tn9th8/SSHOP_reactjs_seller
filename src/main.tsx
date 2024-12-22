import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import LayoutPage from './pages/layout/layout.page';
import './style.scss';
import HomePage from './pages/home/home.page';
import ManageOrders from './pages/order/manage-orders.page';
import ManageCancellations from './pages/order/manage-cancellations.page';
import ManageProducts from './pages/product/manage-products.page';
import ProductRatings from './pages/product/product-ratings.page';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        {/* "/" will be navigated to "/homepage" */}
        <Route index element={<Navigate to='/homepage' />} />
        {/* render layout including outlet */}
        <Route element={<LayoutPage />}>
          {/* render homepage */}
          <Route path='homepage' element={<HomePage />} />
          {/* render order pages */}
          <Route path='order'>
            <Route index element={<Navigate to='/order/manage' />} />
            <Route path='manage' element={<ManageOrders />} />
            <Route path='cancellation' element={<ManageCancellations />} />
          </Route>
          {/* render product pages */}
          <Route path='product'>
            <Route index element={<Navigate to='/product/manage' />} />
            <Route path='manage' element={<ManageProducts />} />
            <Route path='rating' element={<ProductRatings />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode >
)
