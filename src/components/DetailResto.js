import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchRestaurants } from '../api';
import { Col, Container, Row } from 'react-bootstrap';

function DetailResto() {
    const { location_id } = useParams();
    const [restaurant, setRestaurant] = useState(null);

    useEffect(() => {
        const fetchRestaurantById = async () => {
            const restaurantData = await fetchRestaurants(); // Ubah sesuai dengan fungsi pengambilan data Anda
            const selectedRestaurant = restaurantData.find(item => item.location_id === location_id);
            setRestaurant(selectedRestaurant);
        };
        fetchRestaurantById();
    }, [location_id]);

    return (
        <div>
          <Container>
            <h2>Restaurant Detail</h2>
            {restaurant && (
                <div>
                  <Row>
                    <Col >
                    <img src={restaurant.photo.images.original.url} alt={restaurant.name} style={{width: '600px', height: '500px'}} />
                    </Col>
                    <Col>
                      <h2>Name: {restaurant.name}</h2>
                      <h4>Rating: {restaurant.rating}</h4>
                      <p>City: {restaurant.address_obj.city}</p>
                      <p>Country: {restaurant.address_obj.country}</p>
                      <p>Description: {restaurant.description}</p>

                    </Col>
                  </Row>
                    
                    {/* Tampilkan informasi detail restoran berdasarkan restaurant */}
                </div>
            )}
          </Container>
        </div>
    );
}

export default DetailResto;
