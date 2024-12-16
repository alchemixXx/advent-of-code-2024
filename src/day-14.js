/*
--- Day 14: Restroom Redoubt ---
One of The Historians needs to use the bathroom;
fortunately, you know there's a bathroom near an unvisited location on their list,
and so you're all quickly teleported directly to the lobby of Easter Bunny Headquarters.

Unfortunately, EBHQ seems to have "improved" bathroom security again after your last visit.
 The area outside the bathroom is swarming with robots!

To get The Historian safely to the bathroom, you'll need a way to predict where the robots will be in the future.
Fortunately, they all seem to be moving on the tile floor in predictable straight lines.

You make a list (your puzzle input) of all of the robots' current positions (p) and velocities (v), one robot per line. For example:

p=0,4 v=3,-3
p=6,3 v=-1,-3
p=10,3 v=-1,2
p=2,0 v=2,-1
p=0,0 v=1,3
p=3,0 v=-2,-2
p=7,6 v=-1,-3
p=3,0 v=-1,-2
p=9,3 v=2,3
p=7,3 v=-1,2
p=2,4 v=2,-3
p=9,5 v=-3,-3
Each robot's position is given as p=x,y
where x represents the number of tiles the robot is from the left wall and y represents the number of tiles from the top wall (when viewed from above).
So, a position of p=0,0 means the robot is all the way in the top-left corner.

Each robot's velocity is given as v=x,y where x and y are given in tiles per second. Positive x means the robot is moving to the right,
and positive y means the robot is moving down. So, a velocity of v=1,-2 means that each second, the robot moves 1 tile to the right and 2 tiles up.

The robots outside the actual bathroom are in a space which is 101 tiles wide and 103 tiles tall (when viewed from above).
However, in this example, the robots are in a space which is only 11 tiles wide and 7 tiles tall.

The robots are good at navigating over/under each other (due to a combination of springs, extendable legs, and quadcopters),
so they can share the same tile and don't interact with each other. Visually, the number of robots on each tile in this example looks like this:

1.12.......
...........
...........
......11.11
1.1........
.........1.
.......1...
These robots have a unique feature for maximum bathroom security: they can teleport.
When a robot would run into an edge of the space they're in, they instead teleport to the other side, effectively wrapping around the edges.
Here is what robot p=2,4 v=2,-3 does for the first few seconds:

Initial state:
...........
...........
...........
...........
..1........
...........
...........

After 1 second:
...........
....1......
...........
...........
...........
...........
...........

After 2 seconds:
...........
...........
...........
...........
...........
......1....
...........

After 3 seconds:
...........
...........
........1..
...........
...........
...........
...........

After 4 seconds:
...........
...........
...........
...........
...........
...........
..........1

After 5 seconds:
...........
...........
...........
.1.........
...........
...........
...........
The Historian can't wait much longer, so you don't have to simulate the robots for very long. Where will the robots be after 100 seconds?

In the above example, the number of robots on each tile after 100 seconds has elapsed looks like this:

......2..1.
...........
1..........
.11........
.....1.....
...12......
.1....1....
To determine the safest area, count the number of robots in each quadrant after 100 seconds. Robots that are exactly in the middle (horizontally or vertically) don't count as being in any quadrant, so the only relevant robots are:

..... 2..1.
..... .....
1.... .....

..... .....
...12 .....
.1... 1....
In this example, the quadrants contain 1, 3, 4, and 1 robot. Multiplying these together gives a total safety factor of 12.

Predict the motion of the robots in your list within a space which is 101 tiles wide and 103 tiles tall. What will the safety factor be after exactly 100 seconds have elapsed?


--- Part Two ---
During the bathroom break, someone notices that these robots seem awfully similar to ones built and used at the North Pole.
If they're the same type of robots, they should have a hard-coded Easter egg:
very rarely, most of the robots should arrange themselves into a picture of a Christmas tree.

What is the fewest number of seconds that must elapse for the robots to display the Easter egg?
*/

