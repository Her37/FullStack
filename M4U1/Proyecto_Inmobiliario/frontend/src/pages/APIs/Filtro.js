import { useState } from 'react';
import Home from '../Home';



export default function Selection  (props)  {
     const [dato, Setdato] = useState([0]);

    const lugar = props.document.getElementById("lugar").value;
    const condicion = props.document.getElementById('condicion').value;
    const tipo = props.document.getElementById('tipo').value;
    const data = [tipo, condicion, lugar];
    console.log(data);

     Setdato(data);

    // return <p>Este es el dato: {data}</p>
};