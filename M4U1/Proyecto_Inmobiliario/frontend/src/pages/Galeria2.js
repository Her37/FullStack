import "../App.css";
import { Publicacion, Selection } from "./Galeria";


const Galeria2 = (props) => {

  return (
    <div className="App">

      <Publicacion

        condicion1="Terreno"
        descripcion1="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et
                      reprehenderit blanditiis veritatis dolor mollitia, similique
                      aliquid quia temporibus facere cumque laboriosam? Accusantium
                      aspernatur expedita animi tempora magni sunt inventore porro."
        imagen1="1"
        imagen2="2"
        imagen3="3"

        condicion2="Terreno"
        descripcion2="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et
                      reprehenderit blanditiis veritatis dolor mollitia, similique
                      aliquid quia temporibus facere cumque laboriosam? Accusantium
                      aspernatur expedita animi tempora magni sunt inventore porro."
        imagen11="11"
        imagen21="21"
        imagen31="31"
      />
    </div>
  );
};

export default Galeria2;