export function executeDay14() {
  console.log('Day 14: Restroom Redoubt');
  let input = `p=9,89 v=-73,-15
p=0,11 v=-26,-93
p=42,38 v=30,1
p=53,4 v=49,38
p=42,83 v=63,-60
p=42,62 v=70,-3
p=67,18 v=21,-58
p=10,89 v=19,94
p=59,101 v=-77,67
p=0,19 v=54,-73
p=76,75 v=-10,96
p=7,29 v=-95,-25
p=69,65 v=-70,-5
p=40,81 v=41,-67
p=40,81 v=-20,-37
p=79,28 v=-48,-65
p=50,31 v=7,-45
p=68,93 v=-4,91
p=96,30 v=12,31
p=73,40 v=79,-62
p=6,57 v=61,-1
p=21,85 v=40,-11
p=52,15 v=25,8
p=42,53 v=-76,-51
p=98,30 v=6,-45
p=60,95 v=59,16
p=52,48 v=-84,-76
p=64,64 v=66,63
p=79,13 v=55,61
p=33,85 v=-49,-96
p=12,34 v=-96,33
p=80,62 v=-8,-58
p=29,0 v=-32,79
p=80,39 v=60,57
p=83,41 v=28,20
p=49,79 v=63,23
p=75,46 v=-1,-48
p=61,35 v=-55,66
p=60,84 v=-7,-8
p=24,81 v=-27,-29
p=22,47 v=-34,-80
p=21,47 v=32,-49
p=44,95 v=77,64
p=59,84 v=21,99
p=32,22 v=-20,83
p=32,78 v=18,72
p=81,70 v=27,46
p=23,91 v=-44,-8
p=33,83 v=81,-32
p=72,44 v=-62,63
p=6,2 v=66,-3
p=95,53 v=30,50
p=15,87 v=-51,-87
p=79,88 v=20,-34
p=11,86 v=-89,15
p=10,53 v=8,79
p=83,81 v=-99,-85
p=60,75 v=-95,-5
p=32,66 v=-41,-82
p=7,34 v=-48,26
p=62,79 v=-84,-82
p=32,33 v=72,87
p=54,96 v=-94,-15
p=43,98 v=-52,-62
p=34,64 v=-65,-62
p=61,51 v=55,-73
p=26,64 v=-20,-2
p=85,16 v=92,-17
p=55,6 v=-98,-36
p=35,18 v=53,-96
p=84,31 v=-81,89
p=5,84 v=-89,-4
p=85,42 v=-94,-47
p=78,16 v=38,-90
p=38,59 v=-76,52
p=5,37 v=-61,-97
p=96,15 v=89,-17
p=71,65 v=17,99
p=89,58 v=-29,54
p=19,87 v=50,16
p=10,20 v=-68,-70
p=16,57 v=-65,25
p=35,9 v=-37,-46
p=82,10 v=86,36
p=45,41 v=-69,-86
p=5,21 v=-3,-87
p=35,11 v=88,32
p=39,94 v=-61,92
p=81,88 v=24,19
p=33,10 v=-48,15
p=14,42 v=71,-77
p=33,99 v=67,-85
p=67,77 v=52,-7
p=9,61 v=-61,48
p=57,68 v=52,74
p=89,58 v=-29,-77
p=54,5 v=-75,78
p=25,94 v=74,94
p=30,65 v=-86,-54
p=47,45 v=46,16
p=98,19 v=-35,-37
p=97,71 v=-92,46
p=64,40 v=57,-21
p=100,32 v=-51,-73
p=80,91 v=87,-42
p=86,82 v=90,-9
p=56,11 v=94,87
p=31,66 v=74,-54
p=52,70 v=-84,-1
p=87,85 v=-18,-85
p=6,102 v=-40,14
p=15,2 v=-37,60
p=39,90 v=-97,67
p=26,74 v=-34,97
p=33,79 v=74,-84
p=71,27 v=83,58
p=83,31 v=-32,33
p=98,15 v=9,88
p=27,44 v=36,38
p=86,96 v=90,-15
p=80,67 v=87,-27
p=73,99 v=48,-11
p=12,82 v=95,-87
p=54,79 v=-73,21
p=100,55 v=-33,29
p=18,4 v=12,-12
p=72,33 v=79,53
p=42,81 v=-16,-99
p=26,91 v=29,20
p=75,26 v=55,58
p=17,86 v=78,45
p=27,54 v=-41,78
p=25,87 v=50,70
p=35,73 v=-66,97
p=100,40 v=-79,-55
p=38,82 v=-76,-32
p=16,69 v=78,20
p=85,34 v=13,83
p=22,60 v=6,34
p=38,11 v=32,63
p=42,93 v=4,-12
p=9,71 v=5,-55
p=100,3 v=-83,-83
p=68,102 v=48,-55
p=19,75 v=46,-7
p=23,49 v=-79,57
p=51,90 v=63,-59
p=32,67 v=-33,3
p=40,86 v=91,-51
p=32,98 v=-27,-11
p=48,60 v=27,-12
p=34,80 v=67,72
p=87,48 v=58,-78
p=73,76 v=-43,-98
p=18,69 v=-97,-41
p=5,30 v=40,3
p=81,82 v=-88,-35
p=75,82 v=-26,37
p=92,40 v=-31,-72
p=6,28 v=-75,-71
p=14,54 v=-75,-8
p=65,72 v=71,-90
p=51,27 v=-80,34
p=21,93 v=78,43
p=19,20 v=54,8
p=78,53 v=-56,48
p=20,49 v=48,93
p=12,6 v=-75,-44
p=34,30 v=81,53
p=54,22 v=63,-42
p=84,35 v=8,68
p=37,32 v=53,-96
p=97,14 v=79,49
p=78,51 v=79,30
p=1,90 v=-68,-8
p=54,19 v=56,87
p=26,57 v=88,78
p=56,75 v=-7,-6
p=79,77 v=-71,-81
p=82,81 v=27,-37
p=68,30 v=-21,-42
p=42,8 v=-38,13
p=1,34 v=-10,77
p=21,70 v=-52,67
p=77,37 v=-8,-46
p=57,65 v=73,-81
p=33,77 v=-33,95
p=33,28 v=-34,-19
p=74,21 v=-53,-96
p=56,102 v=-66,-68
p=12,52 v=96,-4
p=96,92 v=2,-9
p=27,31 v=1,33
p=81,56 v=-77,-27
p=3,27 v=76,-3
p=99,97 v=44,68
p=73,7 v=80,66
p=25,65 v=-97,23
p=33,85 v=51,28
p=8,99 v=-75,15
p=16,74 v=40,42
p=30,80 v=67,-3
p=88,38 v=-25,59
p=21,20 v=-58,8
p=45,33 v=-31,-17
p=34,37 v=25,-23
p=37,99 v=-76,38
p=77,65 v=13,-4
p=98,16 v=-77,45
p=24,61 v=11,-52
p=86,101 v=-1,-39
p=50,43 v=70,29
p=41,10 v=84,-92
p=31,61 v=88,-32
p=42,50 v=42,2
p=31,43 v=24,-57
p=90,61 v=42,-88
p=64,83 v=-21,70
p=42,57 v=51,43
p=12,1 v=78,86
p=62,56 v=59,76
p=46,79 v=-91,-66
p=97,19 v=2,86
p=88,25 v=86,34
p=83,89 v=-94,60
p=71,2 v=36,-60
p=99,19 v=-49,96
p=29,92 v=67,97
p=72,99 v=-75,-76
p=98,22 v=90,-83
p=52,80 v=-28,-83
p=43,11 v=-21,-43
p=80,52 v=-46,27
p=6,96 v=68,-63
p=67,50 v=-69,-69
p=53,20 v=-33,-8
p=21,12 v=40,-69
p=43,21 v=87,81
p=22,96 v=-55,-15
p=44,27 v=91,-37
p=34,23 v=74,32
p=49,35 v=74,-20
p=9,42 v=3,89
p=36,26 v=-10,84
p=52,37 v=-45,81
p=48,16 v=63,-43
p=23,25 v=-20,86
p=27,85 v=-97,-30
p=37,40 v=-58,23
p=33,44 v=-65,6
p=35,16 v=3,-12
p=57,77 v=45,72
p=39,46 v=32,-52
p=68,33 v=-14,-17
p=42,39 v=36,-6
p=56,100 v=98,-67
p=10,11 v=-9,36
p=20,78 v=-50,-61
p=18,88 v=61,71
p=64,35 v=7,95
p=90,69 v=-50,-53
p=20,88 v=50,-17
p=84,58 v=-53,83
p=75,82 v=55,-79
p=61,27 v=-59,63
p=26,56 v=-27,-78
p=98,13 v=-68,-20
p=7,101 v=26,15
p=26,5 v=-93,-63
p=32,30 v=-79,61
p=83,56 v=41,-51
p=71,62 v=27,25
p=5,61 v=51,13
p=95,4 v=86,-77
p=65,61 v=-26,-92
p=32,54 v=-41,27
p=72,102 v=-86,30
p=87,75 v=-81,-57
p=31,32 v=-55,81
p=99,51 v=-1,-50
p=5,23 v=4,77
p=7,52 v=96,-11
p=5,30 v=84,-36
p=56,0 v=35,64
p=53,78 v=-14,-58
p=73,56 v=72,85
p=24,38 v=40,89
p=88,2 v=13,68
p=30,68 v=-83,49
p=13,95 v=-16,90
p=48,27 v=34,89
p=77,80 v=55,-9
p=69,28 v=-39,85
p=19,52 v=-51,-80
p=10,28 v=-18,-88
p=85,32 v=80,32
p=55,86 v=11,10
p=64,34 v=52,-22
p=88,72 v=68,-4
p=87,22 v=58,-68
p=58,67 v=26,11
p=85,45 v=76,-28
p=39,64 v=-3,-29
p=22,97 v=-9,-41
p=5,60 v=40,-55
p=61,1 v=-14,-37
p=10,14 v=-2,-43
p=50,0 v=-87,40
p=97,8 v=-47,89
p=61,94 v=-70,-61
p=98,66 v=-47,23
p=81,66 v=-85,-52
p=76,47 v=-39,52
p=2,58 v=-67,-45
p=8,22 v=40,-46
p=87,65 v=-66,-14
p=4,6 v=34,-92
p=98,26 v=-19,84
p=45,4 v=77,61
p=86,29 v=38,45
p=27,15 v=57,11
p=20,6 v=-76,20
p=95,21 v=37,-46
p=76,90 v=51,-86
p=13,15 v=88,-39
p=48,101 v=77,-89
p=26,59 v=-86,-78
p=76,3 v=-53,-19
p=53,66 v=38,52
p=27,31 v=36,33
p=8,48 v=-79,-2
p=2,20 v=-26,60
p=77,32 v=-67,84
p=25,85 v=8,69
p=30,3 v=74,92
p=18,5 v=-86,-66
p=78,57 v=-56,-75
p=12,28 v=-71,52
p=48,60 v=14,-79
p=81,71 v=-81,96
p=64,90 v=-21,-60
p=83,89 v=-39,-39
p=15,56 v=71,-26
p=76,39 v=65,25
p=70,41 v=15,-28
p=72,40 v=74,-85
p=30,16 v=-48,61
p=30,16 v=-62,-94
p=97,18 v=-5,10
p=31,25 v=71,-16
p=98,46 v=-95,55
p=34,79 v=46,72
p=21,29 v=45,78
p=75,15 v=13,31
p=2,94 v=68,-10
p=71,44 v=-63,-36
p=82,66 v=-95,21
p=38,75 v=47,9
p=39,64 v=49,68
p=31,92 v=71,-62
p=3,15 v=61,-93
p=12,98 v=95,55
p=7,48 v=37,82
p=42,80 v=81,-51
p=10,17 v=12,10
p=72,83 v=76,45
p=73,70 v=80,-7
p=13,49 v=-45,-34
p=31,67 v=39,-29
p=41,69 v=-95,45
p=43,98 v=38,-96
p=14,11 v=-12,-68
p=1,18 v=9,-39
p=30,53 v=1,-25
p=79,17 v=-41,-88
p=48,5 v=7,-18
p=72,87 v=31,96
p=56,34 v=-40,2
p=21,11 v=8,60
p=33,99 v=77,10
p=7,20 v=-72,-42
p=14,43 v=14,-5
p=4,46 v=50,-1
p=41,66 v=39,75
p=93,100 v=37,-14
p=5,57 v=-32,56
p=36,42 v=-75,-99
p=12,28 v=-6,-49
p=68,93 v=-56,16
p=92,29 v=-23,-37
p=82,73 v=17,-34
p=85,4 v=78,5
p=4,60 v=-43,51
p=6,38 v=68,29
p=94,57 v=-55,-28
p=22,95 v=-93,13
p=66,14 v=-81,-65
p=49,74 v=21,-83
p=36,77 v=12,64
p=2,84 v=-37,91
p=49,36 v=-59,-49
p=38,79 v=18,45
p=77,91 v=44,66
p=94,11 v=-57,10
p=47,37 v=84,-47
p=15,56 v=-16,98
p=13,68 v=46,-74
p=4,4 v=-97,-68
p=27,43 v=-86,-58
p=59,9 v=66,27
p=18,51 v=-23,79
p=20,96 v=39,-11
p=23,14 v=-93,59
p=36,100 v=20,-7
p=65,52 v=-39,4
p=23,13 v=-44,-1
p=91,96 v=-57,-35
p=57,10 v=66,-91
p=79,4 v=62,-65
p=50,45 v=7,-20
p=76,81 v=-50,48
p=10,14 v=-68,60
p=9,45 v=-86,-26
p=37,59 v=-54,38
p=22,22 v=22,57
p=17,102 v=43,14
p=51,44 v=89,55
p=39,73 v=-76,-31
p=22,19 v=-79,-18
p=70,85 v=-78,44
p=74,102 v=-28,-89
p=45,87 v=-27,15
p=20,94 v=15,94
p=74,79 v=24,-31
p=85,25 v=-4,35
p=63,35 v=38,84
p=92,52 v=44,28
p=75,56 v=-95,3
p=75,18 v=-91,87
p=48,19 v=-21,36
p=68,95 v=-95,-65
p=21,53 v=-61,44
p=98,5 v=-20,70
p=3,77 v=-36,97
p=5,47 v=-58,-48
p=76,61 v=-95,-79
p=51,89 v=-14,-86
p=68,22 v=6,58
p=89,82 v=46,-25
p=68,93 v=14,-64
p=63,39 v=-76,6
p=87,100 v=-18,13
p=14,80 v=-37,-5
p=45,68 v=70,76
p=41,36 v=-83,55
p=95,67 v=-57,-24
p=45,78 v=56,18
p=37,97 v=18,65
p=81,49 v=82,-90
p=17,62 v=85,-2
p=20,93 v=-2,42
p=15,54 v=-6,-48
p=51,34 v=-87,-47
p=98,80 v=10,-28
p=32,75 v=74,-57
p=38,34 v=25,-72
p=27,39 v=64,-72
p=52,2 v=14,-43
p=9,0 v=-1,-4
p=8,96 v=-85,-7
p=27,74 v=-58,-5
p=8,8 v=-26,89
p=83,28 v=-88,-73
p=19,21 v=22,61
p=69,35 v=38,81
p=62,65 v=17,50
p=89,44 v=-50,-51
p=58,19 v=-7,-93
p=22,32 v=-86,-73
p=60,23 v=-84,-66
p=94,68 v=34,75
p=82,42 v=-36,-73
p=73,19 v=-21,56
p=62,42 v=73,55
p=60,62 v=-35,51
p=54,13 v=-38,-12
p=89,86 v=-1,12
p=93,72 v=60,-59
p=3,99 v=79,-89
p=9,58 v=9,46
p=72,33 v=79,1
p=67,30 v=-39,59
p=31,71 v=37,6
p=32,84 v=-89,49
p=93,18 v=82,56
p=60,86 v=-77,18
p=95,101 v=94,42
p=35,27 v=-27,59
p=49,46 v=49,1
p=52,4 v=-66,-15`;
  let fieldX = 101;
  let fieldY = 103;
  let seconds = 100;

  //   input = `p=0,4 v=3,-3
  // p=6,3 v=-1,-3
  // p=10,3 v=-1,2
  // p=2,0 v=2,-1
  // p=0,0 v=1,3
  // p=3,0 v=-2,-2
  // p=7,6 v=-1,-3
  // p=3,0 v=-1,-2
  // p=9,3 v=2,3
  // p=7,3 v=-1,2
  // p=2,4 v=2,-3
  // p=9,5 v=-3,-3`;
  //   fieldX = 11;
  //   fieldY = 7;

  const parsedInput = parseInput(input);

  const coordinatesPart1 = countCoordinates(parsedInput, fieldX, fieldY, seconds);

  console.log('Split into quadrants');
  const quadrants = splitIntoQuadrants(fieldX, fieldY);

  const robotsInQuadrants = filterRobotsInQuadrants(quadrants, coordinatesPart1);

  const safetyFactor = calculateSafetyFactor(robotsInQuadrants);
  console.log(`Safety factor: ${safetyFactor}`);
}

