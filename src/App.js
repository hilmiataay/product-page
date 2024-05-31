import React, { useState, useEffect } from 'react';
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import SecondaryNavigation from "./components/navigation/secondary-navigation/SecondaryNavigation";
import TopNavigation from "./components/navigation/top-navigation/TopNavigation";
import Breadcrumbs from "./components/section/breadcrumbs/Breadcrumbs";
import ProductDescriptionTabs from "./components/section/description/ProductDescriptionTabs";
import NewsletterSubscription from "./components/section/newsletter/NewsletterSubscription";
import ProductDisplay from "./components/section/product/ProductDisplay";
import RelatedProducts from "./components/section/related-products/RelatedProducts";
import RelatedProductsData from './productData.json';

// Main App component
function App() {
  // State variables
  const [products, setProducts] = useState(RelatedProductsData);
  const [favoriteCount, setFavoriteCount] = useState(products.filter(p => p.isFavorite).length);
  const [cartCount, setCartCount] = useState(products.filter(p => p.isCart).length);
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Effect to set selected product initially
  useEffect(() => {
    if (products.length > 0) {
      setSelectedProduct(products[0]);
    }
  }, [products]);

  // Toggle favorite status of a product
  const toggleFavorite = (id) => {
    const updatedProducts = products.map(product =>
      product.id === id ? { ...product, isFavorite: !product.isFavorite } : product
    );
    setProducts(updatedProducts);
    setFavoriteCount(updatedProducts.filter(product => product.isFavorite).length);
  };

  // Toggle cart status of a product
  const toggleCart = (id) => {
    const updatedProducts = products.map(product =>
      product.id === id ? { ...product, isCart: !product.isCart } : product
    );
    setProducts(updatedProducts);
    setCartCount(updatedProducts.filter(product => product.isCart).length);
  };

  // Handle product click event
  const handleProductClick = (id) => {
    const clickedProduct = products.find(product => product.id === id);
    if (clickedProduct) {
      setSelectedProduct(clickedProduct);
    }
  };

  // Render
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <nav>
        <TopNavigation favoriteCount={favoriteCount} cartCount={cartCount} products={products} />
        <SecondaryNavigation />
      </nav>
      <section>
        <Breadcrumbs />
        <ProductDisplay
          selectedProduct={selectedProduct}
          toggleCart={toggleCart} // Pass toggleCart function to ProductDisplay component
        />
        <ProductDescriptionTabs />
        <RelatedProducts
          products={products}
          toggleFavorite={toggleFavorite}
          toggleCart={toggleCart}
          handleProductClick={handleProductClick}
        />
        <NewsletterSubscription />
      </section>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;

