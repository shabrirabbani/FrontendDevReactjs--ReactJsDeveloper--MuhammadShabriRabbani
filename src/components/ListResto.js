import { useEffect, useState } from  "react"
import {Button, Card, Container, Row, Col} from 'react-bootstrap'
import profilimg from "../assets/profil.jpeg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import { fetchRestaurants } from "../api";
import "../style/style.css"
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";


function ListResto(){
    const [resto, setResto] = useState([])

    useEffect(() => {
        const fetchRestoData = async () => {
            const restaurantData = await fetchRestaurants();
            setResto(restaurantData);
        };
        fetchRestoData();
    }, []);


    return(
        <Container>
        <div>
            <Row>
                <Col>
                <h1>Restaurants</h1>
                </Col>
                </Row>
                <Row>
                <Col>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </Col>
                <Col></Col>
            </Row>
        </div>

        <div>
            <SearchBar/>
        </div>

            <div className="mt-5 mb-5">
                 <h3>All Restaurants</h3>
            </div>
            <Row>
                {resto.map((result, index) => {
                    return (
                    <Col md={3}  key={index} >
                        <Card className="mb-5 kartu" style={{ width: '18rem' }}>
                        {result.photo?.images?.original?.url && (
                        <Card.Img className="foto" variant="top"src={result.photo.images.original.url || {profilimg}} /> )}                
                        <Card.Body>
                            <Card.Title>{result.name}</Card.Title>
                            <Card.Text>
                                {Array.from({ length: Math.floor(result.rating) }).map((_, i) => (
                                <FontAwesomeIcon key={i} icon={faStar} className="star" />
                                ))}
                                {result.rating % 1 !== 0 && (
                                    <FontAwesomeIcon icon={faStarHalfAlt} className="star" />
                                )} 
                            </Card.Text>
                            <Row>
                            <Col><Card.Text className="placetext">{result.location_string} {result.price_level}</Card.Text></Col>
                            <Col><Card.Text className="cardtext">{result.open_now_text}</Card.Text></Col>
                            </Row>          
                        </Card.Body>
                        <Button className="tombol">
                            <Link className="text-white text-decoration-none" to={`/detail/${result.location_id}`}>Learn More</Link>
                        </Button>
                        </Card>
                    </Col>
                    )
                })}
                
            </Row>
        </Container>
        
    );
}

export default ListResto