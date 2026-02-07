ShoppyGlobe E-commerce Application
ShoppyGlobe is a fully functional, responsive e-commerce application built with React (Vite). It demonstrates modern React practices including Redux Toolkit for state management, React Router for navigation, Custom Hooks for logic reuse, and Lazy Loading for performance optimization.
The application fetches real-time product data from the DummyJSON API and allows users to browse products, search via a global filter, view details, manage a shopping cart, and perform a mock checkout.


Tech Used-
Framework: React (Vite)

State Management: Redux Toolkit (@reduxjs/toolkit, react-redux)

Routing: React Router DOM (createBrowserRouter)

Styling: Tailwind CSS & Lucide React (Icons)

Data Fetching: Native Fetch API with Custom Hooks


Features & Requirements-
Component Structure & Architecture

Vite Setup: Project initialized using npm create vite@latest.

Modular Components: Over 12+ separate JSX files organized in a scalable folder structure (src/components/).

Key Components: Header, ProductList, ProductItem, ProductDetail, Cart, CartItem, Checkout, NotFound.

2. State Management (Redux Toolkit)

Cart Management: Global state handles adding items, removing items, and updating quantities (increment/decrement).

Search Filter: Global search state filters the Product List in real-time.

Store Configuration: properly set up with configureStore.

3. Data Fetching & Hooks

useFetch Custom Hook: A reusable hook created to handle loading, error, and success states for API calls.

API Integration: Fetches data from https://dummyjson.com/products.

Error Handling: Graceful error messages displayed if data fetching fails.

4. Routing (React Router)

Data Router: Implemented using createBrowserRouter (or createHashRouter for deployment compatibility).

Dynamic Routes: product/:id route fetches specific product details.

Navigation: Seamless transitions between Home, Cart, and Checkout.

404 Page: Custom NotFound component for invalid URLs.

5. Performance Optimization

Code Splitting: Routes are loaded lazily using React.lazy() and wrapped in Suspense with a fallback Loader.





Project Structure-

shoppy-globe/
├── src/
│   ├── components/
│   │   ├── Cart/
│   │   │   ├── Cart.jsx
│   │   │   ├── CartItem.jsx
│   │   │   └── CartSummary.jsx
│   │   ├── Checkout/
│   │   │   └── Checkout.jsx
│   │   ├── Header/
│   │   │   ├── Header.jsx
│   │   │   └── SearchInput.jsx
│   │   ├── Pages/
│   │   │   └── NotFound.jsx
│   │   ├── Product/
│   │   │   ├── ProductDetail.jsx
│   │   │   ├── ProductItem.jsx
│   │   │   └── ProductList.jsx
│   │   └── common/
│   │       ├── ErrorMessage.jsx
│   │       └── Loader.jsx
│   ├── hooks/
│   │   └── useFetch.js
│   ├── store/
│   │   ├── cartSlice.js
│   │   ├── searchSlice.js
│   │   └── store.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── tailwind.config.js
└── vite.config.js



Installation & Setup=
Follow these steps to run locally:

Clone the repository:
git clone <>
cd shoppy-globe


Install Dependencies:
npm install


Run the Development Server:
npm run dev

Click the link shown in the terminal (usually http://localhost:5173).



Node Modules: The node_modules folder has been excluded from the submission to reduce file size. Please run npm install to regenerate it.

Ankit Shukla
