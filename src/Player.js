"use strict";
// class Player {
//     constructor(health, strength, attack) {
//         this.health = health;
//         this.strength = strength;
//         this.attack = attack;
//     }
Object.defineProperty(exports, "__esModule", { value: true });
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
var Player = /** @class */ (function () {
    function Player(health, strength, attack) {
        this.health = health;
        this.strength = strength;
        this.attack = attack;
    }
    Player.prototype.rollAttackDice = function () {
        return Math.floor(Math.random() * 6) + 1;
    };
    Player.prototype.rollDefenseDice = function () {
        return Math.floor(Math.random() * 6) + 1;
    };
    Player.prototype.calculateDamage = function (roll) {
        return this.attack * roll;
    };
    Player.prototype.calculateDefense = function (roll) {
        return this.strength * roll;
    };
    Player.prototype.takeDamage = function (damage) {
        this.health -= damage;
    };
    return Player;
}());
exports.default = Player;
