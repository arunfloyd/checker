// class Match {
//     constructor(player1, player2) {
//         this.player1 = player1;
//         this.player2 = player2;
//         this.currentPlayer = this.player1.health < this.player2.health ? this.player1 : this.player2;
//         this.winner = null;
//     }

//     rollDice() {
//         return Math.floor(Math.random() * 6) + 1;
//     }

//     playTurn() {
//         const attacker = this.currentPlayer;
//         const defender = attacker === this.player1 ? this.player2 : this.player1;

//         const attackRoll = attacker.rollAttackDice();
//         const defenseRoll = defender.rollDefenseDice();
//         const attackDamage = attacker.calculateDamage(attackRoll);
//         const defenseStrength = defender.calculateDefense(defenseRoll);

//         const damageDealt = Math.max(0, attackDamage - defenseStrength);
//         defender.takeDamage(damageDealt);

//         if (defender.health <= 0) {
//             this.winner = attacker;
//         } else {
//             this.currentPlayer = defender;
//         }
//     }

//     isGameOver() {
//         return this.winner !== null;
//     }
// }

// module.exports = Match;


import Player from './Player';

class Match {
    player1: Player;
    player2: Player;
    currentPlayer: Player;
    winner: Player | null;

    constructor(player1: Player, player2: Player) {
        this.player1 = player1;
        this.player2 = player2;
        this.currentPlayer = this.player1.health < this.player2.health ? this.player1 : this.player2;
        this.winner = null;
    }

    rollDice(): number {
        return Math.floor(Math.random() * 6) + 1;
    }

    playTurn(): void {
        const attacker = this.currentPlayer;
        const defender = attacker === this.player1 ? this.player2 : this.player1;

        const attackRoll = attacker.rollAttackDice();
        const defenseRoll = defender.rollDefenseDice();
        const attackDamage = attacker.calculateDamage(attackRoll);
        const defenseStrength = defender.calculateDefense(defenseRoll);

        const damageDealt = Math.max(0, attackDamage - defenseStrength);
        defender.takeDamage(damageDealt);

        if (defender.health <= 0) {
            this.winner = attacker;
        } else {
            this.currentPlayer = defender;
        }
    }

    isGameOver(): boolean {
        return this.winner !== null;
    }
}

export default Match;
