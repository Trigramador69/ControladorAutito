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
