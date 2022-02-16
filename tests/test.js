const ConsoleGame = require("../index.js");

const game = new ConsoleGame();
console.log("OYUN BAŞ")
game.render();
const write = [[1, 2], [2, 3], [3, 4], [4, 5]];

for (const [x, y] of write)
    game.set(x, y);

for (const [x, y] of write)
    game.set(x + 6, y);
    console.log("OYUN SON")
