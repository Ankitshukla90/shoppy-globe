const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Product = require('./models/Product');
const connectDB = require('./config/db');

dotenv.config();
connectDB();

const importData = async () => {
  try {
    console.log('Fetching from DummyJSON...');
    const response = await fetch('https://dummyjson.com/products?limit=30');
    const data = await response.json();
    
    await Product.deleteMany();

    const products = data.products.map(p => ({
        title: p.title,
        description: p.description,
        price: p.price,
        stock: p.stock,
        category: p.category,
        thumbnail: p.thumbnail
    }));

    await Product.insertMany(products);
    console.log('✅ Data Imported!');
    process.exit();
  } catch (error) {
    console.error(`❌ Error: ${error.message}`);
    process.exit(1);
  }
};

importData();