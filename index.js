
module.exports = class ConsoleGame {
    /**
     * Create game map and background character 
     * @param {Number} x A number for X axis of map. default: 16
     * @param {Number} y A number for Y axis of map. default: 8
     * @param {String} character Maps backgound character.  default: "█" 
     */
    constructor(x = 16, y = 8, character = "█") {
        this.alan = createMap(x, y, character);
        this.x = x;
        this.y = y;
        this.character = character;
    }
    /**
   * Reset the map
   */
    reset() {
        this.alan = createMap(this.x, this.y, this.character);
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
        for (const hat of this.alan) {
            for (const eleman of hat) process.stdout.write(eleman);
            process.stdout.write("\n");
        }
    }
    /**
   * Set a character in map
   * @param {Number} x A number for X axis of character. Default: 1
   * @param {Number} y A number for Y axis of character. Default: 1 
   * @param {String} character Character for putting. Default: Blank
   */
    set(x = 1, y = 1, character = " ") {


        this.alan[y - 1][x - 1] = character;
        this.render();

    }
    /**
   * Get a character from map
   * @param {Number} x A number for X axis of character.
   * @param {Number} y A number for Y axis of character.
   */
    get(x, y) {
        return this.alan[y - 1][x - 1];
    }

}



function createMap(x, y, character) {
    var arr = [];

    for (var i = 0; i < y; i++) {
        arr[i] = [];
        for (var it = 0; it < x; it++) {
            arr[i][it] = character;
        }
    }

    return arr;
}