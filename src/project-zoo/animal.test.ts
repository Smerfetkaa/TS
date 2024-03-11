import { Animal } from './Animal';

describe('Animal class', () => {
  test('should create an instance of Animal', () => {
    const animal = new Animal(1, 'Tiger', 'Shera', 5, 'healthy');
    expect(animal).toBeInstanceOf(Animal);
  });

  test('should have correct properties', () => {
    const animal = new Animal(1, 'Tiger', 'Shera', 5, 'healthy');
    expect(animal.id).toEqual(1);
    expect(animal.specie).toEqual('Tiger');
    expect(animal.name).toEqual('Shera');
    expect(animal.age).toEqual(5);
    expect(animal.health).toEqual('healthy');
  });
});
