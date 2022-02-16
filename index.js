/**
 * ConsoleGame class. For creating a new console game.
 */
class ConsoleGame {

    /**
     * Create game map and background character 
     * @param {number} x A number for X axis of map. default: 16
     * @param {Number} y A number for Y axis of map. default: 8
     * @param {String} character Maps backgound character.  default: "█" 
     */

    constructor(x = 16, y = 8, character = "█") {
        this.map = this.#createMap(x, y, character);
        this.x = x;
        this.y = y;
        this.character = character;
    }
    /**
   * Reset the map
   */
    reset() {
        this.map = this.#createMap(this.x, this.y, this.character);
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

        let write = "";
        for (const line of this.map)
            write += line.join("") + "\n";

        process.stdout.write(write);
    }

    /**
    
   * Set a character in map
   * @param {Number} x - A number for X axis of character. Default: 1
   * @param {Number} y - A number for Y axis of character. Default: 1 
   * @param {String} character - Character for putting. Default: Blank
   */
    set(x = 0, y = 0, character = " ") {
        this.#check(x, y)

        this.map[y][x] = character;

        this.render();
    }
    /**
   * Get a character from map
   * @param {Number} x A number for X axis of character.
   * @param {Number} y A number for Y axis of character.
   * @returns {String} Character
   */
    get(x, y) {

        this.#check(x, y);

        return this.map[y][x];
    }
/**
 * @private
 */
    #check(x, y) {
        if (!this.map[y]) throw new RangeError(`The Y must be between 0 and ${this.y - 1}.`);
        if (!this.map[y][x]) throw new RangeError(`The X must be between 0 and ${this.x - 1}.`);
    }
/**
 * @private
 */
    #createMap(x, y, character) {
        const arr = [];

        for (let line = 0; line < y; line++) {
            arr[line] = [];

            for (let i = 0; i < x; i++)
                arr[line][i] = character;
        }

        return arr;
    }

}

module.exports = ConsoleGame;