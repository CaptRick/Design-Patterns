class Car {
  constructor() {
    this.cost = 20000;
  }

  getCost() {
    return this.cost;
  }
}

function addSunRoof(car) {
  car.hasSunroof = true;
  car.cost += 1500;
}

function addLeatherSeats(car) {
  car.hasLeatherSeats = true;
  car.cost += 1000;
}

const myCar = new Car();

addSunRoof(myCar);

addLeatherSeats(myCar);

console.log(myCar); // { cost: 22500, hasSunroof: true, hasLeatherSeats: true }

console.log(myCar.getCost()); // 22500
