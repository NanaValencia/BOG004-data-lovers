import { describe, it } from 'eslint/lib/rule-tester/rule-tester';
import { filterPersonajes, ordenamientoDataAZ, ordenamientoDataZA, estadisticaVivos } from '../src/data.js';

const dataRmTest = [{
        "name": "Abadango Cluster Princess",
        "status": "Alive",
        "species": "Alien",
        "location": {
            "name": "Abadango"
        },
    },
    {
        "name": "Rick Sanchez",
        "status": "Alive",
        "species": "Human",
        "location": {
            "name": "Earth (Replacement Dimension)"
        },
    },
    {
        "name": "Beth Smith",
        "status": "Alive",
        "species": "Human",
        "location": {
            "name": "Earth (Replacement Dimension)"
        },
    },
    {
        "name": "Benjamin",
        "status": "Alive",
        "species": "Poopybutthole",
        "location": {
            "name": "Interdimensional Cable"
        },
    },
]

const dataFilterTest = [{
        "name": "Abadango Cluster Princess",
        "status": "Alive",
        "species": "Alien",
        "location": {
            "name": "Abadango"
        },
    },
    {
        "name": "Rick Sanchez",
        "status": "Alive",
        "species": "Human",
        "location": {
            "name": "Earth (Replacement Dimension)"
        },
    },
    {
        "name": "Beth Smith",
        "status": "Alive",
        "species": "Human",
        "location": {
            "name": "Earth (Replacement Dimension)"
        },
    },
    {
        "name": "Benjamin",
        "status": "Alive",
        "species": "Poopybutthole",
        "location": {
            "name": "Interdimensional Cable"
        },
    },
]

describe('filterPersonajes', () => {
    it('filtra dataRmTest dejando solamente los alive', () => {
        expect(filterPersonajes(dataRmTest, "Alive")).toEqual(dataFilterTest);
    });
});

describe('ordenamientoDataAZ', () => {
    it('ordena dataRmTest de AZ ', () => {
        const resultadoAZ = ordenamientoDataAZ(dataRmTest);
        expect(resultadoAZ[0].name).toEqual("Abadango Cluster Princess");
    });
});

describe('ordenamientoDataZA', () => {
  it('ordena dataRmTest de ZA',() =>{
    const resultadoZA = ordenamientoDataZA(dataRmTest);
    expect(resultadoZA[0].name).toEqual("Rick Sanchez");
  });
});

describe('estadisticaVivos', () => {
  it('Revela el porcentaje de personajes vivos', () => {
    expect(estadisticaVivos(dataRmTest, "Alive").toEqual[4]);
  });
})