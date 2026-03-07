import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const SearchBox = () => {
  const navigate = useNavigate();
  const { keyword: urlKeyword } = useParams();

  // FIX: undefined urlKeyword handle karne ke liye fallback add kiya
  const [keyword, setKeyword] = useState(urlKeyword || '');

  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword) {
      navigate(`/search/${keyword.trim()}`);
      setKeyword('');
    } else {
      navigate('/');
    }
  };

  return (
    <Form onSubmit={submitHandler} className='d-flex align-items-center'>
      <Form.Control
        type='text'
        name='q'
        onChange={(e) => setKeyword(e.target.value)}
        value={keyword}
        placeholder='Search Products...'
        className='me-sm-2 ms-sm-5 mx-2 rounded-pill px-4 border-secondary text-white'
        style={{ backgroundColor: 'var(--bg-surface)' }}
      ></Form.Control>
      <button type='submit' className='btn bg-gradient-btn rounded-pill px-4 mx-2 border-0 text-white fw-bold'>
        Search
      </button>
    </Form>
  );
};

export default SearchBox;
