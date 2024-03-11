import { IAnimal } from "./types";
export class Animal implements IAnimal {
  constructor(
    public id: number,
    public specie: string,
    public name: string,
    public age: number,
    public health: string
  ) {}
}
