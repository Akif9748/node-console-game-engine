const ConsoleGame = require("../index.js");

const game = new ConsoleGame(16, 8);

game.render();

const write = [[2, 3], [3, 4], [4, 5], [5, 6]];

for (const [x, y] of write)
    game.set(x, y);

for (const [x, y] of write)
    game.set(x + 6, y);
