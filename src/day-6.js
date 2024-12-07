/*
--- Day 6: Guard Gallivant ---
The Historians use their fancy device again, this time to whisk you all away to the North Pole prototype suit manufacturing lab...
in the year 1518! It turns out that having direct access to history is very convenient for a group of historians.

You still have to be careful of time paradoxes, and so it will be important to avoid anyone from 1518 while The Historians search for the Chief.
Unfortunately, a single guard is patrolling this part of the lab.

Maybe you can work out where the guard will go ahead of time so that The Historians can search safely?

You start by making a map (your puzzle input) of the situation. For example:

....#.....
.........#
..........
..#.......
.......#..
..........
.#..^.....
........#.
#.........
......#...
The map shows the current position of the guard with ^ (to indicate the guard is currently facing up from the perspective of the map).
Any obstructions - crates, desks, alchemical reactors, etc. - are shown as #.

Lab guards in 1518 follow a very strict patrol protocol which involves repeatedly following these steps:

If there is something directly in front of you, turn right 90 degrees.
Otherwise, take a step forward.
Following the above protocol, the guard moves up several times until she reaches an obstacle (in this case, a pile of failed suit prototypes):

....#.....
....^....#
..........
..#.......
.......#..
..........
.#........
........#.
#.........
......#...
Because there is now an obstacle in front of the guard, she turns right before continuing straight in her new facing direction:

....#.....
........>#
..........
..#.......
.......#..
..........
.#........
........#.
#.........
......#...
Reaching another obstacle (a spool of several very long polymers), she turns right again and continues downward:

....#.....
.........#
..........
..#.......
.......#..
..........
.#......v.
........#.
#.........
......#...
This process continues for a while, but the guard eventually leaves the mapped area (after walking past a tank of universal solvent):

....#.....
.........#
..........
..#.......
.......#..
..........
.#........
........#.
#.........
......#v..
By predicting the guard's route, you can determine which specific positions in the lab will be in the patrol path.
Including the guard's starting position, the positions visited by the guard before leaving the area are marked with an X:

....#.....
....XXXXX#
....X...X.
..#.X...X.
..XXXXX#X.
..X.X.X.X.
.#XXXXXXX.
.XXXXXXX#.
#XXXXXXX..
......#X..
In this example, the guard will visit 41 distinct positions on your map.

Predict the path of the guard. How many distinct positions will the guard visit before leaving the mapped area?


--- Part Two ---
While The Historians begin working around the guard's patrol route, you borrow their fancy device and step outside the lab.
From the safety of a supply closet, you time travel through the last few months
and record the nightly status of the lab's guard post on the walls of the closet.

Returning after what seems like only a few seconds to The Historians,
they explain that the guard's patrol area is simply too large for them to safely search the lab without getting caught.

Fortunately, they are pretty sure that adding a single new obstruction won't cause a time paradox.
They'd like to place the new obstruction in such a way that the guard will get stuck in a loop, making the rest of the lab safe to search.

To have the lowest chance of creating a time paradox, The Historians would like to know all of the possible positions for such an obstruction.
The new obstruction can't be placed at the guard's starting position - the guard is there right now and would notice.

In the above example, there are only 6 different positions where a new obstruction would cause the guard to get stuck in a loop.
The diagrams of these six situations use O to mark the new obstruction, | to show a position where the guard moves up/down, - to show a position
where the guard moves left/right, and + to show a position where the guard moves both up/down and left/right.

Option one, put a printing press next to the guard's starting position:

....#.....
....+---+#
....|...|.
..#.|...|.
....|..#|.
....|...|.
.#.O^---+.
........#.
#.........
......#...
Option two, put a stack of failed suit prototypes in the bottom right quadrant of the mapped area:


....#.....
....+---+#
....|...|.
..#.|...|.
..+-+-+#|.
..|.|.|.|.
.#+-^-+-+.
......O.#.
#.........
......#...
Option three, put a crate of chimney-squeeze prototype fabric next to the standing desk in the bottom right quadrant:

....#.....
....+---+#
....|...|.
..#.|...|.
..+-+-+#|.
..|.|.|.|.
.#+-^-+-+.
.+----+O#.
#+----+...
......#...
Option four, put an alchemical retroencabulator near the bottom left corner:

....#.....
....+---+#
....|...|.
..#.|...|.
..+-+-+#|.
..|.|.|.|.
.#+-^-+-+.
..|...|.#.
#O+---+...
......#...
Option five, put the alchemical retroencabulator a bit to the right instead:

....#.....
....+---+#
....|...|.
..#.|...|.
..+-+-+#|.
..|.|.|.|.
.#+-^-+-+.
....|.|.#.
#..O+-+...
......#...
Option six, put a tank of sovereign glue right next to the tank of universal solvent:

....#.....
....+---+#
....|...|.
..#.|...|.
..+-+-+#|.
..|.|.|.|.
.#+-^-+-+.
.+----++#.
#+----++..
......#O..
It doesn't really matter what you choose to use as an obstacle so long as you and The Historians can put it into position without the guard noticing. The important thing is having enough options that you can find one that minimizes time paradoxes, and in this example, there are 6 different positions you could choose.

You need to get the guard stuck in a loop by adding a single new obstruction. How many different positions could you choose for this obstruction?

*/

