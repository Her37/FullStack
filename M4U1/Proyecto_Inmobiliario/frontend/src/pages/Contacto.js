import React from 'react';
import '../styles/contacto.css'

const Contacto = (props) => {
    return (
        <main className="holder">

            {/* <!--Dentro de este Formulario nos conectamos con Mysql para cargar los datos enviados, es un localhost-->  */}

            <h1>FORMULARIO DE CONTACTO</h1>

            <div className="recuadro">
                <h4>CONTACTO</h4>
                <form action="http://localhost/FullStack/M1U3/BD/subida.php" method="post" target="_blank" autocomplete="on">

                    <input type="text" id="nom" name="Nombre" placeholder="Nombre" size="55" maxLength="40" />
                    <br />
                    <br />

                    <input type="text" id="ape" name="Apellido" placeholder="Apellido" size="55" maxLength="40" />
                    <br />
                    <br />
                    <input type="text" id="tel" name="Telefono" placeholder="Telefono" size="55" maxLength="40" />
                    <br />
                    <br />

                    <textarea name="comentarios" id="com" cols="50" rows="10" placeholder="Comentarios">
                        {/* style="width:500px; height:200px; */}
                    </textarea>
                    <br />
                    <br />

                    <input type="submit" name="Enviar" value="Enviar" onClick="alert('Tus datos fueron cargados en una base de datos en phpMyadmin')" />
                    <input type="reset" value="Borrar" onClick="alert('Todo Limpio!')" />
                </form>
            </div>
        </main>
    );
};

export default Contacto;