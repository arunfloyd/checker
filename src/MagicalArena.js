"use strict";
// const Player = require('./Player');
// const Match = require('./Match');
Object.defineProperty(exports, "__esModule", { value: true });
var Match_1 = require("./Match");
var MagicalArena = /** @class */ (function () {
    function MagicalArena() {
        this.players = [];
        this.matches = [];
    }
    MagicalArena.prototype.addPlayer = function (player) {
        this.players.push(player);
    };
    MagicalArena.prototype.startMatch = function (player1Index, player2Index) {
        var player1 = this.players[player1Index];
        var player2 = this.players[player2Index];
        var match = new Match_1.default(player1, player2);
        this.matches.push(match);
        while (!match.isGameOver()) {
            match.playTurn();
        }
        console.log("Winner: Player ".concat(match.winner === player1 ? 1 : 2));
    };
    return MagicalArena;
}());
exports.default = MagicalArena;