export function executeDay6() {
  console.log('Day 6: Guard Gallivant');

  const input = `..........#.............................#...............#...........#....................#...........#............................
..............................#.......#...#.....#.....#...............#.#..#.......................#............#.................
.............#...........#.#........#............#..........................#.........#.......#......#............................
......................................................#....#..#.............#................................#...#............##..
...............#.....#....................................#......................................................#................
..................##............#......#...............................................................#...................#......
.#......#...........................................................#............................#................................
#..#.............#...............................#.....#....#.............................#....#..............................#...
#...##..........#.........................#.................................................#............#...............#........
............#...............#..............................................#.................................#..........##........
..............#...................#......##...#.....#....................#.......................................................#
.#.....#....#......................#...#........................................#.#.............#.........#.......................
#..#...............#........##.........#.....#..........#.....##.........................#.....#.#................................
...............#...............................#.....#.................................................#..##......................
......#...................#..........#...........................................#....#...........................................
...............................................#...#....##.................................................#.....#................
.................#.........#..............................#........#...#...#...................................#..................
...........#..#.....#...#.........................#..........#.#.............#....#...................##..........................
.........................................#.........................#.#............#...#...##............................#.........
.....#......................................#....................................................#..............#.................
..................................................#..................#................#.............#.#..#..................#.....
............................................#.....#......................#........#..........................................#....
.......#..........................#...#...................................#.........................#...#..........#......#.......
............#...........##........................................................................#......................#........
#.#...............................................#........#..........#.#..#...#................................#.................
..#.........................#.#........................#....##..................................................#............#....
.....................................................................................#...............#...........#..........#.....
....................#..........#................................#...............................................#.................
#..............#.#...........#.........#..........#..........................#......................##........#.........#.........
....#....#...............................................................................#...#...........#............#...#...#...
.......................................................##......................#...#................................#.............
.......#...........##...........................#..............#..............................#...................#......#........
......#.........#..............................................................#........#..#..........#.......#..#...#.....#....#.
....#.............................................#........#....#..................................#..............................
..........#......#...........#....................................#..............#.......#...#............#.......................
...........................................................................................#.......#..............................
.#..................................................#.............................#..................#...................#........
......#..#.#................#.....................#..................................#.............#...............#..............
...............................#..................#........#......................................................................
......................#..................................................................................#.........#..............
...............................................................................................................................#..
.......#..............#...........................................................#......................#.......................#
#...............................#..............................#.......#..............................#...#...#........#..........
............................#....#...#.........#....#................................................................#............
.....................#.................................................................#..#....#..................#...............
......................#.............#.............................#...................................................#...........
....#.................#.#.........##................#.....#....................................................#.............#....
...............................#...#...................#.......................................#......#...........................
....#.............................................................................................................................
...#.......................................................................................................#............#.......#.
..#.............##.............................................................#...#............................#............#....
......................#.......#............#........................................................#..................#......#...
...................#.............#..................#..............................#............#........#...................#....
....................#...........#.........................................................#......#.......#...........#.....##.....
...........#.........................................#.............................#..............#..................#............
......................#.........#...................#......#...........................................#..........................
..#....#...#.............................#..............#.....................#............#...................................#..
.....#.............................#....#..................................#...................#...#.............#................
...................#...#...........#........................#.............#........................#...#.............#..........#.
...#...........#......#.......#..............#......#..........#.....#............................................................
..#......................................................#......#...........................#...........#......#..#...............
........#............................#.#....................#...#...#......#.....#...............................................#
.............#....#........#.........................................................................................#.........#..
....................................................................................................#.............................
..#........................#....#............................................................................#....................
.......................................#.....#.#.......................................#......#........#.#...................#....
.................#........#....................................#...#..#................................#..........................
...........#.................................................................................................#....................
......................#..................#...#.............#................##................#.......#...........#.........#.....
............#..#................#.............................................#............##..................##..........#......
......#.#.......................#............#...........................................................#........................
#......................................#.#......^...............................................#.................................
........#...........................................................#...............#.............................................
...#.............................................#.................#...............#.............................#...#.#..........
....................#........#...........##.......................#.................#..................#................#.........
#.................................................................................................................................
............#.......................................................................................#.#.........#..............#..
...............#....#............#..................................................#......##.................................#...
.............................#.........#...............#......#.......#.................#........................#........#.......
......................................................#........................................................#.................#
.................#.#...............#......................................................................................#....#..
........#.............#......................#...........#...........#......................................#..............#......
......................#......................#...........#.....#.....##............................................#....#.........
.............#................................................................................#..........#.....#..................
............##...........................#.................................#..#.#....................................#............
..............................................................................................#............................#......
...#.............................#..#..#....................................#..............#....#.................................
.....#..........................................................#.....#......#.........#..........................................
....##......#.....................#..........#..............#..................#.#..............#........#...........#....#.......
.....#...#.........#............#............#.............................................................#......................
.........#...................................#...........#.....................................##.....#............#..............
.....##.#............##.....................#..........................#.................................#........#...............
.......................#..............##...#...................................................#.........#........................
..#........#.......#...#..##............#....................................................................#...........#.....#..
..#.....................................................................#..............#.............#...................#........
...........#..........#..........#.....#.................................................................#..#.....................
..........#................#........................................................##.#...............................#.#......#.
#............................................#...........................##...#.......................#.............#.............
..#............#........................................................................................................#.........
....................................................#....................#............#...............#..........................#
........................................................................#.......#.....................................#.#.........
................#..#......................#...........................................#...........................................
........................##............................................#.............##..........................#.......#....#....
.........#.......#..............................#......#....#............#..................#...#.................................
#.........#............................#....#.#..#.........................................................##.....................
.#..##...............#....#.............................#...............#........#.......................................#......#.
...#............................................................#.....................#.................#.....#...................
...#...........#..#.............................#.....#.............................................................#.............
...#.........................#..............................................................................................##....
.........................#...........................#.......................#...........#........................................
.#..................................#.............................................................................................
....................................................................#...........##.....#.#.........#.....#........................
................#...............................#........#........................................................................
......#....#.................................#...................................#.#.........#.....#....................#.........
................#..............................#.......................#...#.....#.......#................#.......................
....................#......................................#..#...........#.#.................#...#.......................#.......
.............#..#...#............................#.#...........................................#.......................#..........
.........#..........#.................#....................................#.#..........................................#.........
....#.............#......................................................#...........#...........................#................
........#.#............................#...........................................#.................#..............#..........#..
..............#..........................#............#.........#....#...#.....#.........................#....#...............##..
...................#.........................................................#.......#........#..............#..........#.........
.#........#....#..................................#..#.#...............#............#...........#.................................
...............................................................................................#.....#....#.............#.........
...........#..........#...........................................#.........#..............#................#..........#..........
............#.................................###..............#.#...............................................................#
......#...................................................................................#............#...#..........#.....#.....
.............#..................#...................#......#.........#..#.......................#....#................#..........#
..#....##................................#.................#...........................#.......#....#...#..........#..............
...............................#......................................#.........#.............#......................#..........#.`.split('\n').map(row => row.split(''));

  // const input = `....#.....
  // .........#
  // ..........
  // ..#.......
  // .......#..
  // ..........
  // .#..^.....
  // ........#.
  // #.........
  // ......#...`.split('\n').map(row => row.split(''));


  const { uniquePositions } = simulateGuardianMovesPart1(input);
  console.log('Uniq steps count part 1:', uniquePositions);

  console.log('Starting part 2...');
  const start = Date.now();
  const result2 = countLoops(input);
  const end = Date.now();
  console.log('Execution time:', end - start);
  console.log('Uniq steps count part 2:', result2);
}

