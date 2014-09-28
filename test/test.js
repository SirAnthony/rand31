
var Random = require('../rand31.js');
var assert = require('assert');

describe('rand31', function(){
    var seed = 15;
    var r = new Random(seed);
    it('should return same values for same seed', function(){
        var r2 = new Random(seed);
        r.seed(seed);
        for (var i=0; i<10000; ++i)
            assert.equal(r.nextInt(), r2.nextInt());
    });
    it('should return different values for different seed', function(){
        var r2 = new Random(seed);
        r.seed(25);
        for (var i=0; i<100; ++i)
            assert(r.nextInt() != r2.nextInt());
    });
    it('should return in range', function(){
        r.seed(seed);
        for (var i = 0; i<1000; ++i){
            var igz = r.nextInt(5);
            var ir = r.nextInt(15, 30);
            var dr = r.nextDouble(0.35, 0.47);
            assert(igz >= 0 && igz <= 5);
            assert(ir >= 15 && ir <= 30);
            assert(dr >= 0.35 && dr <= 0.47);
        }
    });
    it('should be equal to original data', function(){
        /* For a = 16807, the 10000th value after a seed
         * of 1 should be 1043618065 as predicted by
         * Park and Miller, 1988, page 1195. */
        var results = {
            1: 16807, 2: 282475249, 3: 1622650073, 4: 984943658,
            5: 1144108930, 6: 470211272, 7: 101027544, 8: 1457850878,
            9: 1458777923, 10: 2007237709, 9998: 925166085,
            9999: 1484786315, 10000: 1043618065, 10001: 1589873406,
            10002: 2010798668, 1000000: 1227283347, 2000000: 1808217256,
            3000000: 1140279430, 4000000: 851767375, 5000000: 1885818104,
            99000000: 168075678, 100000000: 1209575029,
            101000000: 941596188, 2147483643: 1207672015,
            2147483644: 1475608308, 2147483645: 1407677000,
            2147483646: 1, 2147483647: 16807};
        var r = new Random(1);
        for (var l=1; l<2147483655; l++){
            var v = r.nextInt();
            if (l in results)
                assert(v == results[l]);
            if (l>10000000)
                break;
        }
    });
});