function calculateSafetyFactor(robotsInQuadrants) {
  return robotsInQuadrants.reduce((acc, robots) => acc * robots.length, 1);
}

function filterRobotsInQuadrants(quadrants, coordinates) {
  const result = [];
  for (const quadrant of quadrants) {
    const robots = coordinates.filter(coordinate => {
      return coordinate.positionX >= quadrant.start[0] && coordinate.positionX <= quadrant.end[0] &&
        coordinate.positionY >= quadrant.start[1] && coordinate.positionY <= quadrant.end[1];
    });
    result.push(robots);
  }
  return result;
}

function countCoordinates(input, fieldX, fieldY, seconds) {
  const result = [];
  for (const robot of input) {
    const coordinates = getCoordinates(robot, fieldX, fieldY, seconds);
    result.push(coordinates);
  }

  return result;
}

function splitIntoQuadrants(fieldX, fieldY) {
  const quadrants = [
    { start: [0, 0], end: [Math.floor(fieldX / 2) - 1, Math.floor(fieldY / 2) - 1] },
    { start: [Math.ceil(fieldX / 2), 0], end: [fieldX - 1, Math.floor(fieldY / 2) - 1] },
    { start: [0, Math.floor(fieldY / 2) + 1], end: [Math.floor(fieldX / 2) - 1, fieldY - 1] },
    { start: [Math.ceil(fieldX / 2), Math.ceil(fieldY / 2)], end: [fieldX - 1, fieldY - 1] },
  ];
  return quadrants;

}

function getCoordinates(robot, fieldX, fieldY, seconds) {
  let positionX = robot.position[0];
  let positionY = robot.position[1];
  let velocityX = robot.velocity[0];
  let velocityY = robot.velocity[1];

  for (let i = 0; i < seconds; i++) {
    positionX += velocityX;
    positionY += velocityY;

    if (isOutOfBounds(positionX, positionY, fieldX, fieldY)) {
      positionX = (positionX + fieldX) % fieldX;
      positionY = (positionY + fieldY) % fieldY;
    }
  }
  return { positionX, positionY };
}
function parseInput(input) {
  return input.split('\n').map(line => {
    const parts = line.split(' ');
    const position = parts[0].split('=')[1].split(',').map(Number);
    const velocity = parts[1].split('=')[1].split(',').map(Number);
    return { position, velocity };
  });
}

function isOutOfBounds(positionX, positionY, fieldX, fieldY) {
  return positionX < 0 || positionX >= fieldX || positionY < 0 || positionY >= fieldY;
}