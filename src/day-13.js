/*
--- Day 13: Claw Contraption ---
Next up: the lobby of a resort on a tropical island. The Historians take a moment to admire the hexagonal floor tiles before spreading out.

Fortunately, it looks like the resort has a new arcade! Maybe you can win some prizes from the claw machines?

The claw machines here are a little unusual.
Instead of a joystick or directional buttons to control the claw, these machines have two buttons labeled A and B.
Worse, you can't just put in a token and play; it costs 3 tokens to push the A button and 1 token to push the B button.

With a little experimentation, you figure out that each machine's buttons are configured to move the claw
a specific amount to the right (along the X axis) and a specific amount forward (along the Y axis) each time that button is pressed.

Each machine contains one prize; to win the prize, the claw must be positioned exactly above the prize on both the X and Y axes.

You wonder: what is the smallest number of tokens you would have to spend to win as many prizes as possible?
You assemble a list of every machine's button behavior and prize location (your puzzle input). For example:

Button A: X+94, Y+34
Button B: X+22, Y+67
Prize: X=8400, Y=5400

Button A: X+26, Y+66
Button B: X+67, Y+21
Prize: X=12748, Y=12176

Button A: X+17, Y+86
Button B: X+84, Y+37
Prize: X=7870, Y=6450

Button A: X+69, Y+23
Button B: X+27, Y+71
Prize: X=18641, Y=10279
This list describes the button configuration and prize location of four different claw machines.

For now, consider just the first claw machine in the list:

Pushing the machine's A button would move the claw 94 units along the X axis and 34 units along the Y axis.
Pushing the B button would move the claw 22 units along the X axis and 67 units along the Y axis.
The prize is located at X=8400, Y=5400; this means that from the claw's initial position,
it would need to move exactly 8400 units along the X axis and exactly 5400 units along the Y axis to be perfectly aligned with the prize in this machine.
The cheapest way to win the prize is by pushing the A button 80 times and the B button 40 times.
This would line up the claw along the X axis (because 80*94 + 40*22 = 8400) and along the Y axis (because 80*34 + 40*67 = 5400).
Doing this would cost 80*3 tokens for the A presses and 40*1 for the B presses, a total of 280 tokens.

For the second and fourth claw machines, there is no combination of A and B presses that will ever win a prize.

For the third claw machine, the cheapest way to win the prize is by pushing the A button 38 times and the B button 86 times.
Doing this would cost a total of 200 tokens.

So, the most prizes you could possibly win is two; the minimum tokens you would have to spend to win all (two) prizes is 480.

You estimate that each button would need to be pressed no more than 100 times to win a prize. How else would someone be expected to play?

Figure out how to win as many prizes as possible. What is the fewest tokens you would have to spend to win all possible prizes?

--- Part Two ---
As you go to win the first prize, you discover that the claw is nowhere near where you expected it would be.
Due to a unit conversion error in your measurements, the position of every prize is actually 10000000000000 higher on both the X and Y axis!

Add 10000000000000 to the X and Y position of every prize. After making this change, the example above would now look like this:

Button A: X+94, Y+34
Button B: X+22, Y+67
Prize: X=10000000008400, Y=10000000005400

Button A: X+26, Y+66
Button B: X+67, Y+21
Prize: X=10000000012748, Y=10000000012176

Button A: X+17, Y+86
Button B: X+84, Y+37
Prize: X=10000000007870, Y=10000000006450

Button A: X+69, Y+23
Button B: X+27, Y+71
Prize: X=10000000018641, Y=10000000010279
Now, it is only possible to win a prize on the second and fourth claw machines.
Unfortunately, it will take many more than 100 presses to do so.

Using the corrected prize coordinates, figure out how to win as many prizes as possible.
What is the fewest tokens you would have to spend to win all possible prizes?
*/