function countLoops(input) {
  let count = 0;
  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input[i].length; j++) {
      const item = input[i][j];
      if (item === '#' || getGuardianSymbols().includes(item)) {
        continue;
      }

      const copy = JSON.parse(JSON.stringify(input));
      copy[i][j] = '#';
      const loopFound = simulateGuardianMovesPart2(copy);
      if (loopFound) {
        count++;
      }
    }
  }

  return count;
}

function simulateGuardianMovesPart2(input) {
  let [row, col] = getCurrentPosition(input);
  let direction = input[row][col];
  let isLoop = false;
  let startingPoint = [row, col].join(',');

  while (true) {
    const [nextRow, nextCol] = getNextCellCoordinates(row, col, direction);


    if (isOutOfBounds(nextRow, nextCol, input)) {
      break;
    }

    if (startingPoint === [nextRow, nextCol].join(',')) {
      isLoop = true;
      break;
    }

    const nextCellValue = input[nextRow][nextCol];
    if (isFreeCell(nextCellValue)) {
      const currentValue = input[row][col];
      const newValue = getNewCellSymbol(direction, currentValue);
      input[row][col] = newValue;

      if (newValue !== currentValue) {
        startingPoint = [nextRow, nextCol].join(',');
      }
      row = nextRow;
      col = nextCol;
    } else {
      direction = turnTheGuardian(direction);
      continue;
    }
  }

  return isLoop;
}

