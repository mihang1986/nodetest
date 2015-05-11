/**
 * Created by navia on 2015/5/9.
 */

var fs = require('fs');
fs.readFile('file.txt', 'UTF-8', function(err, data){
    if(err){
        console.log(err);
    }else{
        console.log(data);
    }
});


console.log(3 > 2 > 1);