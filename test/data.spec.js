import { filterPersonajes } from '../src/data.js';

const dataRmTest = [
  {
    "name": "Rick Sanchez",
    "status": "Alive",
    "species": "Human",
    "origin": {
      "name": "Earth (C-137)"
    },
    "location": {
      "name": "Earth (Replacement Dimension)"
    },
  },
  {
    "name": "Beth Smith",
    "status": "Alive",
    "species": "Human",
    "origin": {
      "name": "Earth (Replacement Dimension)"
    },
    "location": {
      "name": "Earth (Replacement Dimension)"
    },
  },
  {
    "name": "Abadango Cluster Princess",
    "status": "Alive",
    "species": "Alien",
    "origin": {
      "name": "Abadango"
    },
    "location": {
      "name": "Abadango"
    },
  },
  {
    "name": "Adjudicator Rick",
    "status": "Dead",
    "species": "Human",
    "origin": {
      "name": "unknown"
    },
    "location": {
      "name": "Citadel of Ricks"
    },
  },
  {
    "name": "Aqua Morty",
    "status": "unknown",
    "species": "Humanoid",
    "origin": {
      "name": "unknown"
    },
    "location": {
      "name": "Citadel of Ricks"
    },
  },
  {
    "name": "Benjamin",
    "status": "Alive",
    "species": "Poopybutthole",
    "origin": {
      "name": "unknown",
    },
    "location": {
      "name": "Interdimensional Cable"
    },
  },
]

const dataFilterTest = [
  {
    "name": "Bepisian",
    "status": "Alive",
    "species": "Alien",
    "origin": {
      "name": "Bepis 9"
    },
    "location": {
      "name": "Bepis 9"
    },
  },
  {
    "name": "Body Guard Morty",
    "status": "Dead",
    "species": "Human",
    "origin": {
      "name": "unknown",
    },
    "location": {
      "name": "Citadel of Ricks",
    },
  },
  {
    "name": "Birdperson",
    "status": "Dead",
    "species": "Alien",
    "origin": {
      "name": "Bird World",
    },
    "location": {
      "name": "Planet Squanch",
    },
  },
  {
    "name": "Blue Shirt Morty",
    "status": "unknown",
    "species": "Human",
    "origin": {
      "name": "unknown",
    },
    "location": {
      "name": "Citadel of Ricks",
    },
  },
  {
    "name": "Bobby Moynihan",
    "status": "Alive",
    "species": "Human",
    "origin": {
      "name": "unknown",
    },
    "location": {
      "name": "Interdimensional Cable",
    },
  },
  {
    "name": "Goddess Beth",
    "status": "unknown",
    "species": "Mytholog",
    "origin": {
      "name": "Nuptia 4",
    },
    "location": {
      "name": "Nuptia 4",
    },
  },
]

describe('filterPersonajes', () => {
  it('is a function', () => {
    expect(typeof filterPersonajes).toBe('function');
  });

  it('returns `estado`', () => {
    expect(filterPersonajes(dataRmTest, "Alive")).toEqual(dataFilterTest);
  });
});

describe('ordenamientoDataAZ', () => {
  it('is a function', () => {
    expect(typeof ordenamientoDataAZ).toBe('function');
  });

  it('returns `sortedPersonajes`', () => {
    expect(sortedPersonajes(dataRmTest, "Abadango Cluster Princess")).toEqual(dataFilterTest);
  });
});