function getNewCellSymbol(direction, currentValue) {

  if (direction === '^' && currentValue === '^') {
    return '|'
  }

  if (direction === '^' && currentValue === '.') {
    return '|'
  }

  if (direction === '^' && currentValue === '-') {
    return '+'
  }


  if (direction === '>' && currentValue === '.') {
    return '-'
  }

  if (direction === '>' && currentValue === '|') {
    return '+'
  }

  if (direction === 'v' && currentValue === '.') {
    return '|'
  }

  if (direction === 'v' && currentValue === '-') {
    return '+'
  }

  if (direction === '<' && currentValue === '.') {
    return '-'
  }

  if (direction === '<' && currentValue === '|') {
    return '+'
  }

  return currentValue;

}

function simulateGuardianMovesPart1(input) {
  let [row, col] = getCurrentPosition(input);
  let visited = new Set();
  let steps = 0;
  let outOfBounds = false;
  let direction = input[row][col];

  while (true) {
    visited.add([row, col].join(','));
    const [nextRow, nextCol] = getNextCellCoordinates(row, col, direction);


    if (isOutOfBounds(nextRow, nextCol, input)) {
      outOfBounds = true;
      break;
    }

    const nextCell = input[nextRow][nextCol];
    if (!isFreeCell(nextCell)) {
      direction = turnTheGuardian(direction);
      continue;
    }


    row = nextRow;
    col = nextCol;
    steps++;
  }

  return { uniquePositions: visited.size, outOfBounds };
}

function getCurrentPosition(input) {
  for (let i = 0; i < input.length; i++) {
    const row = input[i];
    for (let j = 0; j < row.length; j++) {
      if (getGuardianSymbols().includes(row[j])) {
        return [i, j];
      }
    }
  }
}

function getNextCellCoordinates(row, col, direction) {
  if (direction === '^') {
    return [row - 1, col];
  }

  if (direction === '>') {
    return [row, col + 1];
  }

  if (direction === 'v') {
    return [row + 1, col];
  }

  if (direction === '<') {
    return [row, col - 1];
  }
}

function isOutOfBounds(row, col, input) {
  return row < 0 || row >= input.length || col < 0 || col >= input[0].length;
}

function isFreeCell(cell) {
  return cell !== '#';
}

function turnTheGuardian(current) {
  if (current === '^') {
    return '>';
  }

  if (current === '>') {
    return 'v';
  }

  if (current === 'v') {
    return '<';
  }
  if (current === '<') {
    return '^';
  }
}

function getGuardianSymbols() {
  return ['^', '>', 'v', '<'];
}