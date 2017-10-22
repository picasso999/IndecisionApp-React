
class Person {
    constructor(name = 'PAR', age = 0) {
        this.name =  name;
        this.age = age;
    }

    getGreeting(){
        return `Hi! I'm ${this.name}.`;
    }

    getDescription() {
        return `${this.name} is ${this.age} year(s) old.`
    }
};

class Student extends Person {
    constructor(name, age, major){
        super(name, age);
        this.major = major;
    }

    hasMajor() {
        return !!this.major;
    }

    getDescription() {
        let description = super.getDescription();

        if(this.hasMajor()) {
            description += ` Has major in ${this.major}`;
        }
        return description;
    }
};

class Traveler extends Person {
    constructor(name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
    }

    getGreeting(){
        let greetings = super.getGreeting();

        if(this.homeLocation) {
            greetings += ` I'm from ${this.homeLocation}`
        }

        return greetings;
    }
}

const me =  new Student('PPP',26, 'Electronics Engineer');
console.log(me.getDescription());

const other =  new Student();
console.log(other.getDescription());

const me1 = new Traveler('Picasso', 26, 'VIjayawada');
console.log(me1.getGreeting());

const other1 =  new Traveler('Akshu', 24);
console.log(other1.getGreeting());