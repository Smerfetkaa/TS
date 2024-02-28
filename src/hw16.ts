//1//
interface Car {
  brand: string;
  model: string;
  year: number;
}
type Vehicle = {
  brand: string;
  model: string;
  year: number;
};
//2//
interface Signal {
  (brand: string): string;
}

type SignalType = (brand: string) => string;

//3//
type CarColor = string;

type FuelType = 'gasoline' | 'diesel' | 'electric' | 'hybrid';

type CarInfo = [string, number];

//4//
interface ElectricCar extends Car {
  isElectric: boolean;
}
interface ElectricVehicle extends Vehicle {
  isElectric: boolean;
}
type CarWithSignal = Car & { signal: string };
type VehicleInfo = Vehicle & { owner: string };

//5//

interface CarEngine {
  startEngine(): void;
  stopEngine(): void;
}

type VehicleEngine = {
  startEngine(): void;
  stopEngine(): void;
};
class CarClass implements CarEngine {
  startEngine(): void {
    throw new Error('Method not implemented.');
  }
  stopEngine(): void {
    throw new Error('Method not implemented.');
  }
}
class VehicleClass implements VehicleEngine {
  startEngine(): void {
    throw new Error('Method not implemented.');
  }
  stopEngine(): void {
    throw new Error('Method not implemented.');
  }
}
type CarType = {
  wheels: number;
};
type BicycleType = {
  wheels: number;
};
type VehicleUnion = CarType | BicycleType;
// class FuelTypeClass implements VehicleUnion {

// }

//6//

interface NewCar {
  brand: string;
  model: string;
}
interface NewCar {
  year: number;
  fuelType: FuelType;
}
// const myCar: NewCar = {
//     brand: "",
//     model: "",
//     year: 0,
//     fuelType: "gasoline"
// }
