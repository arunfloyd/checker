// const Player = require('./Player');
// const Match = require('./Match');

// class MagicalArena {
//     constructor() {
//         this.players = [];
//         this.matches = [];
//     }

//     addPlayer(player) {
//         this.players.push(player);
//     }

//     startMatch(player1Index, player2Index) {
//         const player1 = this.players[player1Index];
//         const player2 = this.players[player2Index];
//         const match = new Match(player1, player2);
//         this.matches.push(match);

//         while (!match.isGameOver()) {
//             match.playTurn();
//         }

//         console.log(`Winner: Player ${match.winner === player1 ? 1 : 2}`);
//     }
// }

// module.exports = MagicalArena;


import Player from './Player';
import Match from './Match';

class MagicalArena {
    players: Player[];
    matches: Match[];

    constructor() {
        this.players = [];
        this.matches = [];
    }

    addPlayer(player: Player): void {
        this.players.push(player);
    }

    startMatch(player1Index: number, player2Index: number): void {
        const player1 = this.players[player1Index];
        const player2 = this.players[player2Index];
        const match = new Match(player1, player2);
        this.matches.push(match);

        while (!match.isGameOver()) {
            match.playTurn();
        }

        console.log(`Winner: Player ${match.winner === player1 ? 1 : 2}`);
    }
}

export default MagicalArena;
