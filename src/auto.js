function validarSuperficie(superficie) {
    const [xMax, yMax] = superficie.split(',').map(Number);
    return {x: xMax, y: yMax};
}

export { validarSuperficie };

function validarPosicionInicial(pInicial, superficie) {
    const [x, y] = pInicial.split(',').map(Number);
    const [xMax, yMax] = superficie.split(',').map(Number);
    return x >= 0 && x <= xMax && y >= 0 && y <= yMax;
}

export { validarPosicionInicial };

function validarDireccion(direccion) {
    if(direccion === "N" || direccion === "S" || direccion === "E" || direccion === "O"){
        return true;
    }
}

export { validarDireccion };

function avanzar(posicion, direccion, xMax, yMax) {
    let [x, y] = posicion.split(',').map(Number);

    switch(direccion) {
        case "N":
            if(y + 1 > yMax) {
                return "No se puede avanzar";
            }
            y += 1;
            break;
        case "S":
            if(y - 1 < 0) {
                return "No se puede avanzar";
            }
            y -= 1;
            break;
        case "E":
            if(x + 1 > xMax) {
                return "No se puede avanzar";
            }
            x += 1;
            break;
        case "O":
            if(x - 1 < 0) {
                return "No se puede avanzar";
            }
            x -= 1;
            break;
        default:
            console.error("Dirección Inválida");
    }
    return `${x},${y}`;
}

export { avanzar };

function girarIzquierda(direccion) {
    let nuevaDireccion;
    switch(direccion) {
        case "N":
            nuevaDireccion = "O";
            break;
        case "S":
            nuevaDireccion = "E";
            break;
        case "E":
            nuevaDireccion = "N";
            break;
        case "O":
            nuevaDireccion = "S";
            break;
        default:
            console.error("Dirección Inválida");
    }
    return nuevaDireccion;
}

export { girarIzquierda };
