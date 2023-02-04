import "../App.css";
import Publicacion from "./Galeria";
import { GMap } from "./APIs/Map_Google";

<GMap    />

const Galeria2 = (props) => {
  return (
    <Publicacion
      condicion1="Departamento"
      encabezado="Jean Jaures 368, Piso 3"
      subtitulo="Departamento en Venta en Abasto, Capital Federal"
      precio="USD 45.000"
      imagen1="1"
      imagen2="2"
      imagen3="3"
      imagen4="4"
 


      condicion2="Terreno"
      descripcion2="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et
                      reprehenderit blanditiis veritatis dolor mollitia, similique
                      aliquid quia temporibus facere cumque laboriosam? Accusantium
                      aspernatur expedita animi tempora magni sunt inventore porro."
      imagen11="11"
      imagen21="21"
      imagen31="31"
    />

  



  );
};

export default Galeria2;