export function executeDay13() {
  console.log("Day 13 - Claw Contraption");

  let input = `Button A: X+33, Y+93
Button B: X+98, Y+36
Prize: X=6697, Y=10467

Button A: X+72, Y+30
Button B: X+17, Y+88
Prize: X=4721, Y=5932

Button A: X+92, Y+36
Button B: X+22, Y+34
Prize: X=5366, Y=3090

Button A: X+11, Y+25
Button B: X+67, Y+15
Prize: X=1127, Y=365

Button A: X+61, Y+12
Button B: X+13, Y+59
Prize: X=18418, Y=315

Button A: X+55, Y+14
Button B: X+19, Y+76
Prize: X=3878, Y=17400

Button A: X+13, Y+94
Button B: X+73, Y+53
Prize: X=6914, Y=5358

Button A: X+74, Y+34
Button B: X+13, Y+49
Prize: X=12546, Y=13530

Button A: X+88, Y+46
Button B: X+53, Y+90
Prize: X=10509, Y=11536

Button A: X+16, Y+76
Button B: X+82, Y+21
Prize: X=3620, Y=15742

Button A: X+12, Y+41
Button B: X+52, Y+33
Prize: X=17016, Y=10722

Button A: X+15, Y+31
Button B: X+60, Y+37
Prize: X=2705, Y=13740

Button A: X+12, Y+55
Button B: X+84, Y+80
Prize: X=5568, Y=6610

Button A: X+45, Y+25
Button B: X+35, Y+59
Prize: X=5285, Y=7137

Button A: X+69, Y+20
Button B: X+28, Y+44
Prize: X=3112, Y=2768

Button A: X+48, Y+12
Button B: X+85, Y+93
Prize: X=3206, Y=1806

Button A: X+44, Y+27
Button B: X+21, Y+51
Prize: X=5154, Y=3836

Button A: X+23, Y+14
Button B: X+20, Y+44
Prize: X=10236, Y=17652

Button A: X+38, Y+51
Button B: X+30, Y+11
Prize: X=5886, Y=6587

Button A: X+60, Y+20
Button B: X+22, Y+47
Prize: X=17676, Y=7766

Button A: X+48, Y+55
Button B: X+85, Y+12
Prize: X=5164, Y=3526

Button A: X+62, Y+70
Button B: X+89, Y+12
Prize: X=3096, Y=664

Button A: X+13, Y+55
Button B: X+82, Y+20
Prize: X=7667, Y=3995

Button A: X+43, Y+33
Button B: X+17, Y+96
Prize: X=5734, Y=12447

Button A: X+29, Y+56
Button B: X+68, Y+27
Prize: X=4675, Y=4125

Button A: X+47, Y+15
Button B: X+13, Y+60
Prize: X=10888, Y=11810

Button A: X+17, Y+44
Button B: X+98, Y+71
Prize: X=10614, Y=10668

Button A: X+95, Y+74
Button B: X+24, Y+62
Prize: X=8736, Y=10226

Button A: X+86, Y+18
Button B: X+17, Y+90
Prize: X=8688, Y=8388

Button A: X+56, Y+33
Button B: X+27, Y+54
Prize: X=7249, Y=17501

Button A: X+18, Y+52
Button B: X+63, Y+18
Prize: X=7839, Y=6410

Button A: X+13, Y+33
Button B: X+61, Y+13
Prize: X=3119, Y=12195

Button A: X+54, Y+15
Button B: X+66, Y+77
Prize: X=7122, Y=5381

Button A: X+69, Y+38
Button B: X+17, Y+54
Prize: X=2185, Y=18150

Button A: X+61, Y+24
Button B: X+22, Y+58
Prize: X=13984, Y=15476

Button A: X+24, Y+68
Button B: X+63, Y+24
Prize: X=11855, Y=16140

Button A: X+45, Y+21
Button B: X+16, Y+31
Prize: X=3651, Y=1983

Button A: X+53, Y+15
Button B: X+29, Y+62
Prize: X=8906, Y=18166

Button A: X+70, Y+58
Button B: X+29, Y+95
Prize: X=6373, Y=6487

Button A: X+34, Y+26
Button B: X+16, Y+91
Prize: X=2404, Y=9321

Button A: X+49, Y+89
Button B: X+81, Y+41
Prize: X=1792, Y=2512

Button A: X+82, Y+27
Button B: X+20, Y+23
Prize: X=3316, Y=2602

Button A: X+20, Y+79
Button B: X+66, Y+52
Prize: X=1454, Y=3865

Button A: X+79, Y+42
Button B: X+29, Y+94
Prize: X=3591, Y=6074

Button A: X+39, Y+68
Button B: X+22, Y+11
Prize: X=2932, Y=3156

Button A: X+52, Y+23
Button B: X+27, Y+61
Prize: X=11595, Y=6783

Button A: X+24, Y+14
Button B: X+18, Y+47
Prize: X=12950, Y=5271

Button A: X+14, Y+42
Button B: X+55, Y+13
Prize: X=15201, Y=18155

Button A: X+25, Y+12
Button B: X+38, Y+82
Prize: X=2019, Y=3392

Button A: X+31, Y+72
Button B: X+84, Y+30
Prize: X=8827, Y=6138

Button A: X+18, Y+38
Button B: X+98, Y+57
Prize: X=6944, Y=4617

Button A: X+26, Y+51
Button B: X+22, Y+14
Prize: X=11934, Y=10846

Button A: X+41, Y+81
Button B: X+79, Y+30
Prize: X=6960, Y=6438

Button A: X+20, Y+54
Button B: X+63, Y+19
Prize: X=5233, Y=16563

Button A: X+15, Y+37
Button B: X+53, Y+21
Prize: X=8459, Y=8939

Button A: X+67, Y+11
Button B: X+23, Y+84
Prize: X=947, Y=16551

Button A: X+68, Y+42
Button B: X+22, Y+58
Prize: X=6242, Y=7808

Button A: X+24, Y+97
Button B: X+84, Y+14
Prize: X=4584, Y=5507

Button A: X+14, Y+50
Button B: X+59, Y+19
Prize: X=9208, Y=5864

Button A: X+37, Y+78
Button B: X+54, Y+17
Prize: X=10672, Y=11118

Button A: X+36, Y+65
Button B: X+47, Y+17
Prize: X=207, Y=16818

Button A: X+47, Y+24
Button B: X+27, Y+48
Prize: X=4281, Y=1856

Button A: X+54, Y+27
Button B: X+15, Y+50
Prize: X=14303, Y=5769

Button A: X+39, Y+41
Button B: X+99, Y+27
Prize: X=9456, Y=5008

Button A: X+13, Y+62
Button B: X+94, Y+27
Prize: X=3377, Y=5573

Button A: X+34, Y+65
Button B: X+47, Y+11
Prize: X=11920, Y=13132

Button A: X+30, Y+45
Button B: X+76, Y+25
Prize: X=1258, Y=730

Button A: X+58, Y+17
Button B: X+13, Y+53
Prize: X=2780, Y=1897

Button A: X+13, Y+98
Button B: X+30, Y+25
Prize: X=2443, Y=9968

Button A: X+30, Y+59
Button B: X+52, Y+15
Prize: X=5314, Y=16369

Button A: X+55, Y+16
Button B: X+23, Y+69
Prize: X=1277, Y=8221

Button A: X+12, Y+27
Button B: X+60, Y+16
Prize: X=6020, Y=18867

Button A: X+36, Y+75
Button B: X+90, Y+36
Prize: X=5958, Y=7110

Button A: X+45, Y+21
Button B: X+45, Y+97
Prize: X=5040, Y=3644

Button A: X+44, Y+14
Button B: X+16, Y+68
Prize: X=10004, Y=2606

Button A: X+33, Y+53
Button B: X+25, Y+12
Prize: X=533, Y=9616

Button A: X+87, Y+37
Button B: X+22, Y+68
Prize: X=8772, Y=5314

Button A: X+14, Y+62
Button B: X+72, Y+14
Prize: X=19054, Y=10270

Button A: X+40, Y+39
Button B: X+14, Y+83
Prize: X=832, Y=4140

Button A: X+76, Y+80
Button B: X+11, Y+48
Prize: X=5284, Y=7456

Button A: X+63, Y+19
Button B: X+33, Y+58
Prize: X=5571, Y=5572

Button A: X+41, Y+60
Button B: X+33, Y+15
Prize: X=2329, Y=14000

Button A: X+31, Y+86
Button B: X+38, Y+13
Prize: X=5926, Y=9416

Button A: X+33, Y+61
Button B: X+36, Y+13
Prize: X=4871, Y=1054

Button A: X+71, Y+86
Button B: X+95, Y+29
Prize: X=3367, Y=2443

Button A: X+87, Y+47
Button B: X+13, Y+76
Prize: X=5982, Y=8198

Button A: X+91, Y+38
Button B: X+23, Y+48
Prize: X=8123, Y=3584

Button A: X+61, Y+32
Button B: X+16, Y+46
Prize: X=10211, Y=1334

Button A: X+20, Y+71
Button B: X+76, Y+23
Prize: X=17392, Y=1534

Button A: X+84, Y+22
Button B: X+65, Y+99
Prize: X=7066, Y=3982

Button A: X+15, Y+41
Button B: X+52, Y+11
Prize: X=13243, Y=4006

Button A: X+36, Y+68
Button B: X+72, Y+12
Prize: X=5724, Y=2628

Button A: X+38, Y+68
Button B: X+34, Y+15
Prize: X=3744, Y=16860

Button A: X+74, Y+15
Button B: X+47, Y+49
Prize: X=7117, Y=4561

Button A: X+96, Y+35
Button B: X+15, Y+21
Prize: X=1236, Y=637

Button A: X+58, Y+19
Button B: X+26, Y+65
Prize: X=380, Y=18164

Button A: X+55, Y+28
Button B: X+17, Y+36
Prize: X=8002, Y=14472

Button A: X+23, Y+41
Button B: X+41, Y+19
Prize: X=2418, Y=17078

Button A: X+56, Y+82
Button B: X+51, Y+13
Prize: X=3502, Y=2044

Button A: X+16, Y+78
Button B: X+66, Y+13
Prize: X=1272, Y=15616

Button A: X+34, Y+18
Button B: X+18, Y+37
Prize: X=7156, Y=13153

Button A: X+88, Y+48
Button B: X+46, Y+80
Prize: X=9162, Y=6480

Button A: X+56, Y+51
Button B: X+67, Y+11
Prize: X=10141, Y=4884

Button A: X+14, Y+61
Button B: X+30, Y+30
Prize: X=1378, Y=4997

Button A: X+55, Y+11
Button B: X+23, Y+73
Prize: X=3734, Y=7108

Button A: X+99, Y+25
Button B: X+28, Y+35
Prize: X=7751, Y=3270

Button A: X+42, Y+15
Button B: X+27, Y+57
Prize: X=15302, Y=7793

Button A: X+17, Y+79
Button B: X+71, Y+52
Prize: X=1649, Y=2938

Button A: X+53, Y+41
Button B: X+15, Y+91
Prize: X=5229, Y=9841

Button A: X+21, Y+21
Button B: X+21, Y+87
Prize: X=1890, Y=3342

Button A: X+49, Y+66
Button B: X+91, Y+31
Prize: X=616, Y=555

Button A: X+46, Y+24
Button B: X+16, Y+51
Prize: X=5908, Y=7305

Button A: X+28, Y+59
Button B: X+53, Y+24
Prize: X=6174, Y=6872

Button A: X+16, Y+86
Button B: X+59, Y+27
Prize: X=1687, Y=2975

Button A: X+50, Y+99
Button B: X+32, Y+13
Prize: X=3098, Y=5429

Button A: X+44, Y+60
Button B: X+77, Y+17
Prize: X=4235, Y=5159

Button A: X+13, Y+48
Button B: X+49, Y+20
Prize: X=5826, Y=18352

Button A: X+28, Y+43
Button B: X+78, Y+19
Prize: X=5590, Y=3243

Button A: X+48, Y+18
Button B: X+29, Y+68
Prize: X=11472, Y=6816

Button A: X+63, Y+28
Button B: X+23, Y+46
Prize: X=6956, Y=7006

Button A: X+12, Y+37
Button B: X+46, Y+31
Prize: X=11398, Y=17303

Button A: X+36, Y+14
Button B: X+18, Y+35
Prize: X=3500, Y=17266

Button A: X+11, Y+39
Button B: X+75, Y+14
Prize: X=5578, Y=12663

Button A: X+55, Y+38
Button B: X+13, Y+31
Prize: X=2291, Y=1737

Button A: X+35, Y+14
Button B: X+28, Y+38
Prize: X=13626, Y=12206

Button A: X+78, Y+42
Button B: X+29, Y+48
Prize: X=7574, Y=5568

Button A: X+84, Y+24
Button B: X+11, Y+74
Prize: X=7407, Y=8706

Button A: X+38, Y+64
Button B: X+20, Y+11
Prize: X=12392, Y=10082

Button A: X+91, Y+14
Button B: X+32, Y+85
Prize: X=8684, Y=7582

Button A: X+57, Y+17
Button B: X+51, Y+77
Prize: X=2490, Y=2102

Button A: X+22, Y+54
Button B: X+20, Y+14
Prize: X=3386, Y=5574

Button A: X+58, Y+20
Button B: X+14, Y+36
Prize: X=7586, Y=9460

Button A: X+20, Y+66
Button B: X+39, Y+11
Prize: X=714, Y=12354

Button A: X+36, Y+58
Button B: X+46, Y+21
Prize: X=12164, Y=5166

Button A: X+35, Y+16
Button B: X+14, Y+51
Prize: X=6990, Y=19731

Button A: X+30, Y+11
Button B: X+19, Y+33
Prize: X=8461, Y=12145

Button A: X+66, Y+21
Button B: X+14, Y+43
Prize: X=15364, Y=18810

Button A: X+40, Y+28
Button B: X+13, Y+29
Prize: X=8735, Y=2747

Button A: X+12, Y+71
Button B: X+74, Y+22
Prize: X=838, Y=10319

Button A: X+66, Y+40
Button B: X+14, Y+29
Prize: X=9670, Y=8179

Button A: X+59, Y+21
Button B: X+33, Y+71
Prize: X=14466, Y=7702

Button A: X+81, Y+50
Button B: X+14, Y+45
Prize: X=17862, Y=11290

Button A: X+39, Y+16
Button B: X+11, Y+42
Prize: X=16229, Y=15390

Button A: X+53, Y+97
Button B: X+91, Y+52
Prize: X=6049, Y=5458

Button A: X+24, Y+20
Button B: X+18, Y+94
Prize: X=1764, Y=7948

Button A: X+91, Y+35
Button B: X+36, Y+45
Prize: X=9950, Y=5665

Button A: X+75, Y+34
Button B: X+11, Y+58
Prize: X=15025, Y=13510

Button A: X+15, Y+78
Button B: X+72, Y+60
Prize: X=5832, Y=11148

Button A: X+17, Y+55
Button B: X+70, Y+28
Prize: X=3636, Y=1318

Button A: X+25, Y+48
Button B: X+50, Y+29
Prize: X=3950, Y=1743

Button A: X+18, Y+65
Button B: X+51, Y+25
Prize: X=2127, Y=3065

Button A: X+14, Y+83
Button B: X+65, Y+46
Prize: X=3694, Y=5611

Button A: X+66, Y+46
Button B: X+13, Y+38
Prize: X=8352, Y=2672

Button A: X+33, Y+50
Button B: X+47, Y+20
Prize: X=6379, Y=14240

Button A: X+58, Y+64
Button B: X+74, Y+12
Prize: X=7936, Y=4508

Button A: X+73, Y+84
Button B: X+88, Y+16
Prize: X=8877, Y=7060

Button A: X+36, Y+21
Button B: X+21, Y+51
Prize: X=1901, Y=9656

Button A: X+28, Y+18
Button B: X+30, Y+83
Prize: X=4744, Y=7892

Button A: X+16, Y+29
Button B: X+96, Y+40
Prize: X=4128, Y=3462

Button A: X+72, Y+62
Button B: X+76, Y+11
Prize: X=13284, Y=7029

Button A: X+24, Y+87
Button B: X+51, Y+15
Prize: X=5511, Y=4179

Button A: X+36, Y+14
Button B: X+55, Y+78
Prize: X=1016, Y=7980

Button A: X+99, Y+21
Button B: X+49, Y+67
Prize: X=3405, Y=1911

Button A: X+57, Y+11
Button B: X+20, Y+27
Prize: X=3146, Y=1741

Button A: X+58, Y+17
Button B: X+23, Y+77
Prize: X=18477, Y=11773

Button A: X+15, Y+31
Button B: X+68, Y+44
Prize: X=4453, Y=2741

Button A: X+71, Y+35
Button B: X+15, Y+56
Prize: X=17610, Y=2916

Button A: X+42, Y+27
Button B: X+35, Y+79
Prize: X=1414, Y=1700

Button A: X+70, Y+12
Button B: X+66, Y+85
Prize: X=2312, Y=1649

Button A: X+51, Y+40
Button B: X+18, Y+99
Prize: X=4569, Y=7573

Button A: X+14, Y+42
Button B: X+67, Y+28
Prize: X=6290, Y=5408

Button A: X+50, Y+65
Button B: X+93, Y+17
Prize: X=8432, Y=3273

Button A: X+63, Y+21
Button B: X+17, Y+62
Prize: X=12173, Y=11084

Button A: X+11, Y+27
Button B: X+68, Y+51
Prize: X=7337, Y=6534

Button A: X+23, Y+50
Button B: X+23, Y+13
Prize: X=17718, Y=3429

Button A: X+37, Y+66
Button B: X+69, Y+16
Prize: X=5930, Y=6830

Button A: X+58, Y+84
Button B: X+62, Y+21
Prize: X=8262, Y=6531

Button A: X+76, Y+60
Button B: X+17, Y+62
Prize: X=8799, Y=10590

Button A: X+45, Y+16
Button B: X+11, Y+33
Prize: X=15548, Y=16389

Button A: X+12, Y+27
Button B: X+53, Y+32
Prize: X=6157, Y=16270

Button A: X+27, Y+99
Button B: X+91, Y+76
Prize: X=1788, Y=5010

Button A: X+84, Y+21
Button B: X+45, Y+72
Prize: X=4965, Y=3975

Button A: X+39, Y+11
Button B: X+23, Y+45
Prize: X=2441, Y=1815

Button A: X+40, Y+15
Button B: X+54, Y+77
Prize: X=9474, Y=11537

Button A: X+44, Y+20
Button B: X+23, Y+40
Prize: X=10910, Y=2200

Button A: X+38, Y+92
Button B: X+75, Y+37
Prize: X=2788, Y=3280

Button A: X+13, Y+50
Button B: X+76, Y+20
Prize: X=11271, Y=13750

Button A: X+26, Y+57
Button B: X+43, Y+23
Prize: X=11667, Y=3462

Button A: X+26, Y+51
Button B: X+61, Y+34
Prize: X=3407, Y=11872

Button A: X+14, Y+78
Button B: X+80, Y+14
Prize: X=15164, Y=8852

Button A: X+34, Y+75
Button B: X+73, Y+18
Prize: X=6774, Y=2070

Button A: X+26, Y+95
Button B: X+97, Y+60
Prize: X=7871, Y=5500

Button A: X+72, Y+31
Button B: X+23, Y+53
Prize: X=6724, Y=6860

Button A: X+17, Y+53
Button B: X+44, Y+35
Prize: X=3915, Y=4338

Button A: X+88, Y+24
Button B: X+12, Y+50
Prize: X=1496, Y=2464

Button A: X+50, Y+67
Button B: X+88, Y+35
Prize: X=9946, Y=5699

Button A: X+39, Y+57
Button B: X+97, Y+16
Prize: X=6061, Y=3073

Button A: X+27, Y+71
Button B: X+49, Y+17
Prize: X=14016, Y=2788

Button A: X+32, Y+75
Button B: X+82, Y+40
Prize: X=4074, Y=5135

Button A: X+95, Y+50
Button B: X+16, Y+78
Prize: X=8773, Y=5174

Button A: X+12, Y+29
Button B: X+92, Y+18
Prize: X=3776, Y=952

Button A: X+35, Y+12
Button B: X+14, Y+34
Prize: X=8810, Y=8888

Button A: X+12, Y+21
Button B: X+57, Y+27
Prize: X=19382, Y=3884

Button A: X+13, Y+62
Button B: X+90, Y+74
Prize: X=4512, Y=8020

Button A: X+31, Y+72
Button B: X+46, Y+17
Prize: X=3752, Y=12174

Button A: X+26, Y+14
Button B: X+16, Y+36
Prize: X=1174, Y=3598

Button A: X+51, Y+31
Button B: X+15, Y+87
Prize: X=3363, Y=8119

Button A: X+27, Y+57
Button B: X+36, Y+13
Prize: X=3284, Y=17864

Button A: X+88, Y+35
Button B: X+53, Y+95
Prize: X=4106, Y=3555

Button A: X+74, Y+35
Button B: X+11, Y+73
Prize: X=2505, Y=6134

Button A: X+18, Y+75
Button B: X+78, Y+18
Prize: X=4866, Y=7074

Button A: X+25, Y+71
Button B: X+59, Y+20
Prize: X=18596, Y=2944

Button A: X+53, Y+35
Button B: X+21, Y+50
Prize: X=5392, Y=4175

Button A: X+26, Y+74
Button B: X+59, Y+45
Prize: X=1554, Y=2702

Button A: X+14, Y+38
Button B: X+97, Y+70
Prize: X=7838, Y=7358

Button A: X+25, Y+68
Button B: X+63, Y+26
Prize: X=3483, Y=3514

Button A: X+73, Y+15
Button B: X+61, Y+96
Prize: X=9920, Y=10218

Button A: X+65, Y+67
Button B: X+98, Y+18
Prize: X=12810, Y=6978

Button A: X+47, Y+31
Button B: X+12, Y+26
Prize: X=2945, Y=6235

Button A: X+64, Y+86
Button B: X+94, Y+35
Prize: X=9664, Y=7142

Button A: X+75, Y+28
Button B: X+24, Y+88
Prize: X=8265, Y=9804

Button A: X+37, Y+41
Button B: X+76, Y+18
Prize: X=3813, Y=1709

Button A: X+92, Y+31
Button B: X+59, Y+73
Prize: X=6437, Y=5728

Button A: X+57, Y+36
Button B: X+32, Y+88
Prize: X=1692, Y=1272

Button A: X+38, Y+17
Button B: X+21, Y+64
Prize: X=3872, Y=2873

Button A: X+29, Y+15
Button B: X+31, Y+50
Prize: X=19377, Y=1075

Button A: X+60, Y+18
Button B: X+13, Y+62
Prize: X=7418, Y=782

Button A: X+42, Y+45
Button B: X+90, Y+27
Prize: X=1320, Y=720

Button A: X+14, Y+65
Button B: X+39, Y+18
Prize: X=1613, Y=3086

Button A: X+14, Y+53
Button B: X+37, Y+12
Prize: X=16119, Y=3376

Button A: X+11, Y+22
Button B: X+95, Y+18
Prize: X=2408, Y=516

Button A: X+47, Y+99
Button B: X+56, Y+16
Prize: X=1876, Y=2932

Button A: X+96, Y+23
Button B: X+16, Y+39
Prize: X=8832, Y=2749

Button A: X+63, Y+18
Button B: X+13, Y+32
Prize: X=1537, Y=1316

Button A: X+18, Y+15
Button B: X+25, Y+93
Prize: X=3873, Y=9939

Button A: X+17, Y+92
Button B: X+89, Y+74
Prize: X=8646, Y=14586

Button A: X+12, Y+39
Button B: X+56, Y+21
Prize: X=9268, Y=9035

Button A: X+58, Y+29
Button B: X+28, Y+58
Prize: X=4842, Y=3741

Button A: X+48, Y+67
Button B: X+83, Y+23
Prize: X=6564, Y=3591

Button A: X+25, Y+47
Button B: X+46, Y+21
Prize: X=8468, Y=3516

Button A: X+61, Y+37
Button B: X+19, Y+49
Prize: X=9169, Y=9031

Button A: X+11, Y+47
Button B: X+71, Y+62
Prize: X=1043, Y=3491

Button A: X+40, Y+18
Button B: X+22, Y+62
Prize: X=5398, Y=7066

Button A: X+49, Y+22
Button B: X+16, Y+53
Prize: X=18580, Y=14845

Button A: X+69, Y+46
Button B: X+12, Y+87
Prize: X=3117, Y=7608

Button A: X+85, Y+29
Button B: X+12, Y+75
Prize: X=8276, Y=5518

Button A: X+69, Y+97
Button B: X+87, Y+32
Prize: X=9084, Y=9429

Button A: X+19, Y+44
Button B: X+34, Y+14
Prize: X=2161, Y=2156

Button A: X+86, Y+55
Button B: X+43, Y+89
Prize: X=7783, Y=10943

Button A: X+49, Y+77
Button B: X+92, Y+34
Prize: X=8989, Y=5501

Button A: X+16, Y+61
Button B: X+76, Y+14
Prize: X=5416, Y=5239

Button A: X+31, Y+60
Button B: X+65, Y+37
Prize: X=14781, Y=15740

Button A: X+83, Y+58
Button B: X+19, Y+58
Prize: X=769, Y=1566

Button A: X+17, Y+43
Button B: X+67, Y+31
Prize: X=15343, Y=12525

Button A: X+47, Y+12
Button B: X+34, Y+79
Prize: X=17124, Y=15839

Button A: X+16, Y+36
Button B: X+65, Y+46
Prize: X=1339, Y=8902

Button A: X+12, Y+97
Button B: X+86, Y+42
Prize: X=6066, Y=3965

Button A: X+90, Y+16
Button B: X+58, Y+88
Prize: X=6048, Y=7368

Button A: X+24, Y+57
Button B: X+74, Y+41
Prize: X=6890, Y=9563

Button A: X+30, Y+69
Button B: X+51, Y+33
Prize: X=4254, Y=6918

Button A: X+83, Y+89
Button B: X+14, Y+75
Prize: X=3957, Y=9462

Button A: X+16, Y+82
Button B: X+65, Y+27
Prize: X=2724, Y=7838

Button A: X+24, Y+41
Button B: X+52, Y+22
Prize: X=2088, Y=16565

Button A: X+34, Y+65
Button B: X+67, Y+35
Prize: X=5088, Y=5445

Button A: X+66, Y+94
Button B: X+96, Y+36
Prize: X=5004, Y=4508

Button A: X+98, Y+44
Button B: X+38, Y+86
Prize: X=6440, Y=6752

Button A: X+80, Y+35
Button B: X+51, Y+72
Prize: X=10762, Y=7789

Button A: X+94, Y+69
Button B: X+14, Y+60
Prize: X=1492, Y=2388

Button A: X+18, Y+83
Button B: X+88, Y+60
Prize: X=4872, Y=8980

Button A: X+95, Y+45
Button B: X+65, Y+95
Prize: X=6575, Y=3885

Button A: X+24, Y+47
Button B: X+51, Y+27
Prize: X=8633, Y=17954

Button A: X+44, Y+84
Button B: X+47, Y+11
Prize: X=5920, Y=13864

Button A: X+12, Y+60
Button B: X+70, Y+21
Prize: X=8980, Y=2282

Button A: X+15, Y+44
Button B: X+68, Y+36
Prize: X=15575, Y=320

Button A: X+40, Y+16
Button B: X+23, Y+36
Prize: X=2672, Y=17392

Button A: X+72, Y+39
Button B: X+11, Y+43
Prize: X=10891, Y=18999

Button A: X+12, Y+25
Button B: X+54, Y+27
Prize: X=1784, Y=14271

Button A: X+33, Y+23
Button B: X+18, Y+76
Prize: X=2496, Y=6816

Button A: X+17, Y+66
Button B: X+96, Y+28
Prize: X=8922, Y=8096

Button A: X+11, Y+60
Button B: X+66, Y+24
Prize: X=1452, Y=4560

Button A: X+39, Y+11
Button B: X+15, Y+56
Prize: X=14828, Y=13652

Button A: X+62, Y+33
Button B: X+13, Y+25
Prize: X=14285, Y=6171

Button A: X+44, Y+73
Button B: X+98, Y+16
Prize: X=3080, Y=1885

Button A: X+41, Y+26
Button B: X+11, Y+23
Prize: X=18714, Y=18612

Button A: X+56, Y+92
Button B: X+98, Y+15
Prize: X=2450, Y=3295

Button A: X+71, Y+21
Button B: X+20, Y+58
Prize: X=4455, Y=15963

Button A: X+30, Y+59
Button B: X+47, Y+25
Prize: X=15598, Y=18292

Button A: X+21, Y+43
Button B: X+45, Y+24
Prize: X=4626, Y=4089

Button A: X+50, Y+12
Button B: X+11, Y+61
Prize: X=3692, Y=5088

Button A: X+14, Y+72
Button B: X+63, Y+29
Prize: X=3143, Y=4659

Button A: X+43, Y+12
Button B: X+30, Y+48
Prize: X=17321, Y=3284

Button A: X+32, Y+99
Button B: X+58, Y+18
Prize: X=8178, Y=10287

Button A: X+93, Y+67
Button B: X+33, Y+91
Prize: X=4470, Y=5506

Button A: X+15, Y+35
Button B: X+34, Y+15
Prize: X=11978, Y=7900

Button A: X+45, Y+61
Button B: X+79, Y+24
Prize: X=7193, Y=4599

Button A: X+23, Y+47
Button B: X+32, Y+12
Prize: X=4145, Y=4893

Button A: X+11, Y+29
Button B: X+54, Y+14
Prize: X=3920, Y=15864

Button A: X+14, Y+47
Button B: X+81, Y+39
Prize: X=3267, Y=19566

Button A: X+82, Y+94
Button B: X+87, Y+12
Prize: X=10751, Y=7850

Button A: X+29, Y+46
Button B: X+23, Y+12
Prize: X=11446, Y=3694

Button A: X+20, Y+78
Button B: X+78, Y+18
Prize: X=12606, Y=14870

Button A: X+51, Y+31
Button B: X+42, Y+95
Prize: X=3636, Y=2488

Button A: X+77, Y+21
Button B: X+76, Y+94
Prize: X=8859, Y=7765

Button A: X+35, Y+73
Button B: X+45, Y+15
Prize: X=5150, Y=2642

Button A: X+59, Y+16
Button B: X+42, Y+63
Prize: X=6655, Y=3095

Button A: X+86, Y+69
Button B: X+16, Y+71
Prize: X=7270, Y=9439

Button A: X+38, Y+99
Button B: X+82, Y+30
Prize: X=2414, Y=3351

Button A: X+25, Y+58
Button B: X+29, Y+16
Prize: X=3938, Y=2206

Button A: X+19, Y+75
Button B: X+49, Y+35
Prize: X=4224, Y=4000

Button A: X+39, Y+74
Button B: X+70, Y+41
Prize: X=5117, Y=6220

Button A: X+61, Y+27
Button B: X+13, Y+58
Prize: X=5000, Y=6863

Button A: X+24, Y+69
Button B: X+77, Y+62
Prize: X=3918, Y=6483

Button A: X+50, Y+69
Button B: X+32, Y+12
Prize: X=3148, Y=9686

Button A: X+11, Y+72
Button B: X+80, Y+16
Prize: X=3990, Y=18544

Button A: X+42, Y+61
Button B: X+39, Y+18
Prize: X=4646, Y=759

Button A: X+54, Y+13
Button B: X+19, Y+54
Prize: X=13280, Y=12097

Button A: X+69, Y+47
Button B: X+24, Y+56
Prize: X=6291, Y=7497

Button A: X+24, Y+57
Button B: X+66, Y+21
Prize: X=8198, Y=5258

Button A: X+64, Y+90
Button B: X+82, Y+19
Prize: X=10878, Y=8459

Button A: X+23, Y+64
Button B: X+64, Y+22
Prize: X=10290, Y=8920`

  //   input = `Button A: X+94, Y+34
  // Button B: X+22, Y+67
  // Prize: X=8400, Y=5400

  // Button A: X+26, Y+66
  // Button B: X+67, Y+21
  // Prize: X=12748, Y=12176

  // Button A: X+17, Y+86
  // Button B: X+84, Y+37
  // Prize: X=7870, Y=6450

  // Button A: X+69, Y+23
  // Button B: X+27, Y+71
  // Prize: X=18641, Y=10279`;
  const parsedInput = parseInput(input);

  const part1Result = processPart1(parsedInput);
  console.log(`Part 1: ${part1Result}`);

  const part2Result = processPart2(parsedInput);
  console.log(`Part 2: ${part2Result}`);

}

