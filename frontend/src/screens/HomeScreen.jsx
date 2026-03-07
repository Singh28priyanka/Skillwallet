import { useState, useMemo } from 'react';
import { Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useGetProductsQuery } from '../slices/productsApiSlice';
import { Link } from 'react-router-dom';
import Product from '../components/Product';
import Loader from '../components/Loader';
import Message from '../components/Message';
import Paginate from '../components/Paginate';
import ProductCarousel from '../components/ProductCarousel';
import Meta from '../components/Meta';

const HomeScreen = () => {
  const { pageNumber, keyword } = useParams();
  const [selectedCategory, setSelectedCategory] = useState('All Products');

  const { data, isLoading, error } = useGetProductsQuery({
    keyword,
    pageNumber,
  });

  // Extract unique categories from data
  const categories = useMemo(() => {
    if (!data?.products) return ['All Products'];
    const uniqueCats = new Set(data.products.map(p => p.category));
    return ['All Products', ...Array.from(uniqueCats)];
  }, [data]);

  // Filter products based on selected category
  const displayedProducts = useMemo(() => {
    if (!data?.products) return [];
    if (selectedCategory === 'All Products') return data.products;
    return data.products.filter(p => p.category === selectedCategory);
  }, [data, selectedCategory]);

  return (
    <>
      {!keyword ? (
        <ProductCarousel />
      ) : (
        <Link to='/' className='btn btn-light mb-4'>
          Go Back
        </Link>
      )}
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>
          {error?.data?.message || error.error}
        </Message>
      ) : (
        <>
          <Meta />
          <h1 className="mb-4">Latest Products</h1>
          
          {/* Category Filter Pills (Functional) */}
          <div className="d-flex align-items-center mb-5 pb-2" style={{ overflowX: 'auto', gap: '1rem' }}>
            {categories.map((cat, index) => (
              <span 
                key={index} 
                className={`category-pill ${selectedCategory === cat ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </span>
            ))}
          </div>

          <Row className="g-4 mb-5">
            {displayedProducts.length > 0 ? (
              displayedProducts.map((product) => (
                <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                  <Product product={product} />
                </Col>
              ))
            ) : (
              <Message>No products found in this category.</Message>
            )}
          </Row>
          <Paginate
            pages={data.pages}
            page={data.page}
            keyword={keyword ? keyword : ''}
          />
        </>
      )}
    </>
  );
};

export default HomeScreen;
