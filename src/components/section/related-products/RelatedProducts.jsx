import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import RelatedProductsTitle from './RelatedProductsTitle';
import RelatedProductsCards from './card/RelatedProductsCards';
import Pagination from './Pagination';

// Define styled component for the main container
const MainDiv = styled.div`
  margin: 220px auto 150px auto; // Set margin for the main container

  /* Responsive styles */
  @media (max-width: 1024px) {
    margin: 120px auto 70px auto; // Adjust margin on smaller screens
  }

  @media (max-width: 992px) {
    margin: 20px auto 70px auto; // Adjust margin on even smaller screens
  }

  @media (max-width: 428px) {
    margin: 30px auto; // Further adjust margin on very small screens
  }
`;

export default function RelatedProducts({ products, toggleFavorite, toggleCart }) {
  // State for current page and number of products per page
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(4);

  // Update number of products per page based on window width
  useEffect(() => {
    const updateProductsPerPage = () => {
      const width = window.innerWidth;
      if (width >= 992) {
        setProductsPerPage(4);
      } else if (width >= 767) {
        setProductsPerPage(3);
      } else if (width >= 428) {
        setProductsPerPage(2);
      } else {
        setProductsPerPage(2);
      }
    };

    // Call the function initially and on window resize
    updateProductsPerPage();
    window.addEventListener('resize', updateProductsPerPage);
    return () => window.removeEventListener('resize', updateProductsPerPage);
  }, []);

  // Calculate indexes of first and last products on the current page
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(products.length / productsPerPage);

  return (
    <MainDiv>
      {/* Related products title */}
      <RelatedProductsTitle />
      {/* Related products cards */}
      <RelatedProductsCards currentProducts={currentProducts} toggleFavorite={toggleFavorite} toggleCart={toggleCart} />
      {/* Pagination */}
      <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} totalPages={totalPages} />
    </MainDiv>
  );
}
