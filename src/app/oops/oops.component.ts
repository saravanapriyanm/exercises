import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-oops',
    templateUrl: './oops.component.html',
    styleUrls: ['./oops.component.scss']
})
export class OopsComponent implements OnInit {
    
    constructor() { }
    
    ngOnInit() {
    }
    
}

interface vehicleProps{
    name: string;
    speed: string;
};

class Vehicle implements vehicleProps{
    name = '';
    speed = '';
    type = 'runs';
    constructor(props:vehicleProps)
    {
        this.name = props.name;
        this.speed = props.speed;
    }
    public displaySpeed()
    {
        return `${this.name} ${this.type} at ${this.speed} KMPH`;
    }
}

class WheeledVehicle extends Vehicle{
    constructor(props){
        console.log('WheeledVehicle inherits Vehicle');
        super(props);
    }
}
let cycle = new WheeledVehicle({name:'cycle',speed:'20'});
console.log(cycle.displaySpeed())

class Car extends WheeledVehicle{
    mileage:String;
    constructor(props){
        console.log('Car inherits WheeledVehicle');
        super(props);
        this.mileage = props.mileage;
    }
    displayMileage(){
        return `${this.name} gives ${this.mileage} KMPL`;
    }
}
let sedan = new Car({name:'Sedan', speed:'120', mileage:'20'});
console.log(sedan.displaySpeed())
console.log(sedan.displayMileage())

let suv = new Car({name:'SUV', speed:'90'});
console.log(suv.displaySpeed())

class FloatingVehicle extends Vehicle{
    type = 'sails';
    private hasSails:Boolean = true;
    constructor(props){
        super(props);
        console.log('FloatingVehicle inherits Vehicle & modifies move type to "sails"');
        console.log(`FloatingVehicle has private prop hasSails with value ${this.hasSails}`);
    }
}
let ship = new FloatingVehicle({name:'ship', speed:'100'});
// console.log(ship.hasSails);
console.log(ship.displaySpeed())
