# Node.js Console Game Engine
A basic console game engine for Node.js.

## Installation

You can use npm to install Engine: `npm install console-game-engine`

## Quick start

```js
const ConsoleGame = require("console-game-engine");
//New game object
const game = new ConsoleGame();
//First render.
game.render();
/*Result of this render:
████████████████
████████████████
████████████████
████████████████
████████████████
████████████████
████████████████
████████████████
*/

const write = [[2, 3], [3, 4], [4, 5], [5, 6]];


for (const [x, y] of write) {
    game.set(x, y);
}
/*Result of this:
████████████████
████████████████
█ ██████████████
██ █████████████
███ ████████████
████ ███████████
████████████████
████████████████
*/

for (const [x, y] of write){
    game.set(x + 6, y);
}
/*Result of this:
████████████████
████████████████
█ █████ ████████
██ █████ ███████
███ █████ ██████
████ █████ █████
████████████████
████████████████
*/
```

#### Result:
![image](https://user-images.githubusercontent.com/70021050/149624777-96d2fe9a-cd55-4f81-902b-14ddf072e00e.png)

## Usage:
### New Game:
For creating new game map.

```js
//Default values for Class:
const width=16, height=8, backgroundChracter = "█";

const game = new ConsoleGame(width,height, BackgroundChracter);
```

### Render:
For write map to console.

```js
 game.render();
```

### Clear:
For clearing console. No effect to map.

```js
 game.clear();
```

### Reset:
For resetting, backing first version of map (Defined in `new ConsoleGame()`):

```js
 game.reset();
```


### Set:
Setting a Chracter in map:

```js
//Default values for this:
const x=1,y=1, chracter = " ";

 game.set(x,y,chracter );
```
**WARNING:** No need to use the render function, it has render in itself.


### Get:
Getting a Chracter from map:

```js
 const chracter= game.get(1,1);
 console.log(chracter)
```
**WARNING:** It has not default parameters.