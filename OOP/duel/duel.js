class Card{
    constructor(name,cost){
        this.name = name
        this.cost = cost
    }
}

class Unit extends Card{
    constructor(name,cost,power, resilience){
        super(name,cost)
        this.power = power
        this.resilience = resilience
    }

    attack(atk,def){
        def.resilience -= atk.power
        if (def.resilience<=0){
            console.log(`${def.name} has been damaged by ${atk.power} resulting in 0 remaining resilience. ${def.name} has been sent to the graveyard`)


        }
        else{
        console.log(`${def.name} is damaged by ${atk.power}. Remaining resilience is ${def.resilience}`)
        return this
        }
    }
}

class Effect extends Card{
    constructor(name, cost, text, stat, magnitude){
        super(name,cost)
        this.text = text
        this.stat = stat
        this.magnitude = magnitude
    }
    play_resilience(ninja,equip){
        if (equip.magnitude >0){
        ninja.resilience+=equip.magnitude
        console.log(`${ninja.name}'s resilience has increased by ${equip.magnitude}. Resilience is now ${ninja.resilience}'`)
        return this
        }
        else{
            ninja.resilience+=equip.magnitude
            console.log(`${ninja.name}'s resilience has decreased by ${equip.magnitude}. Resilience is now ${ninja.resilience}'`)
            return this
        }
    }
    play_power(ninja,equip){
        if (equip.magnitude >0){
        ninja.power+=equip.magnitude
        console.log(`${ninja.name}'s power has increased by ${equip.magnitude}. Power is now ${ninja.power}'`)
        return this
        }
        else{
            ninja.power+=equip.magnitude
            console.log(`${ninja.name}'s power has decreased by ${equip.magnitude}. Power is now ${ninja.power}'`)
            return this
        }
    }
}

const red_belt_ninja = new Unit ("Red Belt Ninja",3,3,4);
console.log(red_belt_ninja);
const hard_algo = new Effect ("Hard Algorithm", 2, "increase target's resilience by 3", "resilience", 3);
console.log(hard_algo);
hard_algo.play_resilience(red_belt_ninja,hard_algo);
const black_belt_ninja = new Unit("Black Belt Ninja",4,5,4);
console.log(black_belt_ninja);
const unhandled_promise = new Effect ("Unhandled Promise Rejection", 1, "reduce target's resilience by 2", "resilience", -3);
console.log(unhandled_promise);
unhandled_promise.play_resilience(red_belt_ninja,unhandled_promise)
const pair_prog = new Effect ("Pair Programming", 3, "increase target's power by 2", "power", 2);
console.log(pair_prog);
pair_prog.play_power(red_belt_ninja,pair_prog)
red_belt_ninja.attack(red_belt_ninja,black_belt_ninja);

