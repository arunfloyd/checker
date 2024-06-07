const Player = require('../src/Player');
const assert = require('assert');

describe('Player', () => {
    it('should create a player with given attributes', () => {
        const player = new Player(50, 5, 10);
        assert.strictEqual(player.health, 50);
        assert.strictEqual(player.strength, 5);
        assert.strictEqual(player.attack, 10);
    });

    it('should roll a dice and return a value between 1 and 6', () => {
        const player = new Player(50, 5, 10);
        const roll = player.rollAttackDice();
        assert(roll >= 1 && roll <= 6);
    });

    it('should calculate damage correctly', () => {
        const player = new Player(50, 5, 10);
        const damage = player.calculateDamage(3);
        assert.strictEqual(damage, 30);
    });

    it('should calculate defense correctly', () => {
        const player = new Player(50, 5, 10);
        const defense = player.calculateDefense(2);
        assert.strictEqual(defense, 10);
    });

    it('should reduce health correctly', () => {
        const player = new Player(50, 5, 10);
        player.takeDamage(20);
        assert.strictEqual(player.health, 30);
    });
})