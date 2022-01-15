const ConsoleGame = require("../index.js")

const game = new ConsoleGame(16, 8);

game.render()

for (const [x, y] of [[2, 3], [3, 4], [4, 5], [5, 6]]) {
    game.set(x, y)

}

for (const [x, y] of [[2, 3], [3, 4], [4, 5], [5, 6]]) {
    game.set(x + 2 + 4, y)
}


