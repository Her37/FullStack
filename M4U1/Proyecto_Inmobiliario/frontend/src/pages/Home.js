import React from 'react';
import '../styles/home.css';
import ReactPlayer from 'react-player';
// import ReactDOM from "react-dom";
// import ChildComponent from "./Galeria";


// class Filtro extends React.Component {

//     state = {
//         dato: "Hola"
//     };
//     updateData = () => {
//         this.setState({ sharedData: "New Data" });
//     }

//     render() {
//         return (
//             <div>
//                 <ChildComponent info={this.state.dato} />
//                 <button onClick={this.updateData}>Update</button>
//             </div>
//         );

//     }
// };

// ReactDOM.render(<Filtro />, document.getElementById("root"));

// function Selection() {


// const lugar = document.getElementById('lugar').value;
// const condicion = document.getElementById('condicion').value;
// const tipo = document.getElementById('tipo').value;
// const data = [tipo, condicion, lugar];

//     console.log(data);
//     Setdato(data);


//     const [dato, Setdato] = useState({});

//     const desencadenador = (event) =>{
//         e.preventDefault();
//         fetch('./Novedades',{
//             method: 'POST',
//             headers:{
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(dato),
//         })

//     }

// };



export const Home = (props) => {

    return (
        <main>

            <div className="inicio">

                <div className="sub_fondo">
                    <div id="caja">
                        <form onSubmit={null} action='./Galeria' id="form" method='post'>
                            {/* <input type="text" className="text" /> */}
                            <button type='submit' className="button" onClick={null}>BUSCAR</button>

                            <select className="form-select button " aria-label="Default select example" id="lugar" onChange={null}>
                                <option selected>Lugar</option>
                                <option value="1">CABA</option>
                                <option value="2">Cordoba</option>
                                <option value="3">Prov. Bs. As</option>
                            </select>
                            <select className="form-select button " aria-label="Default select example" id="condicion" onChange={null}>
                                <option selected>Condicion</option>
                                <option value="1">Alquiler</option>
                                <option value="2">Venta</option>
                                <option value="3">Permuta</option>
                            </select>
                            <select className="form-select button " aria-label="Default select example" id="tipo" onChange={null}>
                                <option selected>Tipo</option>
                                <option value="1">Casa</option>
                                <option value="2">Terreno</option>
                                <option value="3">Departamento</option>
                            </select>
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
                        <p><b>Bienvenidos, este sitio consiste en una plataforma de intercambios <i>sin intermediarios</i>.
                            Donde las personas podrán intercambiar libremente lo que deseen. Para ello, en un futuro
                            implementaremos el uso de la tecnología de contratos inteligentes o SmartContracts, pero
                            actualmente no se encuentra disponible ya que estamos trabajando en su implementación.</b></p>
                        <br />
                        <p><b>Por el contrario, podrás consultar y ponerte en contacto con los distintos ofertantes del sitio a
                            través de correo electrónico o teléfono y pactar la forma de intercambio que desees. Ten en
                            cuenta que no se permitirá publicar artículos sin su debida documentación, como ser: título,
                            certificados, factura, etc. ni tampoco ningún artículo prohibido por las leyes actuales.</b></p>
                        <br />
                        <p><b>Si lo deseas, te invito a que te des una vuelta por el sitio y me dejes una opinión en los
                            comentarios. ¡Saludos!</b></p>
                        <br />
                        <hr />

                        <section>
                            <p>
                                <i>Si quieres saber mas sobre que son los <b>Contratos Inteligentes</b>, te comparto esta nota de <span>Bit2me</span>: <a
                                    href="https://academy.bit2me.com/que-son-los-smart-contracts/">Que son los smart
                                    contracts?</a></i>
                            </p>
                            <ReactPlayer url={('https://www.youtube.com/watch?v=4ZnYGLWVpXk')} />
                        </section>
                    </section>
                    <section className="testimonios">
                        <h2>Comentarios</h2>
                        <br />
                        <div className="testimonio">
                            <span className="cita">"Muy serios y profesionales."</span>
                            <span className="autor">Pablo R.</span>
                        </div>
                        <br />
                        <div className="testimonio">
                            <span className="cita">"Excelente iniciativa!"</span>
                            <span className="autor">Gaston</span>
                        </div>
                    </section>
                </div>
            </div>
        </main>
    );
}


export default Home;


