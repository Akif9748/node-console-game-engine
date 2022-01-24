/**
 * ConsoleGame class. For creating a new console game.
 */
class ConsoleGame {

    /**
     * Create game map and background character 
     * @param {Number} x A number for X axis of map. default: 16
     * @param {Number} y A number for Y axis of map. default: 8
     * @param {String} character Maps backgound character.  default: "█" 
     */

    constructor(x = 16, y = 8, character = "█") {
        this.map = createMap(x, y, character);
        this.x = x;
        this.y = y;
        this.character = character;
    }
    /**
   * Reset the map
   */
    reset() {
        this.map = createMap(this.x, this.y, this.character);
    }
    /**
    * Clear the console
    */
    clear() {
        console.clear();
    }
    /**
    * Render the map
    */

    render() {
        this.clear();
        var write = "";
        for (const line of this.map)
            write += line.join("") + "\n";

        process.stdout.write(write);
    }

    /**
   * Set a character in map
   * @param {Number} x A number for X axis of character. Default: 1
   * @param {Number} y A number for Y axis of character. Default: 1 
   * @param {String} character Character for putting. Default: Blank
   */
    set(x = 1, y = 1, character = " ") {
        this.map[y - 1][x - 1] = character;
        this.render();
    }
    /**
   * Get a character from map
   * @param {Number} x A number for X axis of character.
   * @param {Number} y A number for Y axis of character.
   */
    get(x, y) {
        return this.map[y - 1][x - 1];
    }

}



function createMap(x, y, character) {
    const arr = [];

    for (var line = 0; line < y; line++) {
        arr[line] = [];

        for (var i = 0; i < x; i++)
            arr[line][i] = character;
    }

    return arr;
}

module.exports = ConsoleGame;
