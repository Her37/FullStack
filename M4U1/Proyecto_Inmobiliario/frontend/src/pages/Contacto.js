import React from 'react';
import '../styles/contacto.css'

require('dotenv').config();
var pool = require('./models/bd');

const Contacto = (props) => {
return (
<main className="holder contacto">

    {/* <!--Dentro de este Formulario nos conectamos con Mysql para cargar los datos enviados, es un localhost--> */}
    <div className="recuadro">
        <h2>Contacto</h2>

        <form action="http://localhost/FullStack/M1U3/BD/subida.php" method="post" target="_blank" autocomplete="on"
            class="formulario">
            <p>
                <input type="text" id="nom" name="Nombre" placeholder="Nombre" size="55" maxLength="40" />
                <br />
                <br />
            </p>
            <p>
                <input type="text" id="ape" name="Apellido" placeholder="Apellido" size="55" maxLength="40" />
                <br />
                <br />
            </p>
            <p>
                <input type="text" id="tel" name="Email" placeholder="Email" size="55" maxLength="40" />
                <br />
                <br />
            </p>
            <p>
                <textarea name="comentarios" id="com" cols="50" rows="10" placeholder="Comentarios">
                            {/* style="width:500px; height:200px; */}
                        </textarea>
                <br />
                <br />
            </p>
            <p class="botones">
                <input type="submit" name="Enviar" value="Enviar"
                    onClick="alert('Tus datos fueron cargados en una base de datos en phpMyadmin')" />
                <input type="reset" value="Borrar" onClick="alert('Todo Limpio!')" />
            </p>
        </form>
    </div>
    <div class="datos">
        <h2>Otras vias de comunicacion</h2>
        <p>Tambien pueden contactarse con osotros usando los siguientes medios</p>
        <ul>
            <li> Telefono: +54 11 2832-6768</li> 
            <li>Email: carrizo_h@yahoo.com.ar</li>
            <li>Instagram: Her_35</li>
            <li>Twtter: Hernan Carrizo</li>
            <li>Sype:</li>
        </ul>
    </div>
</main>
);
};



export default Contacto;