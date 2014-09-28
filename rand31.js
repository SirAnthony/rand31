//
// This is port of rand31 by Robin Whittle
// http://www.firstpr.com.au/dsp/rand31/
// Description, comments, original authors can be found there.
//

if (typeof module === 'object' && typeof define !== 'function')
    var define = function(f){ module.exports = f(); };

define(function(){
'use strict'

var CONSTA = 16807;
var CONSTM = 2147483647.0;

var Random = function(seed){
    this.seed(seed);
};
var R = Random.prototype;
/* Set the seed from a integer.
 * If zero is used, then the seed will be set to 1. */
R.seed = function(seed){
    seed = seed||1;
    this._seed = seed;
};
/* Return next pseudo-random value as
 * a integer in specified range. */
R.nextInt = function(min, max){
    if (!max)
        max = min, min = 0;
    if (!min && !max)
        return this.nextrand();
    min -= 0.4999;
    max += 0.4999;
    return Math.round(min+(max-min)*this.nextDouble());
};
/* Return next pseudo-random value as
 * a floating point value in specified range. */
R.nextDouble = function(min, max){
    if (!max)
        max = min||1.0, min = 0.0;
    return min + ((max-min)*(this.nextrand()/CONSTM));
};
R.nextrand = function(){
    // integer version 1, for max int 2^46 - 1 or larger.
    return this._seed = (this._seed * CONSTA) % CONSTM;
    // Original
    // var hi = (CONSTA * (this._seed >> 16));
    // var lo = (CONSTA * (this._seed & 0xFFFF)+((hi & 0x7FFF) << 16)+(hi >> 15));
    // return this._seed = (lo > 0x7FFFFFFF ? lo - 0x7FFFFFFF : lo);
};

return Random;
});
