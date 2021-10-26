class Ninja{
    constructor(name, health, speed=3, strength=3){
        this.name = name
        this.health = health
        this.speed = speed
        this.strength = strength
    }
    sayName(){
        console.log(this.name)
        return this
    }

    showStats(){
        console.log(`${this.name} has ${this.health} health remaining. Current speed is ${this.speed}. Current strength is ${this.strength}`)
        return this
    }

    drinkSake(){
        this.health += 10
        return this
    }
}

class Sensei extends Ninja{
    constructor(name, health, speed, strength, wisdom=10){
    super(name, health, speed, strength)
        this.wisdom = wisdom
    }
    speakWisdom(){
        this.drinkSake()
        console.log(`${this.name} slowly sips his sake, before replying "Always code as if the person who ends up maintaining your code will be a violent psychopath who knows where you live"`)
        return this
    }
}

const ninja1 = new Ninja("Hyabusa", 50);
const sensei1 = new Sensei("Boss",200,10,10);

ninja1.sayName().showStats().drinkSake().showStats();
sensei1.showStats().speakWisdom().showStats();

