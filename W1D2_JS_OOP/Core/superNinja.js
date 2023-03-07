class Ninja {
    constructor(ninja_name, health, speed, strength) {
        this.name = ninja_name
        this.health = health
        this.speed = speed || 3
        this.strength = strength || 3
    }
    sayName() {
        console.log(`Name: ${this.name}`);
    }
    showStats() {
        console.log(`Name: ${this.name}, Strength: ${this.strength}, Speed: ${this.speed}, Health: ${this.health}`);
    }
    drinkSake() {
        this.health += 10
    }
}

class Sensei extends Ninja {
    constructor(ninja_name, wisdom = 10){
        super(ninja_name, 200, 10, 10)
        this.wisdom = wisdom
    }
    speakWisdom(){
        this.drinkSake()
        console.log("What one programmer can do in one month, two programmers can do in two months.");
    }
}
const superSensei = new Sensei("kakashi")
superSensei.speakWisdom()
superSensei.showStats()