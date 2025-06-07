react
import React from 'react';
import { motion } from 'framer-motion';
import './styles/global.css'; 
import ProductCard from './components/ProductCard';

const App = () => {
  return (
    <div className="app-container">
      <header>
        <div className="logo">EcoLife</div>
        <nav>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#products">Products</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <section id="home" className="hero-section">
          <div className="hero-content">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Sustainable Living
            </motion.h1>
            <p>Discover eco-friendly products for a healthier planet.</p>
            <button className="cta-button">Shop Now</button>
          </div>
        </section>

        <section id="products" className="products-section">
          <h2>Featured Products</h2>
          <div className="product-cards">
            <ProductCard
              image="assets/images/product1.jpg"
              title="Reusable Bottle"
              description="Durable, BPA-free, and ocean-friendly."
            />
            <ProductCard
              image="assets/images/product2.jpg"
              title="Organic Tote Bag"
              description="Made from 100% certified organic cotton."
            />
            <ProductCard
              image="assets/images/product3.jpg"
              title="Bamboo Utensil Set"
              description="Sustainable and biodegradable."
            />
          </div>
        </section>

        <section id="about" className="about-section">
          <h2>About Us</h2>
          <p>
            EcoLife is committed to providing sustainable products that help
            you reduce your environmental impact. We believe in a future where
            everyone lives in harmony with nature.
          </p>
        </section>

        <section id="contact" className="contact-section">
          <h2>Contact Us</h2>
          <p>Email: info@ecolife.com</p>
          <p>Phone: +123 456 7890</p>
        </section>
      </main>

      <footer>
        <p>&copy; 2024 EcoLife. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;

