/**
 * Created by navia on 2015/5/11.
 */

var net = require('net');


var chatServer = net.createServer(),
    clientList = [];
chatServer.on('connection', function(client){
    client.name = client.remoteAddress + ':' + client.remotePort
    clientList.push(client);
    client.write('hi ' + client.name + '\n');

    client.on('data', function(data){
        //console.log(data.toString());
        var clearup = [];

        for(var i=0,imax=clientList.length; i<imax; i++){
            if(clientList[i] != client) {
                if (client.writable) {
                    clientList[i].write(data.toString());
                }else{
                    clientList[i].destroy();
                    clearup.push(clientList[i])
                }
            }
        }

        for(var i= 0,imax=clearup.length; i<imax; i++){
            clientList.splice(clientList.indexOf(clearup[i], 1));
        }
    });

    client.on('end', function(){
        clientList.splice(clientList.indexOf(client), 1);
    });

    client.on('error', function(err){
        console.log(err);
    });
}).listen(9000);

console.log('server is listen on 9000');

