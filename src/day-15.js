/*
--- Day 15: Warehouse Woes ---
You appear back inside your own mini submarine!
Each Historian drives their mini submarine in a different direction; maybe the Chief has his own submarine down here somewhere as well?

You look up to see a vast school of lanternfish swimming past you. On closer inspection,
they seem quite anxious, so you drive your mini submarine over to see if you can help.

Because lanternfish populations grow rapidly, they need a lot of food, and that food needs to be stored somewhere.
That's why these lanternfish have built elaborate warehouse complexes operated by robots!

These lanternfish seem so anxious because they have lost control of the robot that operates one of their most important warehouses!
It is currently running amok, pushing around boxes in the warehouse with no regard for lanternfish logistics or lanternfish inventory management strategies.

Right now, none of the lanternfish are brave enough to swim up to an unpredictable robot so they could shut it off.
However, if you could anticipate the robot's movements, maybe they could find a safe option.

The lanternfish already have a map of the warehouse and a list of movements the robot will attempt to make (your puzzle input).
The problem is that the movements will sometimes fail as boxes are shifted around, making the actual movements of the robot difficult to predict.

For example:

##########
#..O..O.O#
#......O.#
#.OO..O.O#
#..O@..O.#
#O#..O...#
#O..O..O.#
#.OO.O.OO#
#....O...#
##########

<vv>^<v^>v>^vv^v>v<>v^v<v<^vv<<<^><<><>>v<vvv<>^v^>^<<<><<v<<<v^vv^v>^
vvv<<^>^v^^><<>>><>^<<><^vv^^<>vvv<>><^^v>^>vv<>v<<<<v<^v>^<^^>>>^<v<v
><>vv>v^v^<>><>>>><^^>vv>v<^^^>>v^v^<^^>v^^>v^<^v>v<>>v^v^<v>v^^<^^vv<
<<v<^>>^^^^>>>v^<>vvv^><v<<<>^^^vv^<vvv>^>v<^^^^v<>^>vvvv><>>v^<<^^^^^
^><^><>>><>^^<<^^v>>><^<v>^<vv>>v>>>^v><>^v><<<<v>>v<v<v>vvv>^<><<>^><
^>><>^v<><^vvv<^^<><v<<<<<><^v<<<><<<^^<v<^^^><^>>^<v^><<<^>>^v<v^v<v^
>^>>^v>vv>^<<^v<>><<><<v<<v><>v<^vv<<<>^^v^>^^>>><<^v>>v^v><^^>>^<>vv^
<><^^>^^^<><vvvvv^v<v<<>^v<v>v<<^><<><<><<<^^<<<^<<>><<><^^^>^^<>^>v<>
^^>vv<^v^v<vv>^<><v<^v>^^^>>>^^vvv^>vvv<>>>^<^>>>>>^<<^v>^vvv<>^<><<v>
v^^>>><<^^<>>^v^<v^vv<>v^<<>^<^v^v><^<<<><<^<v><v<>vv>>v><v^<vv<>v^<<^
As the robot (@) attempts to move, if there are any boxes (O) in the way, the robot will also attempt to push those boxes.
However, if this action would cause the robot or a box to move into a wall (#), nothing moves instead, including the robot.
The initial positions of these are shown on the map at the top of the document the lanternfish gave you.

The rest of the document describes the moves (^ for up, v for down, < for left, > for right) that the robot will attempt to make, in order.
(The moves form a single giant sequence; they are broken into multiple lines just to make copy-pasting easier.
Newlines within the move sequence should be ignored.)

Here is a smaller example to get started:

########
#..O.O.#
##@.O..#
#...O..#
#.#.O..#
#...O..#
#......#
########

<^^>>>vv<v>>v<<
Were the robot to attempt the given sequence of moves, it would push around the boxes as follows:

Initial state:
########
#..O.O.#
##@.O..#
#...O..#
#.#.O..#
#...O..#
#......#
########

Move <:
########
#..O.O.#
##@.O..#
#...O..#
#.#.O..#
#...O..#
#......#
########

Move ^:
########
#.@O.O.#
##..O..#
#...O..#
#.#.O..#
#...O..#
#......#
########

Move ^:
########
#.@O.O.#
##..O..#
#...O..#
#.#.O..#
#...O..#
#......#
########

Move >:
########
#..@OO.#
##..O..#
#...O..#
#.#.O..#
#...O..#
#......#
########

Move >:
########
#...@OO#
##..O..#
#...O..#
#.#.O..#
#...O..#
#......#
########

Move >:
########
#...@OO#
##..O..#
#...O..#
#.#.O..#
#...O..#
#......#
########

Move v:
########
#....OO#
##..@..#
#...O..#
#.#.O..#
#...O..#
#...O..#
########

Move v:
########
#....OO#
##..@..#
#...O..#
#.#.O..#
#...O..#
#...O..#
########

Move <:
########
#....OO#
##.@...#
#...O..#
#.#.O..#
#...O..#
#...O..#
########

Move v:
########
#....OO#
##.....#
#..@O..#
#.#.O..#
#...O..#
#...O..#
########

Move >:
########
#....OO#
##.....#
#...@O.#
#.#.O..#
#...O..#
#...O..#
########

Move >:
########
#....OO#
##.....#
#....@O#
#.#.O..#
#...O..#
#...O..#
########

Move v:
########
#....OO#
##.....#
#.....O#
#.#.O@.#
#...O..#
#...O..#
########

Move <:
########
#....OO#
##.....#
#.....O#
#.#O@..#
#...O..#
#...O..#
########

Move <:
########
#....OO#
##.....#
#.....O#
#.#O@..#
#...O..#
#...O..#
########
The larger example has many more moves; after the robot has finished those moves, the warehouse would look like this:

##########
#.O.O.OOO#
#........#
#OO......#
#OO@.....#
#O#.....O#
#O.....OO#
#O.....OO#
#OO....OO#
##########
The lanternfish use their own custom Goods Positioning System (GPS for short) to track the locations of the boxes.
The GPS coordinate of a box is equal to 100 times its distance from the top edge of the map plus its distance from the left edge of the map.
(This process does not stop at wall tiles; measure all the way to the edges of the map.)

So, the box shown below has a distance of 1 from the top edge of the map and 4 from the left edge of the map,
resulting in a GPS coordinate of 100 * 1 + 4 = 104.

#######
#...O..
#......
The lanternfish would like to know the sum of all boxes' GPS coordinates after the robot finishes moving.
In the larger example, the sum of all boxes' GPS coordinates is 10092. In the smaller example, the sum is 2028.

Predict the motion of the robot and boxes in the warehouse. After the robot is finished moving, what is the sum of all boxes' GPS coordinates?

--- Part Two ---
The lanternfish use your information to find a safe moment to swim in and turn off the malfunctioning robot!
Just as they start preparing a festival in your honor, reports start coming in that a second warehouse's robot is also malfunctioning.

This warehouse's layout is surprisingly similar to the one you just helped.
 There is one key difference: everything except the robot is twice as wide! The robot's list of movements doesn't change.

To get the wider warehouse's map, start with your original map and, for each tile, make the following changes:

If the tile is #, the new map contains ## instead.
If the tile is O, the new map contains [] instead.
If the tile is ., the new map contains .. instead.
If the tile is @, the new map contains @. instead.
This will produce a new warehouse map which is twice as wide and with wide boxes that are represented by [].
(The robot does not change size.)

The larger example from before would now look like this:

####################
##....[]....[]..[]##
##............[]..##
##..[][]....[]..[]##
##....[]@.....[]..##
##[]##....[]......##
##[]....[]....[]..##
##..[][]..[]..[][]##
##........[]......##
####################
Because boxes are now twice as wide but the robot is still the same size and speed,
boxes can be aligned such that they directly push two other boxes at once. For example, consider this situation:

#######
#...#.#
#.....#
#..OO@#
#..O..#
#.....#
#######

<vv<<^^<<^^
After appropriately resizing this map, the robot would push around these boxes as follows:

Initial state:
##############
##......##..##
##..........##
##....[][]@.##
##....[]....##
##..........##
##############

Move <:
##############
##......##..##
##..........##
##...[][]@..##
##....[]....##
##..........##
##############

Move v:
##############
##......##..##
##..........##
##...[][]...##
##....[].@..##
##..........##
##############

Move v:
##############
##......##..##
##..........##
##...[][]...##
##....[]....##
##.......@..##
##############

Move <:
##############
##......##..##
##..........##
##...[][]...##
##....[]....##
##......@...##
##############

Move <:
##############
##......##..##
##..........##
##...[][]...##
##....[]....##
##.....@....##
##############

Move ^:
##############
##......##..##
##...[][]...##
##....[]....##
##.....@....##
##..........##
##############

Move ^:
##############
##......##..##
##...[][]...##
##....[]....##
##.....@....##
##..........##
##############

Move <:
##############
##......##..##
##...[][]...##
##....[]....##
##....@.....##
##..........##
##############

Move <:
##############
##......##..##
##...[][]...##
##....[]....##
##...@......##
##..........##
##############

Move ^:
##############
##......##..##
##...[][]...##
##...@[]....##
##..........##
##..........##
##############

Move ^:
##############
##...[].##..##
##...@.[]...##
##....[]....##
##..........##
##..........##
##############
This warehouse also uses GPS to locate the boxes.
For these larger boxes, distances are measured from the edge of the map to the closest edge of the box in question.
So, the box shown below has a distance of 1 from the top edge of the map and 5 from the left edge of the map,
resulting in a GPS coordinate of 100 * 1 + 5 = 105.

##########
##...[]...
##........
In the scaled-up version of the larger example from above, after the robot has finished all of its moves,
the warehouse would look like this:

####################
##[].......[].[][]##
##[]...........[].##
##[]........[][][]##
##[]......[]....[]##
##..##......[]....##
##..[]............##
##..@......[].[][]##
##......[][]..[]..##
####################
The sum of these boxes' GPS coordinates is 9021.

Predict the motion of the robot and boxes in this new, scaled-up warehouse. What is the sum of all boxes' final GPS coordinates?

*/

