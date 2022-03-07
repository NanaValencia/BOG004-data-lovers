import { describe, it } from 'eslint/lib/rule-tester/rule-tester';
import { filterPersonajes, ordenamientoDataAZ, ordenamientoDataZA, estadisticaVivos, estadisticaMuertos, estadisticaDesconocidos, estadisticaHuman, estadisticaAlien, estadisticaHumanoid } from '../src/data.js';

const dataRmTest = [{
        "name": "Abadango Cluster Princess",
        "status": "Alive",
        "species": "Alien",
    },
    {
        "name": "Rick Sanchez",
        "status": "Alive",
        "species": "Human",
    },
    {
        "name": "Beth Smith",
        "status": "Alive",
        "species": "Human",
    },
    {
        "name": "Baby Wizard",
        "status": "Dead",
        "species": "Alien",
    },
    {
        "name": "Big Head Morty",
        "status": "unknown",
        "species": "Human",
    },
    {
        "name": "Centaur",
        "status": "Alive",
        "species": "Humanoid",
    },
    {
        "name": "Chris",
        "status": "Dead",
        "species": "Alien",
    },
    {
        "name": "Chris",
        "status": "Alive",
        "species": "Humanoid",
    },
    {
        "name": "Collector",
        "status": "Alive",
        "species": "Alien",
    },
    {
        "name": "Colossus",
        "status": "Dead",
        "species": "Human",
    },
]

const dataFilter = [{
        "name": "Abadango Cluster Princess",
        "status": "Alive",
        "species": "Alien",
    },
    {
        "name": "Rick Sanchez",
        "status": "Alive",
        "species": "Human",
    },
    {
        "name": "Beth Smith",
        "status": "Alive",
        "species": "Human",
    },
]

const dataFilterTest = [{
        "name": "Abadango Cluster Princess",
        "status": "Alive",
        "species": "Alien",
    },
    {
        "name": "Rick Sanchez",
        "status": "Alive",
        "species": "Human",
    },
    {
        "name": "Beth Smith",
        "status": "Alive",
        "species": "Human",
    },
]

describe('filterPersonajes', () => {
    it('filtra dataFilter dejando solamente los alive', () => {
        expect(filterPersonajes(dataFilter, "Alive")).toEqual(dataFilterTest);
    });
});

describe('ordenamientoDataAZ', () => {
    it('ordena dataRmTest de AZ ', () => {
        const resultadoAZ = ordenamientoDataAZ(dataRmTest);
        expect(resultadoAZ[0].name).toEqual("Abadango Cluster Princess");
    });
});

describe('ordenamientoDataZA', () => {
    it('ordena dataRmTest de ZA', () => {
        const resultadoZA = ordenamientoDataZA(dataRmTest);
        expect(resultadoZA[0].name).toEqual("Rick Sanchez");
    });
});

describe('estadisticaVivos', () => {
    it('Revela el porcentaje de personajes vivos', () => {
        expect(estadisticaVivos(dataRmTest)).toEqual(60);
    });
});

describe('estadisticaMuertos', () => {
    it('Revela el porcentaje de personajes muertos', () => {
        expect(estadisticaMuertos(dataRmTest)).toEqual(30);
    });
});

describe('estadisticaDesconocidos', () => {
    it('Revela el porcentaje de personajes desconocidos', () => {
        expect(estadisticaDesconocidos(dataRmTest)).toEqual(10);
    });
});

describe('estadisticaHuman', () => {
    it('Revela el porcentaje de personajes humanos', () => {
        expect(estadisticaHuman(dataRmTest)).toEqual(40);
    });
});

describe('estadisticaAlien', () => {
    it('Revela el porcentaje de personajes aliens', () => {
        expect(estadisticaAlien(dataRmTest)).toEqual(40);
    });
});

describe('estadisticaHumanoid', () => {
    it('Revela el porcentaje de personajes humaniodes', () => {
        expect(estadisticaHumanoid(dataRmTest)).toEqual(20);
    });
});