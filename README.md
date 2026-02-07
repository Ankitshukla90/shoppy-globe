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
git clone <https://github.com/Ankitshukla90/shoppy-globe.git>

cd shoppy-globe


Install Dependencies:
npm install


Run the Development Server:
npm run dev

Click the link shown in the terminal (usually http://localhost:5173).


ShoppyGlobe Backend API-

This is the backend REST API for the ShoppyGlobe E-commerce application. It is built using Node.js, Express, and MongoDB. It provides robust features including User Authentication (JWT), Product Management, and a fully functional Shopping Cart with protected routes.

🚀 Tech Stack

Runtime: Node.js

Framework: Express.js

Database: MongoDB (with Mongoose)

Authentication: JSON Web Tokens (JWT) & bcryptjs

Environment Management: dotenv

📂 Folder Structure

backend/
├── src/
│   ├── config/         # Database connection logic
│   ├── controllers/    # Route logic (Auth, Cart, Products)
│   ├── middleware/     # Auth protection & Error handling
│   ├── models/         # Mongoose Schemas (User, Product, Cart)
│   ├── routes/         # API Route definitions
│   ├── seed.js         # Script to populate DB with dummy data
│   └── server.js       # App entry point
├── .env                # Environment variables
└── package.json        # Dependencies and scripts


🛠️ Installation & Setup

1. Prerequisites

Ensure you have the following installed locally:

Node.js

MongoDB Community Server

2. Install Dependencies

Navigate to the backend folder and install the required packages:

cd backend
npm install


3. Environment Variables

Create a .env file in the backend root directory and add the following:

PORT=5000
MONGO_URI=mongodb://localhost:27017/shoppyGlobe
JWT_SECRET=your_super_secret_key_123


4. Database Seeding

Populate your local MongoDB with initial product data (fetched from DummyJSON):

npm run seed


You should see a message: "✅ Data Imported Successfully!"

5. Start the Server

Run the development server using Nodemon:

npm run dev


Server will start at http://localhost:5000


⚡ Testing

This API has been tested using Thunder Client in VS Code.
Screenshots of all successful API responses (Register, Login, CRUD operations) are included in the submission documentation in word document named ShoppyGlobe API Documentation.




Github Link: https://github.com/Ankitshukla90/shoppy-globe





Node Modules: The node_modules folder has been excluded from the submission to reduce file size. Please run npm install to regenerate it.

Ankit Shukla

