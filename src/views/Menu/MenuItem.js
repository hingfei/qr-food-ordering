import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import {Row, Col} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Icon from '@mui/material/Icon';
import "./MenuItem.css";

function MenuItem(props) {
    return (
        <div>
            <CardGroup>
                <Card>
                    <Row>
                        <Col md = "auto">
                        <Card.Img variant="top" src='https://www.twopeasandtheirpod.com/wp-content/uploads/2019/06/Easy-Green-Salad-4-500x375.jpg' style={{width:'250px'}}></Card.Img>
                        </Col>
                        <Col>
                        <Card.Body>
                        <Card.Title>Salad</Card.Title>
                        <Card.Text>Lorem ipsum dolor sit amet...</Card.Text>
                            <br/>
                            <Card.Text>Price: 5000$</Card.Text>

                        </Card.Body>
                        </Col>
                        <Col xs lg = "2" className= "AddButton">
                                <Button size={'lg'}>
                                    <Icon>add</Icon>
                                </Button>
                        </Col>
                    </Row>
                </Card>
                <Card>
                    <Row>
                        <Col md = "auto">
                            <Card.Img variant="top" src='https://www.twopeasandtheirpod.com/wp-content/uploads/2019/06/Easy-Green-Salad-4-500x375.jpg' style={{width:'250px'}}></Card.Img>
                        </Col>
                        <Col>
                            <Card.Body>
                                <Card.Title>Salad</Card.Title>
                                <Card.Text>Lorem ipsum dolor sit amet...</Card.Text>
                                <br/>
                                <Card.Text>Price: 5000$</Card.Text>

                            </Card.Body>
                        </Col>
                        <Col xs lg = "2" className= "AddButton">
                            <Button size={'lg'}>
                                <Icon>add</Icon>
                            </Button>
                        </Col>
                    </Row>
                </Card>

            </CardGroup>

        </div>
    );
}

export default MenuItem;