import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// import { useMemo } from "react";
import '../APIs/Mapa.css';
import { GoogleMap, useLoadScript } from "@react-google-maps/api";

export default function () {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: "AIzaSyBQ1l7ysMKwT7-sszDO76V2IDiNxvRdrSU",
    });
    if (!isLoaded) return <div>Loading..</div>;
    return <GMapContainer />;
}

function GMapContainer() {
    return (
        
        <div id="map-container">
            
            <Container className="galeria">
     
          <Row>
            <Col>
            <h2>Departamento</h2>
              <p class="p">Jean Jaures 368, Piso 3</p>
              <p>Departamento en Venta en Abasto, Capital Federal</p>
              <p><b>PRECIO: USD 45.000</b></p>
            </Col>
            <Col>
              <Carousel>
                <Carousel.Item>
                  <img
                    className="d-block w-100, carrusel"
                    src={require(`./imagen4.jpeg`)}
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
                    src={require(`./imagen2.jpeg`)}
                    alt="Second slide"
                  />
                  <Carousel.Caption>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100, carrusel"
                    src={require(`./imagen3.jpeg`)}
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
        
          <div>    <GMap /></div>
        </div>

   

    )
};

export function GMap() {
    return (
        <GoogleMap zoom={10} center={{ lat: -34.6, lng: -58.4 }}>
            <div id="map"></div>
        </GoogleMap>
    )
};
