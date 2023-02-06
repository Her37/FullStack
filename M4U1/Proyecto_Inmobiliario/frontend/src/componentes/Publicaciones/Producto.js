import React from "react";
import "../../styles/galeria.css";
import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Producto = (props) => {
    return (

        <Container className="galeria">
            <Row>
                <Col>
                    <div>
                        <h3>{props.producto.tipo}</h3>
                        <h2>{props.producto.condicion} </h2>
                        <p class="p">{props.producto.descripcion} </p>
                        <p>{props.producto.direccion}</p>
                        <p>Ambientes: {props.producto.ambientes} </p>
                        <p>Dormitorios: {props.producto.dormitorios}</p>
                        <p>M2 Totales: {props.producto.superficie}</p>
                        <p><b>PRECIO: {props.producto.precio}</b></p>
                        <a href="/Map">VER</a>
                    </div>
                </Col>
                <Col>
                    <Carousel>
                        <Carousel.Item>
                            <img
                                className="d-block w-100, carrusel"
                                src={require(`../Publicaciones/img/imagen${props.producto.imagen1}.jpeg`)}
                                alt="Primera Foto"
                            />
                            <Carousel.Caption>
                                <p>
                                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                                </p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100, carrusel"
                                src={require(`../Publicaciones/img/imagen${props.producto.imagen2}.jpeg`)}
                                alt="Second slide"
                            />
                            <Carousel.Caption>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100, carrusel"
                                src={require(`../Publicaciones/img/imagen${props.producto.imagen3}.jpeg`)}
                                alt="Third slide"
                            />
                            <Carousel.Caption>
                                <p>
                                    Praesent commodo cursus magna, vel scelerisque nisl
                                    consectetur.
                                </p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </Col>
            </Row>
        </Container>

    );
};

export default Producto;