export function executeDay15() {
  console.log('Day 15: Warehouse Woes');
  let fieldInput = `##################################################
#....O.##O...#.........#..#O........O....#..O.O..#
#.O#..#O......O..O#..O#O.....OOO....#..O......O..#
#.OO.O.O....#..O...#...#..O.OO#....OOO#...O....O.#
#.OO.OO..OO.O.#O...O..#.#.#....OOO#..O...........#
#..#....#.......OOO.O.......OOO.O....OO.O.....O.O#
#........#....O.O.#.#.....O.O...O....O.....O.#..##
#......O..OO#OOO.....O.#.O.##....OO#O.O.O.....O#.#
#.OOOO....#....O.....O..O..OO..O#........OO......#
#....O..........#.OOO.O....OO.O.OO...O.....#.....#
#.#.O.O.O..O.O..#......O..O...O......O.O..O......#
#..O.O.#...OO.OOO##.....#OO..O.O...OO.O.##..OOO..#
#OO....O..O....O...OO......#....O##..........OO..#
#..OO.#.O....O#...O..O.OO.#O.O...O..O#OO.#O...OO.#
#..#.O.....#.O.O..O#O...O.OOO.OO....O..#.O.......#
#....##OO...OOO....#.O.O.............#.......O#O.#
##.O.O.....#.......#..OO.OO.O..O.#O..O..O.......##
#.....O.O..#....#.OO......O...O..........OOO.O##O#
#.##OO#.O..O....O..O...OO..O....O#.....O..O.#....#
#..OO....O.#OO...O#...O.O..OO.#.OO.#O....O#..#...#
##.#O#OOO....#.O#.#..#O.O...O#.OOO.O#....O.O.....#
#.O....O..OOO.OOO.O.O..OO.O.#....O.O....O..O#O...#
#.O..O..O#O..O.O..O.O....O..#..OOO.....#..O...O..#
#..O....O#....O.....O...O....#....O..OO..........#
#.....OO....OO.O.#..O..#@#..O.O#.O.OO.OO..O.O....#
#OO..O......OO.O.#.#...OO#....O#.....#...##..O..O#
#O#O.#O.....O..OO#...OO.O........#.O.O........#.O#
#........#.O....#O.#.O...#...##O..O.O..#....OO#..#
#...OO.#O..O.O........OO.O.O.......OOO..#..O..O.O#
#OO..OOO.#...OO.O...OOO.OO...........O..O...O..OO#
#.O#O.....O....#.#...O.O..O.O...OO.....OOO..#O..O#
#.#O.#.....O.OOOOO.#OO..O.O....##.....OO.OO......#
#.O..OO.....#O.......#...O.O.O.O#....#O..O...O...#
#...OO.O.#OOOOO...O...#.....#....#......#OOOO..#.#
#....O...#.OO.........O..#O.O.O..O.....OOO...O...#
#O...O.......O..O.#..O.....OOO..O.OO....O#..O....#
#OO#...O.OO.........OO..O..O.#O...O.O.....#O.#O..#
##.O#......OO..#O#..O.....O#........O.O..OO....OO#
##.OO.....O.......O.#O..OOO.OO#O.OO.....O......O.#
#O.O.O...O..O.OO.O.........O.#.O.#.....O.O....#..#
#.....O.O.O.....#.#............#......#..O..#....#
#..O........#......O.O..O.O.........O.O.....O..O.#
#.O.#.O..OO....OO.......OO...O.O.....#O.OO.O.O...#
#O.O...#OO..O....#........O#.#....O.OO...O..#O..O#
#OO.....OO.#.....#...O#..#O.OO..OO#..#...O.O....O#
##O..O..O...OOOO#..O...............#....#O..O....#
#.....O.#..........O....#..O##O...O..O.#O.....O.O#
#O#...#..OOO#OO....O.O....#O.OO..O...O..O...O...O#
##.OO#.#..O...O.......#O.#.......O.O..O....O.##..#
##################################################`.split('\n').map(row => row.split(''));
  //   fieldInput = `########
  // #..O.O.#
  // ##@.O..#
  // #...O..#
  // #.#.O..#
  // #...O..#
  // #......#
  // ########`.split('\n').map(row => row.split(''));

  //   fieldInput = `##########
  // #..O..O.O#
  // #......O.#
  // #.OO..O.O#
  // #..O@..O.#
  // #O#..O...#
  // #O..O..O.#
  // #.OO.O.OO#
  // #....O...#
  // ##########`.split('\n').map(row => row.split(''));

  let movesInput = `^>>v<>v>v^^v>vv^><v><vvv^><v>><^v^^<<v^v><<^>><v^^<^^<<v^>^v>vv^^^v<><^><<><<^<<^<v^v^^vvvv><<^^<>>^^vvv<vv<vvv<>>vvv^<><v><>v<^<^^v^<<v^vvv^<^v>v<>><^vv<>>^<v^^>vv^v<><<v^vv>>>><>vv<^^v<<vvvv^<^^v<>v>>>vv^^>>^v^^<<v<>vvv><v<v<<v<v<^^^<<v^v^v<<^<<^>v^vvv<>>^vvv<^<^<^>v^<<<vv>^><<<<><>^v<^<v^>>v<v^>^<>v>v>^<vvv>>><>^^v<v<^<v><>v<>^^>><v^<^<>><<<v>^^v<^^><vv<v<<<<^^>v^<^><>^><^^<v>vvvvv><^><<^v<><<^^vv^<>>vv<^<v^>^<v<^v>>^><>^v<<<>v<^vv>^v^<v^>>^<v>v>v><>v^><v^>v><<<<v<^v^^>v^v<<>v^^vvvv^>>^>>vv<^>>vv>><^<v<>^v>^>^<^<v^<<v>>vv>v<<^>^^<<v>v^<>>><v^^<^<<>^^^^v^^><^^v^v<^^^v^><^>^v><vvvv^^<^<<^<<^>v<^<vv<>>^v<<>v><vv<<>^^v>>><vv><v^v^^v^^<<<<^vv^vv<<>^<vv><v<>>^vv<>vv^<v<^<>^vv>v^^^vv^<^^v^<>^v^v><<<>^>v<v<<^<>>vv>><>^><v<vv>>v>^<^><<v^^v>^v^^>v<v<<<^^^<<<^v^<v<v^<<^<>^^<v><^vv<^>vv<<v<v<<^>^^><>^>>^^^^^<vv<>v>^<v>vv>>>>><><<^^>^^v<<^v<^<<<v<<<<^v<^<<^><>>vv^<<>^^>v>>v^v><^v>>v<v^<><v<<^>^^<^vv>^vv>>>^v<^^><^<>v<<<^^^><^^v^>vv^>v<v><^vv>^<>^v^>v>>v^^v^<<v<>^>^<><<v^<^v>vv<><<v>><^>v^^>^^><^
v><^>^^^<>^<><<>v^^v^><>>>^v^v^<^><<^v>v<^>vvvv^<^<v^^^<>v<^vv<vv^<<>>>^>v<<v>><^>vv^>>>v^>>><>><^v^vv>>v<v<>vv>v^<^v^>v^vv>^v>><<>v^>v^>v<^v>><v^^<vvv><>^v^<^>^v<^>v<<<v<<^^^^v>v>^<<><><v^>>v<v>^<v<v<<^v<v^^<^v>v^^^<>^^v><>v^<v>v<v<>>vv^>^><>v^>>v>>^^<v><v<>v^^<v>>>>>v^v>>^>^v^<>^><^vv<^>vv<vvvv^>>v<^v^^v>^>>v>><>v<v^>>^^^<v<<^>>>>^<^^<><<<>^v<^<^><>>>vv<^>>>v<^^>>><<>>v^^^^^^v<v<<^>^v>^^^>><<><v^>^v^>v^^^^^>v^<>>^^^>^vv^^vv^>>>v><^><<><^v<>>^<>v^>>v^^><>v>v<v>^<v<<vv<vv^^v<>^>^<<v>^>vvv>v^>vvv<^<^v<>^<^v>^^v<v<>v^<^><^>v<v<<>^^vvv><><^^<>^^^vv<v^<^>>>>>v>^^><<^><<v^<<^<<>^>v<v^>vvvv>^v^^<^>>^<<v^>^^>vv><vvvv^v^>^^>>^>v^^vv>v<^<>v^<<v<v>v^>v>>^^><>>^v^<><>>^><>v><vv>>>>v^v<<v>^<^><>>>^<^^v>^<^^>><v><^^^vv>^^><^^<vvv<v>vvv<^^><v^<><vv^vvvv^>^<v<^<>>>>^v^vv>>^><>v^<<><^^<^>v<v<vv<^<<<^v<>^>v>v<<v<<v^^<^<^<><^<^^<v>v>>>^v<^<>^v>^>><>>vv^>v<<>^v>^>^<^<<<><>>v^<^<<<^>^v^<><<^v>>^^<v>v>^>^^<>^><<><>vv<vvv^><<<>^<<v>v^>^<<v^>v<v^><<vv^^^v^v><^^<^>v<v>^>^^<>>>v>v^><<<^>>v>><<v<v^><>^^<<vv<^v<
v^>^v<<v<<v<^v<<v>^><^>^<^^^>vv>v<<vv<v><^v<>v<<>^>v<vv^><<v><v<<^vv^<<<v^^^<<v^<>>^^>v>^><^^^^>v<^<^>^^^<vv^v^<<<^^><<^v^<<^v^<v<vvvv^v<><^<<>v^^<v^v<vv^>>><^^<^v^v<vv^vv^<vvvvvv>v<v><^v>><^<vv^>^>>>^>>^v>v<vv^^vv<<<>><^v>v><<v<<v<^^v<^v>^^>v^>vvv>vvvv^<^v^><v<>>^v>^>v^^^<^v>v^^<>v>vvvv^^<v<^v^v<^><<<^^^^^vv<<<v>^v^<><<v>>><v>>^^<v>v^><><vv><^<vvv<^>>vv^><<<v^<^^<vv^^<^<v<><>v<<^<^^>><^^<>^>><vv<>^v><<<v>^^>^^v^v>vv^>^^>^^^>>v>v>>^^^>vv^^^<^^vv>>^>^v^<>v<<v<>v><^^>v<^v^v>>>vv^><>^>^^>vvv^v>^v>v^>>>v<<^>^^^<<><v^vv^>vv^>>><v<^vvv^<v>>v><<<v^v<^v<v<>^<^>><>>^vv<v^^>^>v^><vv^^v<^<v<<v^>vv>^>^v><<^v^^^>v><>^^^<vv<vv>^^^v>^^>>v><<><>>^v<vvv<>^^^><<>v<vv^^>^><<v<<^><<^^^^>>^^^^<v^v<>^><^<<>><^v<^<v>^>^<><^^v^<<<>v><<v>>v<^<<>v<vv<vv>>>>^><>>v>>^v^v>>v^^>^<><^^v^vvvv^vv>^^<><>><><^<v^<v>vv<v<>>>vvv^<>>>>>v>>vvv^^<^v<^v>v<>^><<>v<^>><>>v<^^<<^<^^<^v>>v<<^<vv<v^<>>^v^<v^v>v>vvvv^vv><>vvvv>^v>vv^^vv<>v><v><><v>>^^^<v>v<^^v<^^>^v><^<<<>v^><>><<>^<>>v^vvv^vv^><v>><^v<^<>^>^^><>^>v><<^^^><<<<<v>><
><>>v<<<v<^v^<v^^<>^>>vvv<<v^>^>v>^>><v^v^<v^<<vv<v<v>^v<^><v>><^vv^vvv^><<>><^>^^v^^>^<v>v>>>^^^^^>v^v<<^vvv>^<vv>v>^v^^^^><<v>^<<<<v<^v<^^>vv^v^<vv^v>^^>><v<<<^^^^^<<^v>>>>>>><<<>v<<><<<v>>>^<>^><<vvv^<^>v<v<^^><v>>v<<v^v^<<^vv<v>vvv<>v^>><^^v>><^vv>v^^^>^^<><<v<v<v<>>^>>^^v<><v><>vv<<v^^^v^>^<>^>^<^^>v>vv^<<<v>>><v^<>^<v^v<<<<^v>>>v><<>>v^^v^^v>>^v^^^>>vv>>^>vv><>vv>>v<^><<>><v^^>^>>v^<vv^^>^<^^>><^<>^<<<<<vv>><<^>^^>^<^<<<><>v<<^^v<>^v^v<><v^v>vv<><>>vvvvvv<v>^><>v<>><vvv<><vv^>>>>v<^^>v^v><>^<^v^^v^>v>v<^>^>v>>v<^^vvv^v<><^<^^<>v>v^^<v^>v>^^v>>^><>v^vv<<v<^>v^^<>vv>>^^^v><>^v>^v<<>>>^^^>^<><>^>v^vv>>v^vv<>>^^v>v>>>^>>v^>v^^^><v<^<>^<<>><v^><<<><<v<v><^>v><>^><^^v<>vvv<v>>v>v>v>^><<><vvv^<^<<v^v^vv^<>^^>>v^v^<v^v^v^vv^><>v^>v<>^^v^^><>>^^^>><>>v<v<^v><>>>v^<<^<^<vvv>><>v^vv^<<<<<^><^>v>vv<v>>v>>v>v>>^<v<^>v>><^<<^v>^>^v>^>><<>v^v<>^<<^^v<<>^v<vv<vv^>^<>vv<<<vv<>>v>^^<<<^<><^<<v>v>v^v<<v><v><^<v>v>vv>v>^vv<<<>v<>^^<v<<>v^^vv<>>^>v><vv^<>>vv><v^v>^<v><<^^v^v^v^^vv>^>v<<>vv<^<><>^^>>^
^<<^^<<><^^v<^v<<<^>v^<><<<^^v^>>>^<^<^>^<^v<^<^v<>>v<^v><>^^^^^>^<v>^^<^>>^^>><>^><>^<<^v>>^v^v^^<^<v^<<>>v>^v>><v<<v>>>>v^>^<<^<>><><>>>^^>^>>^v^>v^v>>>v<^<v^><<><^<^<v<<>>>v^^^<vv><>>^<<^v^v<^^^<>v>>^^<>^^v^<<><^^<><>v<^^v<^>^<^v>vvv>>>>>v^v<^v<^^^>^^<><>>v^><vv<^<<>>v^<v>>vv<^v<^vv>^<v<^<><<><^>>vv<>><<<>^v>>>^^^^>v<v>^^><<v<>vv>^<v<<^v>><v<>^v<v<v^<vv^<v^v<v<^<v>>>vv>^^<<<>^>^<<<<^<^v^<<v<<><^^><^>^^<>><<<^<<<>><v><<>v^<><><><<v>v^^>^^<>>>^^v<>>><^^v^^>>>^<^^>v<>v><^v^v<>v>^^>>^>><^vvv<<<^><>v^<<<^v>^><^vvv^^v<<^<^>^><<^v<>vv><vv>vv>v^>^<>><<><v><><v^>^v><><<>^<^^^v>^vv^>>>vvv^>v<>^<>>v^^v^^v^^<>v<v<<^^>>v<^<<>^<<>^>^^<vv<><^^<^v^v^<><<v>vv<v><<vvv^>>^^^^^>^>^^><^<v<>^><vv<^^^v^^>^<^v^<v<^<<>>v>^>v>^v>v^vv^<v^^v<<v<>^><>>><v<^v^^^vvvv^v<v^v<<vv<^<^<>>v^vv<<^^<><vvv<><><^^>v^>>^>^^<>>^<^v^>vv>>v^v<v<><><><^v^v><^^<v<^<<<v<<^>^<>v>v^^>>^>^<<^v>^<<<^><^<><v^><^v^>^>>vv<v^^>v<>v^v<>^><^>v>>^<<<^^v^^^^>vv^v><^^<>vvv^vv><>><vv>v>v<^<<><<^vv^>^>>v>><>^<^<>>v^<>>><><v>>^<<^>>><vv^<^>><v>v
vv<>vv^vv^^v<>>>^vv>^>vvv^<<>v>^<>><v><^>^<><<v>^>v><<^vv^>><>v<^^^<^>><<^v<^^<><^>vv>v<vvv^<><<<^v>^>v<<^>^^<>><^<<>v<<vv^vv<^>^>^^<^<v^^^><>^v<v<vv<><<>vv>^<^^v><v^v<<<vvv^^<<vv^v<<<^v^><^vv<<^<^<^<^<v>^<vv<v>vvvvv^<>v>vv><v^<>^vvvv>^v^^^v>><>^v><^<^vvv^^<v<<^><v<<>^>^^>^>^v^<^vv^v^>>^<>>>^><>^^v>>vvv>>>>v<>v^>vv>v>>v>vv<><vv^v<><<<>vv^vv<^><><^<v><>v>v^>^<vv>>v^v>v^><<<^>^v^v<vvv<^<v><^>><>^^^<^vvv>>v^^v>v^v>^>><v<^>^<v^^^^v><^^vv<vvv><<>><<^<><<<>>><>v^vv^v<v>v<<v<v>>>>^v>><<>^^vv>^>v^<>v>^<<<^^>^^v<<vv^><>v>v>^^^><vv<<<^>>>vv^>>>>><>><^^^v>v^^v>v<>^<>><>v^^<<<vv>><<<^^^>v<^><^vv^^^<<v^<^v><v<><^v>vvv><<<^>>^v<>>v^<<>v^v<<^>>><<v<<v^^<^^vv^vv>v<v><^>^>>>^^v^vv^<>v^^^v>vv<<>v><^v>^>>^<v^v<<^vv^v^<><^v<^>>><<^>><<<>>>^>^^v^>v^v^>^^>^^>v<v<>>^v<^>vv>><^<>^v>^<v^>>v^>>^v><^<>v>^><<v<^<>^<v<>v><vv^<v^vv<^>^^^<^>v^<^v^<>v><<v^>^><<^<<<><v<vv<><<vv>^>^<^^vvv^^<>>v<^^>^<vv>vv<v^^^>^<^^>^>><>^>><^>>v<^v<v^<<^v<vv<>^>v>^vv>^><^v>vv<^<vv><v>v<v<v<>><><<^v^v>>^v^^v>v^v<><^^v>v<^>v><<^<vv^vv>>^
<v>>^<v>^vv^<v>vv^<^>>><v<^>>v>>v<<vvv><^<^v^vv>^v^v^^^<v^>><><v>^>><<>><v><<^<>>><^<^v<<<><v<vv<<<<<<><>>>^v^>v^<^v^><v<v^^^^^vv<v<><^^><>v>>vv^>^>>^><>^><>^>v><vv>><>^vv>vv^vv<v^<<<>><^<^>^v^v<>v^<v<v>v^vv<^<^>vv<^v^^<<>^>>^><v>>>>v>>v<>><^<><>>^^v^>><<^^><>>^v^>^<><^v<<><^>v^<>vv<v<<<v^v^^v<v^<<^>><>>>v><<^<^^>^>^^>>>><<<<^>>>v<^<<^vv<vvv><^>>^<>>>^^>>><<<<vv<>v^^^^<>vv><>v^v^^^><><v^>><<v<>vv>^^>vvv^v^^<>>^^v^^>>^^v>>^<>^v>v>><^v><^>>v^v^>vv^v<^^v<><<<<<<<vv<>>>^^vv>v<<^v^>v^^>^^<v^<v^^v>>><<><^v^v^><<^>^<^<v^><<<^>^<^v^<<<v<^^>vv<<^^v>v^^<v<^>^^>^^^vvv>v^^^^>>v<<>>^<^<<v><^>>v>><^<<<>v>^v><^<<^^^v^>v<>>v<^v^v><v^v>^<>v><^v<>><>vvv^<v^>v^<v>^^^v<>>>>^v^<<vvvv>^>v^^<v<<^v<<>>vvv<<v>>><<^<^^vv<>vv<>^^>^vv^v<<^<>^^<^<^<vv<^v^v^^>>><vvv^v>>>^<>v<^v>><<><<>v>^^^^v<<>^<<<>^^<v^vv^<v^^^>>^v>^^>^v^<<^^<^>><>>^^<<vv>>v>><>>v^^^v<v^<>>>>>><<^^v<v<<v><><vv>^>^^<<v>^^<v<<v^v>><v^<^v<>^>^vv>>v^v<vv><^>vv^><^><>^^^><><>>>>v^^^<<<<>^<>><v^><^<<><^vvv>>v^<>^<^^v>v<>><>v>^<<v^<vv^v^^>^v><^<>><<v^<v
^vv<><v<v<<v<v<>>vv><>^><v^^<<^>>v^<<><<>^v^^^<v>^<^><^>>v^^>^^^^<>^v^>>v><^>vv^<^<><v^<>vv^>><<<<>vvv>>^<v^>v^^<<<<^v^<^<v>vv>^>v>^<^>>><v>><^<v<v<^<v<<^^^v<^><^v^<^^<v<vv><<^<<<<<vv<<><^v^<v><<^v^^<^v><v>v>^v^<v>v<v^>>>v<<<^<<>^>>vv^v^<v>^>v^><<>>v^v>>^v>^><v^v><>v^<<><vv<<v>^^^<>><v<v>>vv^>^<<vv>^<^<^v<^>><v^><v^^^v>><<<^v>v<<v^^vv>>^<v>^v>>>^vv^<v^^^>>><^>^>><vv>><v<^vvv><<><<^^>>>^v^^<v^vv<>^>^>^^v^v^<<<>vvv>>v<^<v<>^v<v<>^>^v>>>>vvvv>v^vv^^<^><v<v>v^<<^>^>><vv>^>><<^>v<^^v^^^>><>v^>v^^v^>>>>v>>^^<<<>^<^>^<^v^^^>v<<^<v><<<<^^v>>^>v<vvv>v<>v>>^^>^vv<^v<^>>v>v>^^>^v>>^<<v^>v>>v^^^>^v<>>^vv<<>>><^v^<^<v^^^<<><vv^>>><<><^><>>v>vv<v^<<><>v><^>^v>vv^>>>v<><v><^>v^><<<<<vvv^^>^v>^>v>vv>v^>v><><>vvvvvvv^<>>>^^<><vvv<vv<>^>v^^v<vv<v^>^><v>><v^vv^<^^^<v>>vvv^^v^^^>^>>v<^<<<<>vv^>v<v>>v><<<^v>^vv<>^<^<>>^>vv^vvv>v<<^<v>^^>^<^v^>>v^^^>vvv>v^>>><^vvvv^^>v^^>^><^<^<>^>>^>v<v<>v<>>v<v^vvv<v<><vv>^<^>^^^^^>v<^>>^vv^^v<v<><^<<^>vv>>v<^v<^>v>v<<^>v<<<^v><>><v><>>>>vvv^<<^<<v><>>>^>v^v><^><^<<>v>^vv
v^vv<^<<>v><vv<^^><<v^<<>^<><<^<v><v<>v^>>><>>^^<vv><>>v<<>v><v<<<v>>^v<<^vvv>>^v^<^^^<^>v<v^v><v^>vv<v<vv^v>^>v<<>vv<<v>>>^v<v<^^<>>^<vv>^<><<>v^<vvv>^><^><^<>>>^^^><v<<><^v>>v<<^<>^>^^<v^^vv>>>v^v<^<^>v<v^>>^<><<^^>><<>v>^^>v>^<>v^v<^<^<<<><<v<v^^<vvv<v>>v><v<>^v>^v<v<^><>vv^>^^^v<^v>>v<><>^v<^^v>>^v^^>v^><<<vv<<>^<v<v<<v^^<<vv<v<^v<>vv>^>>>><<vv<vv<<<vvv<^>vv>>vv<><v<vv><v^v>^<v<v^<>^<^v<v>>>^<^>^vv<v<^><v<^^<>v>>>>>^v<v>>><^^v<><>vv^^v<v^v<^<<v<^^>v<>^>v>>>><v^<>^^<>^><^^v^vv><<<v<>>>^v^>v^^>^vv><><>v>vvvv^v>vv>>v<v><vv^<v^^<<v<vv^^^v>^>^v^^^<vv^>>>vvv^>><vvv<vvv^>><<vv^>v<<vv^^>vv>v<>>v>^^^>vv^^>><v>v>^>^vvv<^>vv>><<>^>v<><^v>^^vv>vv>v^<v>v<<><^<<<>^vv<<<v<>vvv<>v>^^^>>v<^^v<^<^<^vv>>^<^>^<^^<>><^^^vv<^^>v<v^<^><>v>^<v^^vv^^<><^^^^<>^v^<^<<<v><v>>>>>>>^^>^<>^>^>^<<v<>>^<^vv>>>>vvv>^<<<vv^>>v>>>>v>>v><>^v<^<^<v^^<^><^>^^<^>^^<v>>>v>>^<<v^<><>>>v><^vv><v^^>^v<v<>^v<v>^^><^v^^<<^<>^v<^>^>><<><vv^^<v>>><>>^<<><>v<^<<<^>>^v>>^^v<^<v<<v^<<>^>^v^<v><<^^>>v^v<>^v<>^<v<^<^<v<v><<<><<^>^^v>
v>^v^<vv^^<^v>v>^<<<>>vv^^v<^<v^>^><^<^vvvvv^>v<<^<>^vv^v><v>>>v<<>^>v^<<>v^<^<^<<v^<v^><^v>^v^vv<v>vv>v<<<><^^^<<^><v^v>^v>><v><v<<<v<^<>vv^>>^>>v>>v>^v<<vvv><><v^>>^<v^<<^^v>>>v>v>v>^v>>v^>><^<><>^>><<<>^><^v<^^>v><<vvv<>^<>vv^>^v^^<^v><<v<^<vvv^<<v<^>vv>^v<<>v^^>v^>vv><vv>vv<<v^^vv<^<>>v>^^^>>>v^^^vv^><<v^<>vv^><<<<^v^>v^vv<<v^<<>^<>^^<<<^>v>>v>v><<^^><^<><><>^<>v<<^vv^<vvv<vvv>v^^><v>vv<>^^<><v>><v<v>^<<<v>>vv<><v<><>v<^>>>^v>><><v<^<^<>v<^^v<v^>vv^v^<>^vvv<vv<>v>v^v>v<^^v>>^>^>v>>>v>v<v^^<^v^<^v><<<><v^<^>^^vv^^<v>^v^^><>^<<>><^vvv<<vvvv<^^^<>v^>^><<v^v<v^v^<>^><<^<^^<<><<<^>v^>v<<v>^>>^v>v>vv<<>^vvv^v<v^vv>>v>^><<<>v<^<v>^<<<v^v><<^<^<>^^>^<^><^>vv^^^vv<>>v<vv^<^^vv^v^<^vvv><<^^v>><><<v<^^<<^v<>><>^v><<v>^<><>>^<^<><v^^><v<v>>><^^>v^>v><<^v>v>^<v><^<<^<v><<>vv<><^^<><v><<v^<<<>>v>><>^<<^>v>^<>^^><vv>^<^^v<><<^>>v^vv^<v>vv<>>>^<<^vv<<>^v>v<^v>><<>v<^^v<vv<^<>^^><^^v>^v>v<^^^<<><<<>^<><<^v^><<v<<><^<vv>v<>v><>v<vv<vv^<^v>v^>vvv>>>^<>>>v<v><><^>^>v^>v^v>^^vvv>vv>><<v^v^^^v<v^<>>>>^v
^^<^^^^<^>v^>^>^>>v<>>>><>>^^><v<v<<v<>v<^><<^^<<^>v^^^^>vv<^<<^^<vv^v^v<^<^>vv^><vv<><^vv<v^v^^<v>>^v>><<vvv<vv^><>^^vv><<^<<>>^v>^v^><v>>^>>>^^>v<<^>v^^^v<^^><^<^v^^v^v>vv<>^<v^vv^><>^^^<^<>><^>vv><^v<<^vvv><>^v<><>^<vvv<<v><vv<>><>^vv><^>^<>v<^^v<>><v<<v<v><><^<<>vv^^><>>^^><^<^v^<>^^^vv>v^v<><v^<v<>^^^>v^v<v^<><^<>^^v><<><^^<v^>v<^<vvvv<^>v^>^<<<<<v>^<<<>v<^>v^<^<>vv^^v>v><v>^><>>>^^>>v^><<>^v<v^>vv<<<<^<^v<>^<^^^^v<>v^<>^>>><vv>^>vv>^><^v<v<<>v<>><v<>^^>v^><^><vvv<<>^v>^^v<<>^^v^>><^<<v^^^v^<v><v^>vvv<>><v<^<><>^<>^<^><<v^v<<<^v><^^^^>>>^^>>^^^v>>><^>v<^<<<>v<^>^><v^<vv<vv^<><^v<>^vv>>^<><^vv^<><<<>v^vv^<^<^>>^v<>v>v<>>^v^<<^<v^v^><^vv>v^vv^<>^v>><^v^vv><^vv>vvv>>^vv>v>><v><v<>>v^v^>^><^^<<<v<^^<^v>><<^vvvv^^><<<v>^^v^^<<v>^><v^^^<v<^>>^<v^><v>v<>^><v>^v>>^>><v<^^<v^><v><<^vvv<^>^v<>v^>><>^>v>^^>><<<v>><^><>^v^^vv>v<>><>v<>v<^v>^^vv^>^v^^<^^<^<v^vvv>^<><>^vv<^vv><<>>><><v<<^^^<<^<^>v^>>vv<^vv><><v^v><><^vvv^<v<^<<>>^<v^><^^v^^><^^<^<<<>>><v^>vv<^^^^^<^><^><^^<v>v^>v>^^v<<v<vvv<v<v
^>>>^<^>^vv<>vv>^>vv^vv^<>^<^^^><vv<<^>><^^v^v<<<v<>>v<v<>vvvv<<^^<<vv^>>^>^v>^<<v^<>v^>^<vv>^v>v^><<vv><^^>^>^<>>v<vvvv^^>^>><><<^<v<v>^v>^vv<^^<v<>^^>>>^<>>^<>vvv><>v<>>^v^^<^<^^vv<^v^>^<<v<<><><<vv^vvv<v^v<>v^^<<<<v<>>v^>vv>v^><>>^<><<>>v<vv>><<<>>^><vvv^v<<<<<>vv>vv>^^v<^>><^>v^v>>^^^<v<>v<<v^<^v<<<v>v<><<>v>v<<v<vvv>vv^^<v><>>v^^<>v^>v^<v><<<<v^<>^<vv^>^^v<^^<>v^<><v<<v>^^v^><v<><^>v><>^>^^v^<v^v^vv>>vv^<<^<>^^^vv^v^^>v>v^>^^<<^v<<vv^<<<v^v^v<>>>v^>v>v<<<v<>v^^v><^>><<^^>v^vv><vv^^^^>^>^><><>>^<^^<vv^>>>^<<^<>>>>v<<><<v<>>vv<v<>>^>^^>>^>^vv<>^<<>vv>^><><^><vv><><^<^<v>^vvv>><>v><v^>>^<^>>vv<<><<<>v><<^<<<<^<<^>^^>^>^>>^<^<v>v<v<>^<<>^>>>^<^>^<v^^<>^>>vv<><vvvv^<<><<>>v<vv<v<vv<<><vv<^<^v^^<^v^<v>^<>><<<v><v>v<<><>>^>>v^^vvv<^<^<<>^<>^><^>vvvv^<><<>^v>v>>>v>>>v^>v>v^^^v^><<^<^vvv>v^<>>^>v<^^<<<^^><^v>^^<<v^<<<^<^>><<v<>^^<v^^><<^v>^v<^^v^><>^<^v><<^^^><<>>v<^><<>><^>v^<^^>^<<^>><>^<v^>>v><v>^^>>v>^^^v<^>><^><>>>v<^^>^^<^v^>^v>^<<^>^<v<^<^<>v^<>^v>v<>vv>^>>^<<vv>^><<<>><v^^v><<>>>vv
vvvv^^v<>>v<vv^>v<<<<^^^>^^>^^>>>>^<v<^^>>><<v>^<>^>><<>v^>>>vv>^^>^<v^^>>^>^^<>>><^v>v>v^<^^v^>>^<^^^<v<<>>>v^v<v<^<v^v<^>^<<<>^v<<v^<^vvv<<<<<v>vv>^^^^^vv><<^^<^>^^<^^^v^><<<^><vvv<>>v^><^^v>^<>v><>>>><^>^v>^>v>^><>>^><<^><^v><<<>^vvv>^^>>^vvv>>^<>>^^>>>>^>v<^<<v^<>^^vv><v>vv>v>><<<<^v<^^>^vv<v^v^><vvv^^^<<><>><<v<v<>^>v<<<^<<<<^vv<^><v^<v>><><v>v<v>><><>>^>^v<<<<vv<^<<<<>v>vv<^v<>>^>v>>vv<v>^>v>^<><^^^^^v^>^<v^<<^><>>^vv<>vv^>v^>v>><<^>^<>>v>v<^vv^>^v<>>>vv^^<<vv<^^><v^>^<<>^<v>v><v><^><<v^^>v^>>v>>>vv^^^v<^<>^^^vv^vv<>^><^^^^^<>><><>vvv^>>v>^<<vv>v^^<>>>v<<<v^v<><<<v^>>>v^<>><>^<vvv>^>v>^v>^^<v>v<<>><^<^vv<><vv>^^vv^^<<v^>v>v>^vv^^><^^<<^vv<<v<^<v<vv><>v>v><<>^<^^<>vv<<<^v>vv^><^vvv<<>^v^><^^>^<><v^v^<>^>vv><v<vv^^vv<^v<<^>>vv^<^^vv><^^^vv^>v>v><>>v><v<<>^v^^<>v>^<<^<>v<><^v<>v^>>^^vv<<<<^^<v^^<v^<<<<<>^v^v<>^<v>v^>v^^<vv><>>vv>^v<^<<^>>>vvv>^>^>^v^<>^^^vv<vv<<>^^>^^><>^v^<^^>^v>>><vv^>^v<>vv<<^>^v<vv<vv>v<v><>^vvvv>^><<^^vv><<v<v<>>>v<<^<<v<><^<>^><><v<><^vv>>>>><<<^>^>v^<>^v<><^>
v^<^<vvv^^^<v><v><<v^^<>v>^><v><<^>v>v>^^>^^><^>v>v<^<<>>v^<vvv<>><<>>^v^>>^><^v^>vv>^><^>^^<<v^^vvv<v^<v>><^>v^^><^>v^<><^>^^^<v>^^<v^^^><<<>^^^v<>^v<^^><v^^vv<vv><><>^>v^>^^v<^^vv<^<v><><v^><<^^<>>><>v<v>>>v^>^>^v^<^<v<^v>v>v<^^vvv><>^^>>>v^<v^<>^<<v^v^<>>>>>v<vv<>^v<>^>^<v>>v<^<>vv^<<<v<^^vv^>><^^>v^<v>v>>v<<<<<<v^vv^>v<^>>^^<^<^v<<<^>>^>^<v^^v>^^^>v^>v><v^>>^v>><<^>v<<^^^>^<^v<^vv<v>^v<^>>>^^vvv^<>>v<vv^vv>v<><v>>><^>><>><<^vv<>>^<v>v<>v<<<>^v>>^><>^<>>v^^<><>^><^<<vvv<<><>v>^v<<^^<v^>v^>^v<v>vvvv<<<<<^<v^>^<^^v<v>vvv^v^^^<v<>vv^v>^v>^^<<<<v<<<>^>><>vv^<>^<<>>v^>>v>^>vv<<v<>>^>v<<<<v>^^^>^>^^>v^>><v<<v><><<^<><>vv>^<>><^v>^>^>><v>^v>><v<^^<^<v>vvv^^v<<>^<^^^^>^>^^vv^v><><>v^^<>v<v<^vvv^v>vvv<v<^v^vv><^^<>>v^>>^<<<^^>v^<^<>^v^>>^^^><>v^^>^v<^<v<^v><>>>v^<><^v>><v<^^^<>>v<v^<<><^<<><vv><^<vv<><v^^v^v>>v<<^^vv<v^v<^<><<v^vv<<^<<v>><<><^>^^^<>v><<^>>>vvvvv<><<v^^^<^<>^><^^><^<><v>>>>v><v<>^v>^v^^>><v>>^v<>v<v<v^>^>v>>vvv<>>vv>v<<v^<^vv^v>^v>vv^^^>^v<vv^^^v>^<^^^^>^^^><^>>>vv<>>^^v^>^v>
<^>><><<^^>^>v>v^^^><^^>>v><^vv>^<^v^<^<<><><^><v^v^<>^>v>vv>vv>v>>vvvv>^vv<<<^<v^^^^<<>><>v<v>vvv^>>v<<v<<<<>><v<^^<<<^v<vv>>>^v><^v<>><^>>>^v^<^v^^v><^<vvv>v<>^^<^v<>^>^<<^<>^^^^<v<vv^>^^v^vv>^<<><^>^v>^<^>^<<<<^>v^v<<<<v><<v^v<>v<<>v>v^<><v<<>^>^<<v^v^<v^^>><><<^><><>^^vv>^v^v>v^<^^^vv<^>^<>vv>^v^>vv<^<><<vv><^<v^^<<>>>^^<<^>^>><vvv><>v>>v<>^v<>>vv^^^<v^v>^<^>v>^<><vv^>^>>><^<^v>v^>^v>>^^<<v<>^><^^^^^^^<v<v<v^^>vv^>>^v>><>>>v<vv^>^<>^^^>^>v^<^vv^v<>v^^>vv<^<<<<v<<<<vv^^>v>v>v^<<v^<v<^v<^><<<v<>^>^>v>v<v^><^^v<>v^^<v>v><<>v>>><^v<vvv>v><v<^><v^<^v><<><v<>>v>^>^><<<v>>^v><v>v<v^<^>^>>^v>>^<<>v><^v<v>v^v^v^>v>><<vvv^>>><^v>><>>vvvv>^<^<^v^^^^^v^v^<<<^<^^vvv<><^>v<<vvv<^v<><>^>v<^^v>><<<^^v^<^vv^<<^<^v>^^vv^<<<^><<v^<^^>v^<v^><vv^^vv^>>^^v>^v>vv>><>v<^<v<vvv<>^^vvv>^>>^>>v<><<<^<<^<>v<><<^>>>>v<>>v>><<>^^v>>v>^<^>vv^v>^>v>^>v<<<>><>vv<<>vv<v>v<^>^><<^v^^<<<>>^<^vv>vvv^v^^<<v<^v<v<vv<<>>>><^^>>v>vv<vv^v>>v<<vv>v^>v^^>>>vvv<v<>>v>^^v^^<<^>>><v^>^>v<>v<>vv>^^v^>^^>v^><v>v^vv<>^v>>vvvvvv^<>
vvvv<vv<>>>>><>^>^<^>>>^^>^>^v^vv<>^v<vvv<<v<<<^^<>vvv<^^<^>>^<^>vv>v<^^<vv^<>v><^<^>^><v^>>^v<^><<<<^vv^^v^>^<v^v<<>v^v>v><v<v>^<^>^^^v<v><>^v<^<v<^<v><>^>^>>><<>v<<^>^v<v^^v>>vvvv>v>^>vv<>>^>^<^<v<v^>v<^><<<>^>v^<>v<^^v<<<^v>>^^<^v>^^><>vv^><<v^><>>^^><v^^<<v^><<^>v^^^>^^>^^>>^v^<vv^<v>v<<^^>>>^v^^><^v^v^>>>^v>^>v<<v>^^>>^<>^><^><<v<<v^<>^^><<>vv<><<>vv^vvvvv^^>^<vv<^<<^^vv<^>^<^<<<^>>>><><<^<>v>v><^>>^<><^vv^v>^<><^^^v>><>^>^^v^^^><<><<^<vv>v^v^<v>^^^v>^<^><vvvv^^>^vv<>vv>><>>v><>^vv><>^v^<vv><<<^v>>>^^><^v<<<v^><^<<^>^v><>>^^^<>v>v<>>>^>>v><<vvv<^v<v^<^^><^^v^>>^>><><^>^v^>>>>^>vv<<<>vv^>vv^>vvv>>v>^><>vv>^^><^<^vv><v>vvv<^v^<<<<^<^^v><<<<><<vv^^^>^v^>^^<v>v^>v<>v<^^<><v^>v>v<<<>>^vvv>>><<^>vv>>^^<><^^>^v><v^>^^<^<^^<>v>vv<^>^^v>v<>>>>><>^v>>^<v>v>v>^^<^v^^<<v>v>vv<><<^vv<^<v<<^^v^>>^<>^v^>^>>^^><>>^><v^vv^^^v><>v><^>^<<^^^<>^v^^v^<v^v>>v^vvv<<v><>vv<^<<v<v<<>>^^vv<>><><>^<^v^vv>><vvv>vv<<^<v^>vvv<^<<>><>^<><^<^>^v<<<>^^v><^v<><v<v>v^v<>^<>>>^vv<^<v<>v^v^><vv^><>v>^><^>^>>>>v<>v<>^
>^<>^v>><<vvv^>><<^^v>>v<<vv^>v>^<>>>v^<^v<>v<<v<vv^>>v>^<^><^^^<<^<>^v>><<<v^v<^>v><^>^^v<^v<><<^<^<^^<v<^<v>><v<<v^>^v<<>v^>v><><<<<v>^^v<<^v<^v<>^><>><><<>^><><>v<<>><>v^>vvv^vvv<><<>>^^^>><<>>v<>>>>v^v<^^<>>v<v>>>^<^^<>^>v>vv><^^<^>>^v>v>>v^<^<v>>^<><<>vv^^v>v<vv^^v<^><v<^>vvv>^>^<<>>^>^v<>^v^>><><^<^<^^>><vv^v^v<v>>>v>^^><>^<<^^v<^^>v^v^^>^<>v><<><<vv<><>vv>^>^vvv^<>>>^>v>^<<^>^<>>^^<<<><v^^^^^<<v^<vv<v<<^>v<>>>v>>v>>vv^><v>><^^<>v^^<^>>v^<<^><^>>>v>v>^v>>v^^v><<<^><^v<vv<>>vv>>v>>^<<<>^<^><vvvv^v^<<>v<v<>vv^<v<<>>>v>v>v>v>^<<vv<>v^^^v^^<^>>^<>^^v<>v>^<^v><<^<v>v<^^v<v>v<v><><^>^v><^<><^^^><<v<^v<^<v>^vv<v<<^<v>^>v>v><^><^<<v<v<>vv^>v^>v<>^<vv<^>><^<>>^v^><^v>><<<v<>>^^<v>>v><<v^vvv^v>v^^v>>>vv<v<>v<^^^<<>><v>v^<>vvv<><<<v><<vvvv>^^><^v><v<>>v^><><<^>><^>^v<^^v^v^^<>>v>^>^<^^>^^v^^<v^v>^<<^><^v>>^^<v^<>^vv>>vv><^^<^>v^^^><^>>v^>^^<v<vvv>v^>v>v>><<v>^>^^>^<^>vv>>v^^>>^>^v<v^^v^v^vv<><v<>v>>v<><v>^<^^^vvvv<^^<>>^v>v^v>^<^v>vv><<v>^^^v<^^<^^>^>^v<vvv<><<v^>v^<^><^<<<<v^^^^<><^<v<^^^>
>vv<vv^<>v^<>vv>><<^v><v<>>v^^>vv^vv^^^vv><<><<<v^^v^<<^v^v^<v>><^<vv<v<^^v<vvv<v<<><<^<><>v<<>v><v^<>v<vv^^>^<^v^><>>>v^<>v<>^<><<>v>v>>>>vvv^>>>>>>^^v>v^<><v>^v>v<v>v<v>v^v>v>vv>vv^^<^vv^^^v><<<>^^<^^^><v><^^^^v<vvvvvvv<<><<>^v>>^<><v<^<>^<<<^>^^<><v^>^<v<^<^><v<^^v^<<<<^><><v^>v^>><v>>>>v><<^^<<<><<<>v>>>^^^v<<<v<>^v<^^^>^vv<>>><v^>^>>^<vv<>^>^^v><vvv^<<><v^<<v>v^>^>v>><><^vvv^<v<^><>v>>v<><^<>><^<^><v<<^^v<v^>^<>v><<^>>v^v<vv>v^><>v^>>><v<^^^<<^>v^>vv<^v<^<>>v^<<^v<<>>>^>>v^^^v<<<v<><v>>>>^v^<<<<^^>>v><^<^^>vv^>v^^>>><>>>v<>^v<>>>^<<><^^^>v><>v<>^<<>>v>v<v^<v<<v<^vv^<>^^<>v>v^^v^<^v>>^>>v><<^<<^vvv^^>>>><v>>><>v^<<<v>v^>>^<v>^v<v<^<<v>^^^v<v><v>>^^^<vv^<v<v>^^>v^<v>v^^>><>>><vv<v>v^v<^v<>v^>v<v>^>>>><<>^^>v>>^>><v<>>><<<<>v>^v><^^<><<<v>^<<^<^>><>^v^>^^^v^>^v^v^^^<<<<^^^^^v<<^>v>^<>^<^>^<vv^<>><<v<^v<>v<><<>v>><^<v<<^>^<>^<<^<^^<v>vv^v^<<<v^v^^v<>>>><v<^^<<^<<^<^^<v<^<^>vv^<>v^<>vv<^<<<<v<>>v^v>v<<v<v><v^<v>>^<^^^>^vv><<^v^^>^v^^^vvv><>v<^^>v>v<v<><v><v<^<^>^>vv>v<^v>vv>^<>^vv>>v<v
^v>><^<>^>v^^v>>>v<>v<<vv>v<<^v<><v<><^>v^^^<^v<^<^>>v^^<<<>v^^vv<vv<<v>>>v<^vv^v^v>^^<>><>>v<v<v<vv^><^v<>><<vv><^<>>v<<><v><>v^><<<<><^<>>v^^^>vv>^<^<v^vvvv<<<<^v<<<><vv^>^^><>v^vv<<<v^^v^v>^<v<><>v^<<<v>^v<<^><^v<>>>><^v>><v>^v<^<<v>v^^^<<v^>>^>><<><^^>^^vvv<<>>v<v>><>^<v<v<<>^vv><v><^<>^v^<^v<>^>^^^<><^v^<><<v^v<<>^^<v>v<<^>v^<^>>><v^^<<<>^^v><>^><><><<><>v^>^<v>^<<v<>>^<v<<v>v<<v>v^<>^<^<<><v<vv>>v><^^^^v>><<v<^vv<^><>^^^^^><><v<^vv<^v>v^v>^>><^^><^>^>>^^^><<>>^v>^v^>>v>v>>^><<<^<<v^<<vv>^<>>v<<^v^>vvvvv^<^>vv^vv^^v^v^<v>><v<^v<<>^>vv<<<><v>vv>^^>^^vv><^>v<<v<<v<v^<v<<^<<v^<><<^vv<><<>^>v^vvvv^<<<<v<<>><^>><<^>v><^>^v<<<^<^>v<^vvv^>^<>^>>^><<<<>^<v^>^^vv^^<<>>>v>><^>>^v^v^>v^<^<<v^vv<<^vv<v>>^>v<<>^>>^<<<><vv^vv>v^^><>^^<v<v>vv<v^<<v^>^<^^v>v<<>v><><v<v^^<^^v^^<<<^^^v><>^<<>^>v^v><^<^^vv^^><^v>>^<^<<^><^<<<>^^v^<><^<^^>^vvv^^v<<^<v>^<<<><^v^><vvvvv>^<^>^<^<v<^<v><vv>v^<>vv^><v<vv^^>^>v<vv<<>^<>v>><>>^>><<<^<vv<>^^^<<^<^<<>^v^<<<><^<>^vvvvv<<^^<<><v<>vvv<<<vvv^>v<v^vv^v^<><<^vvvv<>
v<>><^v<v<>>vvv<<^v>><<^^>^<^^>>^<^<>>v>^<<>vvv<>v^<>v^^<<^v>v^><v^^v^v<>v<><^^^<>><^><^<<v^>v<>v<v^^v<>><>^>^v<v>^<^v<v^^^<^>vv^<v>>>^v>>v>^v^><v>>v<><^vv<v>v><v<v><^v<^^^<<<<vv^><^v><^<<<<>><<>><>^vv<>v^>^<^>^<><<^>^<<<<^^v>>^<>v><<<<v><<<><^<v^vv<v<<^<>>v<>vv^^<><^vv<<<^><>^<v<><>^^<<<<v^v<<^>v^<<^<vv^^>^vv<<><<v^^>v<<v^^>>^^<<v^<<^<<<^^vv<^>vv^^><><v><<<^v<^^^<<^^^^^vv>^><>><^>^<<v<^>v^<>^>^><^<^v>^<^<>v>^^^vv^v<vv<v><v^vv>^><>vv^^<>>vv^^v<<<<vv<v^>>>><v>v<<>>>v<v>>>vv>v>^^>><^^^^v<<v>^<<<>v><vv^>^>v^^^vv^<<^v<vv<^<v<^<^><<^><<^>>^<<v^^vvv>><v^v<<^<<<<<vv^v^<vv>v<^^<>>^>^>>><>^<^<^vv^>><^^<><v^<v<^>>>>v>^<v>><v^>^^v>><vvv<<v^<^^^<v>v^<^<>^v>v><<<v<<<vv>>v<v<v>v<v^^>><<<^>v<<<^^vv><v^^>v^v^^<>><<v><<<<^v<>^<<v<>^>v>vv<><<v<<<^^v^vv^vv^v^^>^^vvvv>>>v>>>>v^<vv^<^v^v>>>v<<vv>^^>^<vvv<>v<^^<vvv<vv^<^^^>^vvv^>v<^<^v<^><^<<^<><^v<><<>^<v>^^^<^^^>><v<>^<<>^^><v><^>^v>v><>>^^<><<vv^^>>v^>><v^><^<^^vv<v>^>><^<^<v<>><^<v>v<<>>^^^v>>>><v>v>vv^^<v><<v^><v>^^>^>v<>^^<vv><><v<^vv<>^<v^>v>>^^^<^^v`.split('\n').map(el => el.split('')).flat();

  //   movesInput = `<vv>^<v^>v>^vv^v>v<>v^v<v<^vv<<<^><<><>>v<vvv<>^v^>^<<<><<v<<<v^vv^v>^
  // vvv<<^>^v^^><<>>><>^<<><^vv^^<>vvv<>><^^v>^>vv<>v<<<<v<^v>^<^^>>>^<v<v
  // ><>vv>v^v^<>><>>>><^^>vv>v<^^^>>v^v^<^^>v^^>v^<^v>v<>>v^v^<v>v^^<^^vv<
  // <<v<^>>^^^^>>>v^<>vvv^><v<<<>^^^vv^<vvv>^>v<^^^^v<>^>vvvv><>>v^<<^^^^^
  // ^><^><>>><>^^<<^^v>>><^<v>^<vv>>v>>>^v><>^v><<<<v>>v<v<v>vvv>^<><<>^><
  // ^>><>^v<><^vvv<^^<><v<<<<<><^v<<<><<<^^<v<^^^><^>>^<v^><<<^>>^v<v^v<v^
  // >^>>^v>vv>^<<^v<>><<><<v<<v><>v<^vv<<<>^^v^>^^>>><<^v>>v^v><^^>>^<>vv^
  // <><^^>^^^<><vvvvv^v<v<<>^v<v>v<<^><<><<><<<^^<<<^<<>><<><^^^>^^<>^>v<>
  // ^^>vv<^v^v<vv>^<><v<^v>^^^>>>^^vvv^>vvv<>>>^<^>>>>>^<<^v>^vvv<>^<><<v>
  // v^^>>><<^^<>>^v^<v^vv<>v^<<>^<^v^v><^<<<><<^<v><v<>vv>>v><v^<vv<>v^<<^`.split('\n').map(el => el.split('')).flat();


  const boxesPart1 = executeMoves(fieldInput, movesInput);
  const gpsPart1 = calculateGps(boxesPart1);
  console.log('Result Part1:', gpsPart1);

  // const resultPart2 = moveRobot(fieldInput, movesInput);
  // console.log('Result Part2:', resultPart2);
}

