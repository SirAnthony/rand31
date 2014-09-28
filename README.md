rand31
======

JS port of Park-Miller-Carta Pseudo-Random Number Generator

Full description available at http://www.firstpr.com.au/dsp/rand31/

Usage
-----

    var random = require('rand31');
    random.seed(42);
    var number = random.nextInt();

Methods
-------

_rand31.**seed**_ - Setup new seed for generator. <br />
_rand31.**nextrand**_ - Get next random number.<br />

With arguments:

_rand31.**nextInt**(min, max)_ - Get next random rounded number.<br />
_rand31.**nextDouble**(min, max)_ - Get next random float number.<br />

Both arguments can be omitted. In this case value from 0 to 
2^46 will be returned.<br />
In case second argument is omitted value from 0 to first
argument will be returned.
