const assertEqual = require('../assertEqual');
// test
var test1 = countLetters('LHL');
assertEqual(test1['L'], 2);
assertEqual(test1['H'], 1);

var test2 = countLetters("lighthouse in the house");
assertEqual(test2['l'], 1);
assertEqual(test2['i'], 2);
assertEqual(test2['g'], 1);
assertEqual(test2['h'], 4);
assertEqual(test2['t'], 2);
assertEqual(test2['o'], 2);
assertEqual(test2['u'], 2);
assertEqual(test2['s'], 2);
assertEqual(test2['e'], 3);
assertEqual(test2['n'], 1);