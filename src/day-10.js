/*
--- Day 10: Hoof It ---
You all arrive at a Lava Production Facility on a floating island in the sky.
As the others begin to search the massive industrial complex, you feel a small nose boop your leg and look down to discover a reindeer wearing a hard hat.

The reindeer is holding a book titled "Lava Island Hiking Guide". However, when you open the book,
you discover that most of it seems to have been scorched by lava!
As you're about to ask how you can help, the reindeer brings you a blank topographic map of the surrounding area (your puzzle input)
and looks up at you excitedly.

Perhaps you can help fill in the missing hiking trails?

The topographic map indicates the height at each position using a scale from 0 (lowest) to 9 (highest). For example:

0123
1234
8765
9876
Based on un-scorched scraps of the book, you determine that a good hiking trail is as long as possible and has an even, gradual, uphill slope.
For all practical purposes, this means that a hiking trail is any path that starts at height 0, ends at height 9,
and always increases by a height of exactly 1 at each step.
Hiking trails never include diagonal steps - only up, down, left, or right (from the perspective of the map).

You look up from the map and notice that the reindeer has helpfully begun to construct a small pile of pencils, markers, rulers, compasses, stickers,
and other equipment you might need to update the map with hiking trails.

A trailhead is any position that starts one or more hiking trails - here, these positions will always have height 0.
Assembling more fragments of pages, you establish that a trailhead's score is the number of 9-height positions reachable from that trailhead via a hiking trail.
In the above example, the single trailhead in the top left corner has a score of 1 because it can reach a single 9 (the one in the bottom left).

This trailhead has a score of 2:

...0...
...1...
...2...
6543456
7.....7
8.....8
9.....9
(The positions marked . are impassable tiles to simplify these examples; they do not appear on your actual topographic map.)

This trailhead has a score of 4 because every 9 is reachable via a hiking trail except the one immediately to the left of the trailhead:

..90..9
...1.98
...2..7
6543456
765.987
876....
987....
This topographic map contains two trailheads; the trailhead at the top has a score of 1, while the trailhead at the bottom has a score of 2:

10..9..
2...8..
3...7..
4567654
...8..3
...9..2
.....01
Here's a larger example:

89010123
78121874
87430965
96549874
45678903
32019012
01329801
10456732
This larger example has 9 trailheads. Considering the trailheads in reading order, they have scores of 5, 6, 5, 3, 1, 3, 5, 3, and 5.
Adding these scores together, the sum of the scores of all trailheads is 36.

The reindeer gleefully carries over a protractor and adds it to the pile. What is the sum of the scores of all trailheads on your topographic map?


--- Part Two ---
The reindeer spends a few minutes reviewing your hiking trail map before realizing something,
disappearing for a few minutes, and finally returning with yet another slightly-charred piece of paper.

The paper describes a second way to measure a trailhead called its rating.
A trailhead's rating is the number of distinct hiking trails which begin at that trailhead. For example:

.....0.
..4321.
..5..2.
..6543.
..7..4.
..8765.
..9....
The above map has a single trailhead; its rating is 3 because there are exactly three distinct hiking trails which begin at that position:

.....0.   .....0.   .....0.
..4321.   .....1.   .....1.
..5....   .....2.   .....2.
..6....   ..6543.   .....3.
..7....   ..7....   .....4.
..8....   ..8....   ..8765.
..9....   ..9....   ..9....
Here is a map containing a single trailhead with rating 13:

..90..9
...1.98
...2..7
6543456
765.987
876....
987....
This map contains a single trailhead with rating 227
(because there are 121 distinct hiking trails that lead to the 9 on the right edge and 106 that lead to the 9 on the bottom edge):

012345
123456
234567
345678
4.6789
56789.
Here's the larger example from before:

89010123
78121874
87430965
96549874
45678903
32019012
01329801
10456732
Considering its trailheads in reading order, they have ratings of 20, 24, 10, 4, 1, 4, 5, 8, and 5.
The sum of all trailhead ratings in this larger example topographic map is 81.

You're not sure how,
but the reindeer seems to have crafted some tiny flags out of toothpicks and bits of paper and is using them to mark trailheads on your topographic map.
What is the sum of the ratings of all trailheads?

*/

