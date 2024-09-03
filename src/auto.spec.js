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

import { validarDireccion } from "./auto.js";

describe("Validaciones", () => {
    it("Deberia validar direccion inicial del auto", () => {
        expect(validarDireccion("N")).toEqual(true);
        expect(validarDireccion("X")).toEqual(undefined);
    });
});

import { avanzar } from "./auto.js";

describe("Validaciones", () => {
    it("Deberia validar avanzar la posicion del auto", () => {
        expect(avanzar("3,4", "N", 5, 5)).toEqual("3,5");
        expect(avanzar("3,5", "N", 5, 5)).toEqual("No se puede avanzar");
    });
});

