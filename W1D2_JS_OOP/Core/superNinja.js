class Ninja {
    constructor(health, speed, strength){
        this.health = health
        this.speed = speed
        this.strength = strength
    }
}

class Sensei extends Ninja {
    constructor(wisdom){
        super(200, 10, 10)
        this.wisdom = wisdom
    }
}