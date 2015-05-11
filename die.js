/**
 * Created by navia on 2015/5/11.
 */
EE = require('events').EventEmitter;
ee = new EE();

die = false;
ee.on('die', function() {
    die = true;
});
setTimeout(function() {
    console.log("die");
    ee.emit('die');
}, 100);
while(!die) {
}
console.log('done');