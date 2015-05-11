/**
 * Created by navia on 2015/5/11.
 */
var cluster = require('cluster');
var http = require('http');
var numCPUs = require('os').cpus().length;

if (cluster.isMaster) {
    // 创建工作进程
    for (var i = 0; i < numCPUs; i++) {
        (function(){
            var worker = cluster.fork();

            // worker.on == worker.process.on
            worker.process.on("message", function(data){
                console.log(worker.id + ", " + worker.process.pid + " receive: " + data);
            });

        }());
    }

}else{
    setInterval(function(){
        process.send(process.memoryUsage().rss);
    }, 1000);
}