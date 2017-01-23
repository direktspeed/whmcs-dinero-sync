/*
	Apache2 Licenced DIRKTSPEED Sync Service
	Status: Maintained

*/

const framework = require('express');
const server = framework();


server.get('/images', function(
    // data === "1x1 black Pixel"
    var data = "R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs";
    var img = new Buffer(data, 'base64');
    var spawn = require('child_process').spawn;
    
    spawn('node', ['syncService.js'], {
        stdio: 'ignore', // piping all stdio to /dev/null
    	detached: true
    }).unref();

    res.writeHead(200, {
     'Content-Type': 'image/png',
     'Content-Length': img.length
    });
    res.end(img);

))




server.listen(3000)
