import { Link } from 'react-router-dom';
import { Carousel, Image } from 'react-bootstrap';
import Message from './Message';
import { useGetTopProductsQuery } from '../slices/productsApiSlice';

const ProductCarousel = () => {
  const { data: products, isLoading, error } = useGetTopProductsQuery();

  return isLoading ? null : error ? (
    <Message variant='danger'>{error?.data?.message || error.error}</Message>
  ) : (
    <Carousel pause='hover' className='hero-banner border-0 p-0' controls={false} indicators={true}>
      {products.map((product) => (
        <Carousel.Item key={product._id} style={{ minHeight: '400px' }}>
          <Link to={`/product/${product._id}`} className='text-decoration-none'>
            <div className='row w-100 h-100 align-items-center m-0 p-4 p-md-5'>
              <div className='col-md-6 hero-content text-md-start text-center mb-4 mb-md-0'>
                <h1 className='hero-title text-gradient'>{product.name}</h1>
                <p className='hero-subtitle mb-4 text-muted'>Experience premium quality. Get it now before it runs out!</p>
                <h3 className='mb-4 fw-bold'>${product.price}</h3>
                <span className='btn bg-gradient-btn px-5 py-3 rounded-pill fs-5'>Shop Now</span>
              </div>
              <div className='col-md-6 text-center d-flex justify-content-center'>
                <div className="bg-white rounded-circle p-4 d-flex align-items-center justify-content-center" style={{ width: '300px', height: '300px', boxShadow: '0 20px 40px rgba(0,0,0,0.4)' }}>
                  <Image 
                    src={product.image} 
                    alt={product.name} 
                    fluid 
                    style={{ maxHeight: '220px', objectFit: 'contain' }} 
                  />
                </div>
              </div>
            </div>
          </Link>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default ProductCarousel;
