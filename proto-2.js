// Task : Imagine you are developing a simulation game that involves various kinds of vehicles. Using the concepts of inheritance, prototype chains, and object-oriented design patterns learned in class.




function vehicle(brand,model,speed,fuelType){
    this.brand = brand;
    this.model = model;
    this.speed = speed ; 
    this.fuelType = fuelType;
}

vehicle.prototype.accelerate = function(){
    this.speed+=5;
    console.log(`${this.brand} ${this.model} is accelerating. Current speed: ${this.speed}`)
    
}

vehicle.prototype.brake = function(){
    this.speed-=5;
    console.log(`${this.brand} ${this.model} is press the brake.
    the speed is: ${this.speed} km/h`)
}

vehicle.prototype.refuel = function(){
    console.log(`${this.brand} ${this.model} is refueling.`)
}

function car(brand,model,speed,fuelType,numberOfWheels){
    vehicle.call(this,brand,model,speed,fuelType);
    this.numberOfWheels = numberOfWheels;
}

car.prototype = Object.create(vehicle.prototype);

car.prototype.honk = function(){
    console.log(`${this.brand} ${this.model} is Honking.`)
}


function Airplane(brand,model,speed,fuelType,numberOfEngines,hasLandingGear){
    vehicle.call(this,brand,model,speed,fuelType);
    this.numberOfEngines = numberOfEngines;
    this.hasLandingGear = hasLandingGear;

}

Airplane.prototype = Object.create(vehicle.prototype);

Airplane.prototype.takeOff = function(){
    console.log(`${this.brand} ${this.model} is take Off.`);
};



let thisCar = new car("mahindra","2020",100,"Diesel",4)

thisCar.accelerate()
thisCar.brake()
thisCar.refuel()
thisCar.honk()

let wAirplane = new Airplane("IndAir",2023,300,"Gas",2,5)

wAirplane.accelerate();
wAirplane.brake();
wAirplane.takeOff();
wAirplane.refuel();