function processPart1(data) {
  let result = 0;


  for (const { buttonA, buttonB, prize } of data) {
    const res = countMovesPart1(buttonA, buttonB, prize);

    if (res === null) {
      continue;
    }
    const cost = res.countA * 3 + res.countB;
    result += cost;
  }

  return result;
}

function processPart2(data) {
  let result = 0;


  for (const { buttonA, buttonB, prize } of data) {
    const res = countMovesPart2(buttonA, buttonB, prize);

    if (res === null) {
      continue;
    }

    const cost = res.countA * 3 + res.countB;
    result += cost;
  }

  return result;
}

function countMovesPart1(buttonA, buttonB, prize) {
  let limit = 100;

  for (let i = 0; i < limit; i++) {
    let countA = Math.floor((prize.x - buttonB.x * i) / buttonA.x);
    const fitFirst = buttonA.x * countA + buttonB.x * i === prize.x;
    const fitSecond = buttonA.y * countA + buttonB.y * i === prize.y;

    if (countA < limit && fitFirst && fitSecond) {
      return { countA, countB: i };
    }
  }

  return null
}

function countMovesPart2(buttonA, buttonB, prize) {
  const prizeX = 10000000000000 + prize.x;
  const prizeY = 10000000000000 + prize.y;
  const buttonBCount = (buttonA.y * prizeX - buttonA.x * prizeY) / (buttonA.y * buttonB.x - buttonA.x * buttonB.y);
  const buttonACount = (prizeX - buttonB.x * buttonBCount) / buttonA.x;

  if (buttonBCount !== Math.floor(buttonBCount) || buttonACount !== Math.floor(buttonACount)) {
    return null;
  }

  return { countA: buttonACount, countB: buttonBCount };
}

function parseInput(input) {
  const lines = input.split('\n\n');
  const parsedData = [];
  // console.log(lines);

  for (const line of lines) {
    const [buttonA, buttonB, prize] = line.split('\n');
    const [x1, y1] = buttonA.match(/X\+(\d+), Y\+(\d+)/).slice(1).map(Number);
    const [x2, y2] = buttonB.match(/X\+(\d+), Y\+(\d+)/).slice(1).map(Number);
    const [x3, y3] = prize.match(/X=(\d+), Y=(\d+)/).slice(1).map(Number);
    parsedData.push({ buttonA: { x: x1, y: y1 }, buttonB: { x: x2, y: y2 }, prize: { x: x3, y: y3 } });
  }

  return parsedData;
}