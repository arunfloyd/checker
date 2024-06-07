"use strict";
// class Match {
//     constructor(player1, player2) {
//         this.player1 = player1;
//         this.player2 = player2;
//         this.currentPlayer = this.player1.health < this.player2.health ? this.player1 : this.player2;
//         this.winner = null;
//     }
Object.defineProperty(exports, "__esModule", { value: true });
var Match = /** @class */ (function () {
    function Match(player1, player2) {
        this.player1 = player1;
        this.player2 = player2;
        this.currentPlayer = this.player1.health < this.player2.health ? this.player1 : this.player2;
        this.winner = null;
    }
    Match.prototype.rollDice = function () {
        return Math.floor(Math.random() * 6) + 1;
    };
    Match.prototype.playTurn = function () {
        var attacker = this.currentPlayer;
        var defender = attacker === this.player1 ? this.player2 : this.player1;
        var attackRoll = attacker.rollAttackDice();
        var defenseRoll = defender.rollDefenseDice();
        var attackDamage = attacker.calculateDamage(attackRoll);
        var defenseStrength = defender.calculateDefense(defenseRoll);
        var damageDealt = Math.max(0, attackDamage - defenseStrength);
        defender.takeDamage(damageDealt);
        if (defender.health <= 0) {
            this.winner = attacker;
        }
        else {
            this.currentPlayer = defender;
        }
    };
    Match.prototype.isGameOver = function () {
        return this.winner !== null;
    };
    return Match;
}());
exports.default = Match;