export function executeDay10() {
  console.log('DAY 10: Monitoring Station');

  let input = `034988701278987676012129801065432105421103432103454096565
125679872367010982101036782196501234910012501012763187434
787610765456123673412345693887321045823459621029872236121
898525601595434534781076784989430896701968739438901549030
323434532786365105698985895676501765432879548567123678745
011012345645678234387654326967892123446785697621034505656
432903678932109323476763017856743014565494784543217614567
589814565021012310565892107012656019872343203894108723878
676745654108985459876901098763254321781254112765439012969
565656783212976367805419343454169430690167089678321023456
854309892107801210912378332169078944512358974389412013210
985212343056543498901263211078927653403445665278501894321
676501456545212567632154901012012102176532787165430765410
125034567430101676545013876328703291081001096012321456701
034129878921018987436980785439654387892654012965434389898
101212982982789832127821897654303476763787123878001298187
832003471073654101038936778985212565654692104569122347098
943126562364543234897645012105432894304543243321031056127
874298401459659145686541023256301783213432102458947898036
965387523458778096675632894367012654500123211067656012145
810456014560127687501701765458983523545655428985443083434
723012329875034573432892601249874012338764569876322196510
654322345676542102343789894332465621429853278701012387623
456401234987789011498778765011321290510343189652212899854
367321243453276320345662104320210987653212090343103769763
218930652454105431221323478910345898710103221202114658892
006945781367898987630014568921456787610154101213095147081
145876590201456894545679697832125456543267818344786036120
236710185102361003879788786545001445567858989655687125431
569825676509872112968795670122112344431945878743296234565
654334587412103021257654565431034498120930189650123109872
789245698343894540343403676892345567011821065211034898901
432176501256765696012512589743496578762762174300165437432
310089433212678787810103430652787789643453789421676326523
421632124501549896981254921301296545556304789034589212010
530789038678432765432367873234123403469215672105890103141
045690129879321054101234980105038912378987683216721911032
132101434564567893250125678676107667877876594569637832145
201234989433218982345614989789234554960345487678546543256
334345676521101671898703065690965433451206543287667898969
455210897010010560789782154321876522543215670196546327878
966580768954323457632692212430789011694504389231435416547
877891251067810198541521003521545600789611223410121005436
012019342301967801430435654677632780678700014521032389305
329828765432858912301646710788901891521812325672123458216
456734210876543205218769881291010132430923278989834567567
012985309987434104329454898301125673876014167575765765498
943476478932122345010343987432034984981985095434389894323
859874567841031656789252156547875675670876787625678987010
768561265434670712395161067656965787651451012510895672100
655410872354589803234078458945434590142360343422743543261
012328961043489954165439143289323212239871256321652145652
785499876672128765076721012170212103456756765410598056743
896780745589056787689831089061106787034347898507882349899
763271234432345996547642174352005498125432984678971001878
454189432521001876038983465243214323676901765489160010967
565076521010122345127654564101233010987810894321054323456`.split('\n').map(row => row.split('').map(Number));

  //   input = `89010123
  // 78121874
  // 87430965
  // 96549874
  // 45678903
  // 32019012
  // 01329801
  // 10456732`.split('\n').map(row => row.split('').map(Number));

  const map = buildMap(input);

  const part1Start = Date.now();
  const ratingPart1 = countRatingPart1(map);
  const part1End = Date.now();
  console.dir(`Rating Par1: ${ratingPart1}. Time: ${part1End - part1Start}ms`);

  const part2Start = Date.now();
  const ratingPart2 = countRatingPart2(map);
  const part2End = Date.now();
  console.dir(`Rating Par2 ${ratingPart2}. Time: ${part2End - part2Start}ms`);
}

function countRatingPart1(map) {
  let sum = 0
  const zeros = map.get(0);
  for (const zero of zeros) {
    const routes = countRoutesForStart(zero, map);
    const last = routes[routes.length - 1];
    const uniqueTargets = new Set(last.map(pos => `${pos[0]},${pos[1]}`));
    sum += uniqueTargets.size;
  }

  return sum
}

function countRoutesForStart(start, map) {
  const paths = new Array(10).fill(0).map(() => []);
  paths[0].push(start);
  for (let i = 1; i < 10; i++) {
    const prevPositions = paths[i - 1];
    for (const prevPos of prevPositions) {
      const positions = map.get(i);
      const eligiblePositions = positions.filter(pos => isEligible(pos, prevPos));

      paths[i].push(...eligiblePositions);
    }


  }

  return paths;

}

function countRatingPart2(map) {
  let sum = 0
  const zeros = map.get(0);
  for (const zero of zeros) {
    const routes = countRoutesForStart(zero, map);
    let uniquePathsCount = routes[routes.length - 1].length;

    sum += uniquePathsCount;
  }

  return sum
}

function isEligible(pos, start) {
  const [x, y] = start;
  const [x1, y1] = pos;
  return ((x - x1 === 1 || x - x1 === -1) && y - y1 === 0) || ((y - y1 === 1 || y - y1 === -1) && x - x1 === 0);
}

function buildMap(input) {
  const map = new Map();
  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input[i].length; j++) {
      const el = input[i][j];
      const data = map.get(el);

      if (data) {
        data.push([i, j]);
      } else {
        map.set(el, [[i, j]]);
      }
    }
  }
  return map;
}