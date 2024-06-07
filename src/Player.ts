// class Player {
//     constructor(health, strength, attack) {
//         this.health = health;
//         this.strength = strength;
//         this.attack = attack;
//     }

//     rollAttackDice() {
//         return Math.floor(Math.random() * 6) + 1;
//     }

//     rollDefenseDice() {
//         return Math.floor(Math.random() * 6) + 1;
//     }

//     calculateDamage(roll) {
//         return this.attack * roll;
//     }

//     calculateDefense(roll) {
//         return this.strength * roll;
//     }

//     takeDamage(damage) {
//         this.health -= damage;
//     }
// }

// module.exports = Player;


class Player {
    health: number;
    strength: number;
    attack: number;

    constructor(health: number, strength: number, attack: number) {
        this.health = health;
        this.strength = strength;
        this.attack = attack;
    }

    rollAttackDice(): number {
        return Math.floor(Math.random() * 6) + 1;
    }

    rollDefenseDice(): number {
        return Math.floor(Math.random() * 6) + 1;
    }

    calculateDamage(roll: number): number {
        return this.attack * roll;
    }

    calculateDefense(roll: number): number {
        return this.strength * roll;
    }

    takeDamage(damage: number): void {
        this.health -= damage;
    }
}

export default Player;