function executeMoves(input, moves) {
  const field = JSON.parse(JSON.stringify(input));
  let robotPosition = findRobotPosition(field);

  for (let move of moves) {
    robotPosition = moveRobotAndBoxes(field, robotPosition, move);
  }

  const boxes = findBoxes(field);

  return boxes;
}

function moveRobotAndBoxes(field, robotPosition, move) {
  // console.log('move:', move);
  // console.dir(field);
  const newPosition = getNewPosition(robotPosition, move);

  if (field[newPosition[0]][newPosition[1]] === '.') {
    field[robotPosition[0]][robotPosition[1]] = '.';
    field[newPosition[0]][newPosition[1]] = '@';

    return newPosition;
  } else if (field[newPosition[0]][newPosition[1]] === '#') {
    return robotPosition;
  } else {

    let newBoxPosition = getNewPosition(newPosition, move);
    while (true) {

      if (field[newBoxPosition[0]][newBoxPosition[1]] === '#') {
        return robotPosition;
      } else if (field[newBoxPosition[0]][newBoxPosition[1]] === '.') {
        field[robotPosition[0]][robotPosition[1]] = '.';
        field[newPosition[0]][newPosition[1]] = '@';
        field[newBoxPosition[0]][newBoxPosition[1]] = 'O';

        return newPosition;
      } else {
        newBoxPosition = getNewPosition(newBoxPosition, move);
      }
    }
  }

}

function getNewPosition(position, move) {
  const [i, j] = position;
  switch (move) {
    case '^':
      return [i - 1, j];
    case 'v':
      return [i + 1, j];
    case '<':
      return [i, j - 1];
    case '>':
      return [i, j + 1];
  }
}

function findBoxes(field) {
  const boxes = [];
  for (let i = 0; i < field.length; i++) {
    for (let j = 0; j < field[i].length; j++) {
      if (field[i][j] === 'O') {
        boxes.push([i, j]);
      }
    }
  }
  return boxes;
}

function findRobotPosition(field) {
  for (let i = 0; i < field.length; i++) {
    for (let j = 0; j < field[i].length; j++) {
      if (field[i][j] === '@') {
        return [i, j];
      }
    }
  }
}

function calculateGps(boxes) {
  return boxes.reduce((acc, box) => acc + (100 * box[0] + box[1]), 0);
}