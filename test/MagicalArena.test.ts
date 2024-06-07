// const Player = require('../src/Player');
// const MagicalArena = require('../src/MagicalArena');
// const assert = require('assert');

// describe('MagicalArena', () => {
//     it('should add players to the arena', () => {
//         const arena = new MagicalArena();
//         const player = new Player(50, 5, 10);
//         arena.addPlayer(player);
//         assert.strictEqual(arena.players.length, 1);
//     });

//     it('should start a match between two players', () => {
//         const arena = new MagicalArena();
//         const playerA = new Player(50, 5, 10);
//         const playerB = new Player(100, 10, 5);
//         arena.addPlayer(playerA);
//         arena.addPlayer(playerB);
//         arena.startMatch(0, 1);
//         assert(arena.matches.length > 0);
//     });
// });

import Player from '../src/Player';
import MagicalArena from '../src/MagicalArena';
import { strict as assert } from 'assert';

describe('MagicalArena', () => {
    it('should add players to the arena', () => {
        const arena = new MagicalArena();
        const player = new Player(50, 5, 10);
        arena.addPlayer(player);
        assert.strictEqual(arena.players.length, 1);
    });

    it('should start a match between two players', () => {
        const arena = new MagicalArena();
        const playerA = new Player(50, 5, 10);
        const playerB = new Player(100, 10, 5);
        arena.addPlayer(playerA);
        arena.addPlayer(playerB);
        arena.startMatch(0, 1);
        assert(arena.matches.length > 0);
    });
});
