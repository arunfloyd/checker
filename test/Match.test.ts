const Player = require('../src/Player');
const Match = require('../src/Match');
const assert = require('assert');

describe('Match', () => {
    it('should create a match between two players', () => {
        const player1 = new Player(50, 5, 10);
        const player2 = new Player(100, 10, 5);
        const match = new Match(player1, player2);
        assert.strictEqual(match.player1, player1);
        assert.strictEqual(match.player2, player2);
    });

    it('should determine the current player correctly', () => {
        const player1 = new Player(50, 5, 10);
        const player2 = new Player(100, 10, 5);
        const match = new Match(player1, player2);
        assert.strictEqual(match.currentPlayer, player1);
    });

    it('should play a turn and update health correctly', () => {
        const player1 = new Player(50, 5, 10);
        const player2 = new Player(100, 10, 5);
        const match = new Match(player1, player2);
        const initialHealthPlayer1 = player1.health;
        const initialHealthPlayer2 = player2.health;
        
        match.playTurn();
        
        // Check if the health of both players has been updated correctly after a turn
        assert(player1.health !== initialHealthPlayer1 || player2.health !== initialHealthPlayer2);
    });

    it('should determine the winner correctly', () => {
        const player1 = new Player(1, 5, 10);
        const player2 = new Player(80, 10, 5);
        const match = new Match(player1, player2);
        while (!match.isGameOver()) {
            match.playTurn();
        }
        assert.strictEqual(match.winner, player2);
    });
});


