import React, { useState } from 'react';
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

function App() {
  // State to manage products, favorite count, and cart count
  const [products, setProducts] = useState(RelatedProductsData);
  const [favoriteCount, setFavoriteCount] = useState(products.filter(p => p.isFavorite).length);
  const [cartCount, setCartCount] = useState(products.filter(p => p.isCart).length);

  // Function to toggle favorite status of a product
  const toggleFavorite = (id) => {
    const updatedProducts = products.map(product =>
      product.id === id ? { ...product, isFavorite: !product.isFavorite } : product
    );
    setProducts(updatedProducts);
    setFavoriteCount(updatedProducts.filter(product => product.isFavorite).length);
  };

  // Function to toggle cart status of a product
  const toggleCart = (id) => {
    const updatedProducts = products.map(product =>
      product.id === id ? { ...product, isCart: !product.isCart } : product
    );
    setProducts(updatedProducts);
    setCartCount(updatedProducts.filter(product => product.isCart).length);
  };

  return (
    <div className="App">
      {/* Header section */}
      <header>
        <Header />
      </header>
      {/* Navigation section */}
      <nav>
        <TopNavigation favoriteCount={favoriteCount} cartCount={cartCount} products={products} />
        <SecondaryNavigation />
      </nav>
      {/* Main content section */}
      <section>
        <Breadcrumbs />
        <ProductDisplay />
        <ProductDescriptionTabs />
        <RelatedProducts products={products} toggleFavorite={toggleFavorite} toggleCart={toggleCart} />
        <NewsletterSubscription />
      </section>
      {/* Footer section */}
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
