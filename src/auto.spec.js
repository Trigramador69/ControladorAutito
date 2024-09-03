import { validarSuperficie } from "./auto.js";

describe("Validaciones", () => {
    it("Deberia validar el tamaño de la superficie", () => {
        expect(validarSuperficie("4,5")).toEqual({x: 4, y: 5});
    });
});

import { validarPosicionInicial } from "./auto.js";

describe("Validaciones", () => {
    it("Deberia validar la posicion inicial si está en rango de la superficie", () => {
        expect(validarPosicionInicial("4,5", "5,5")).toEqual(true);
        expect(validarPosicionInicial("6,5", "5,5")).toEqual(false);
    });
});
