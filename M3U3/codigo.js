
const lugar = prompt("Ingrese la distancia de su viaje", 'En numeros')

let destino;

//Con else if, el primero en validarse sera el destino correcto, el resto no se ejecutara y pasara al switch.
if (lugar <= 1000) {
    destino = 1;
}
else if (lugar <= 10000) {
    destino = 2;
}

else if (lugar <= 30000) {
    destino = 3;
}
else if (lugar <= 100000) {
    destino = 4;
}
else if (lugar > 100000) {
    destino = 5;
}

switch (destino) {
    case 1:
        document.write('Viaje a Pie');
        alert('Viaje a Pie');
        console.log(`Viaje a Pie por ${lugar} metros`)
        break;

    case 2:
        document.write('Puede ir en Bicicleta');
        console.log(`Viaje en Bicicleta por ${lugar} metros`)
        alert('Puede ir en Bicicleta');
        break;

    case 3:
        document.write('Use un coletivo');
        console.log(`Viaje en coletivo por ${lugar} metros`)
        alert('Use un coletivo');
        break;

    case 4:
        document.write('Pida un auto');
        console.log(`Viaje en auto por ${lugar} metros`)
        alert('Pida un auto');
        break;

    case 5:
        document.write('Viaje en avion');
        console.log(`Viaje en avion por ${lugar} metros`)
        alert('Viaje en avion');
        break;
}