import React, { Suspense, lazy } from 'react';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import Header from './components/Header/Header';
import NotFound from './components/Pages/NotFound';
import Loader from './components/common/Loader';

// Lazy loading components
const ProductList = lazy(() => import('./components/Product/ProductList'));
const ProductDetail = lazy(() => import('./components/Product/ProductDetail'));
const Cart = lazy(() => import('./components/Cart/Cart'));
const Checkout = lazy(() => import('./components/Checkout/Checkout'));

const RootLayout = () => (
  <div className="min-h-screen bg-white text-gray-900 font-sans">
    <Header />
    <main className="fade-in">
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </main>
  </div>
);

// Define Routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <RootLayout><NotFound /></RootLayout>,
    children: [
      { index: true, element: <ProductList /> },
      { path: "product/:id", element: <ProductDetail /> },
      { path: "cart", element: <Cart /> },
      { path: "checkout", element: <Checkout /> }
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;