// const Player = require('./Player');
// const MagicalArena = require('./MagicalArena');

// const arena = new MagicalArena();
// const playerA = new Player(50, 5, 10);
// const playerB = new Player(100, 10, 5);
// arena.addPlayer(playerA);
// arena.addPlayer(playerB);
// arena.startMatch(0, 1);


import Player from './Player';
import MagicalArena from './MagicalArena';

const arena = new MagicalArena();
const playerA = new Player(50, 5, 10);
const playerB = new Player(100, 10, 5);
arena.addPlayer(playerA);
arena.addPlayer(playerB);
arena.startMatch(0, 1);


///This is Only for testing 