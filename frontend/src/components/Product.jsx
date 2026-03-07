import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Rating from './Rating';

const Product = ({ product }) => {
  return (
    <Card className='product-card my-3 p-3'>
      <Link to={`/product/${product._id}`}>
        <Card.Img 
          src={product.image} 
          variant='top' 
          className="rounded"
          style={{ height: '200px', objectFit: 'cover', width: '100%' }} 
        />
      </Link>

      <Card.Body className='d-flex flex-column'>
        <Link to={`/product/${product._id}`}>
          <Card.Title as='div' className='product-title'>
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>

        <Card.Text as='div' className='mb-3'>
          <Rating
            value={product.rating}
            text={`${product.numReviews} reviews`}
          />
        </Card.Text>

        <Card.Text as='h3' className='product-price mt-auto'>
          ${product.price}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
