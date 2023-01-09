import React from 'react';
import '../styles/home.css';

const Home = (props) => {
    return (
        <main>
            <div className="inicio">
                <div className="sub_fondo">
                    <div id="caja">
                        <form id="form">
                            <input type="text" className="text" />
                            <button className="button" role="button">BUSCAR</button>
                            <button className="button" role="button">LUGAR</button>
                            <button className="button" role="button">TIPO</button>
                            <button className="button" role="button">VENTA</button>
                        </form>
                    </div>
                    <img className="fondo" src="../../../img/home/Home.jpg" alt="" />
                </div>
            </div>
            <div className="holder">
                <div className="columnas">

                    <section className="bienvenidos">
                        <h2>Bienvenidos</h2>
                        <br />
                        <p><b>Bienvenidos, este sito conciste en una plataforma de intercambios sin intermediarios. Donde las
                            persoanas podran intercambiar libremente lo que deseen.
                            Para ello en un futuro implementaremos el uso de la tecnologia de Contratos Inteligentes o
                            <span> SamrtContract</span>, pero que actualemte no se encuentra disponible estamos trabajando
                            en su
                            implementacion.</b>
                        </p>
                        <br />
                        <p><b>Por el contrario, podras consultar y ponerte en contacto con los distintos ofertantes del sito a
                            travez de email o telefono y pactar la forma de intercambio que desees.
                            Ten en cuenta que no se permitira publicar articulos sin su debida documentacion; como ser:
                            titulo, certificados,
                            factura, etc. ni tampoco ningun articulo prohibido por las leyes actuales.</b>
                        </p>
                        <br />
                        <p><b>Si lo deseas te invito a que te des una vuelta por el Sitio y me dejes una opinion en los
                            comentarios. Saludos!</b></p>

                        <br />
                        <p><b>Bienvenidos, este sito conciste en una plataforma de intercambios sin intermediarios. Donde las
                            persoanas podran intercambiar libremente lo que deseen.
                            Para ello en un futuro implementaremos el uso de la tecnologia de Contratos Inteligentes o
                            <span> SamrtContract</span>, pero que actualemte no se encuentra disponible estamos trabajando
                            en su
                            implementacion.</b>
                        </p>
                        <br />
                        <p><b>Por el contrario, podras consultar y ponerte en contacto con los distintos ofertantes del sito a
                            travez de email o telefono y pactar la forma de intercambio que desees.
                            Ten en cuenta que no se permitira publicar articulos sin su debida documentacion; como ser:
                            titulo, certificados,
                            factura, etc. ni tampoco ningun articulo prohibido por las leyes actuales.</b>
                        </p>
                        <br />
                        <p><b>Si lo deseas te invito a que te des una vuelta por el Sitio y me dejes una opinion en los
                            comentarios. Saludos!</b></p>

                        <br />
                        <p><b>Bienvenidos, este sito conciste en una plataforma de intercambios sin intermediarios. Donde las
                            persoanas podran intercambiar libremente lo que deseen.
                            Para ello en un futuro implementaremos el uso de la tecnologia de Contratos Inteligentes o
                            <span> SamrtContract</span>, pero que actualemte no se encuentra disponible estamos trabajando
                            en su
                            implementacion.</b>
                        </p>
                        <br />
                        <p><b>Por el contrario, podras consultar y ponerte en contacto con los distintos ofertantes del sito a
                            travez de email o telefono y pactar la forma de intercambio que desees.
                            Ten en cuenta que no se permitira publicar articulos sin su debida documentacion; como ser:
                            titulo, certificados,
                            factura, etc. ni tampoco ningun articulo prohibido por las leyes actuales.</b>
                        </p>
                        <br />
                        <p><b>Si lo deseas te invito a que te des una vuelta por el Sitio y me dejes una opinion en los
                            comentarios. Saludos!</b></p>

                    </section>

                    <section className="testimonios">
                        <h2>Comentarios</h2>
                        <br />
                        <div className="testimonio">
                            <span className="cita">"Muy serios y profesionales."</span>
                            <span className="autor">Pablo R.</span>
                        </div>
                    </section>
                </div>
            </div>
        </main>
    );
}

export default Home;