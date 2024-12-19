import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import HomePage from './pages/home.page';
import OrderPage from './pages/order.page';
import ProductPage from './pages/product.page';
import LayoutComponent from './components/app/layout.component';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        {/* "/" will be navigated to "/sshop" */}
        <Route index
          element={<Navigate to='/sshop' />} />
        {/* define the context-path */}
        <Route path='sshop'>
          {/* define App and Outlet */}
          <Route
            element={<LayoutComponent />}>
            {/* "/sshop" will be navigated to "/homepage" */}
            <Route index
              element={<Navigate to='/sshop/homepage' />} />
            {/* define HomePage */}
            <Route path='homepage'
              element={<HomePage />} />
            {/* define OrderPage */}
            <Route path='order'
              element={<OrderPage />} />
            {/* define ProductPage */}
            <Route path='product'
              element={<ProductPage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
