rand31
======

JS port of Park-Miller-Carta Pseudo-Random Number Generator
Full description available at http://www.firstpr.com.au/dsp/rand31/

Usage
------

Quick:

    var random = require('rand31');
    random.seed(42);
    var number = random.nextInt();

Methods
-------

_rand31.seed_ - Setup new seed for generator.
_rand31.nextrand_ - Get next random number.

With arguments:

_rand31.nextInt(min, max)_ - Get next random rounded number.
_rand31.nextDouble(min, max)_ - Get next random float number.

Both arguments can be ommited. In this case value from 0 to 
2^46 will be returned. In case second argument is ommited value
from 0 to first parameter will be returned.
