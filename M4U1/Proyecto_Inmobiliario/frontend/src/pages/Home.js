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
                    <p><i>Si quieres saber mas te comparto esta nota <span>Bit2me</span>: <a
                                href="https://academy.bit2me.com/que-son-los-smart-contracts/">Que son los smart
                                contracts?</a></i></p>
                    <video
                        src="https://rr1---sn-bg07dnr7.googlevideo.com/videoplayback?expire=1673658793&ei=Sa3BY6mGK5CF7gOS_ogw&ip=45.133.193.85&id=o-ADb5vcCSTM4n0CgSQz01Xqxf8a9xWj3Fr8i1MkU1SqtL&itag=18&source=youtube&requiressl=yes&spc=zIddbAwELmmD0urvFjsu_jyS_NWzk0w&vprv=1&mime=video%2Fmp4&ns=y_8VVw1cjSZMciBNtGatg-0K&cnr=14&ratebypass=yes&dur=328.910&lmt=1657926708826827&fexp=24007246&c=WEB&txp=6318224&n=W5UNzUIuQ7c39Q&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cspc%2Cvprv%2Cmime%2Cns%2Ccnr%2Cratebypass%2Cdur%2Clmt&sig=AOq0QJ8wRAIgYSFszuJjOuFEGS_bEusRhqjSW_Y2s8FUn1c-aphktQMCIBDppeID69YM6T9S1A-qqPINJD9lZ1pHGWZ76d4tKOss&rm=sn-45gpjx-3x4e7e&req_id=d332c57eff25a3ee&redirect_counter=2&cm2rm=sn-5hnell7z&cms_redirect=yes&cmsv=e&mh=5H&mip=2800:810:570:9678:e4f9:796e:6b33:c544&mm=34&mn=sn-bg07dnr7&ms=ltu&mt=1673636920&mv=m&mvi=1&pl=48&lsparams=mh,mip,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRQIhAOhBmyJoGTUixECgDu9w9cSRFJUPdczyw74r-04MULS6AiBOFUtyTvActh3cGmVeWmYOM_UJGx0wL_E_-pLozGZrLQ%3D%3D"
                        controls width="320" height="240" margin="auto"></video>
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