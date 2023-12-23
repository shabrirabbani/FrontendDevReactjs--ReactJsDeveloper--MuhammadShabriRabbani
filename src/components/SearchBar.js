import React, { useState } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';

function SearchBar({ onFilterChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedPrice, setSelectedPrice] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleOpenChange = (e) => {
    setIsOpen(e.target.checked);
  };

  const handlePriceChange = (e) => {
    setSelectedPrice(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  // Call the onFilterChange callback to pass filter values to the parent component
  const applyFilters = () => {
    onFilterChange({ isOpen, selectedPrice, selectedCategory });
  };

  return (
    <div>
      <Container>
        <Row>
          <Col>Filter by</Col>
          <Col>
            <Form.Check
              type="switch"
              id="openSwitch"
              label="Open Now"
              checked={isOpen}
              onChange={handleOpenChange}
            />
          </Col>
          <Col>
            <Form.Select
              aria-label="Price"
              value={selectedPrice}
              onChange={handlePriceChange}
            >
              <option value="">Price</option>
              <option value="1">One</option>
            </Form.Select>
          </Col>
          <Col>
            <Form.Select
              aria-label="Categories"
              value={selectedCategory}
              onChange={handleCategoryChange}
            >
              <option value="">Categories</option>
              <option value="1">One</option>
            </Form.Select>
          </Col>
          <Col>
            <button onClick={applyFilters}>Apply Filters</button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default SearchBar;
