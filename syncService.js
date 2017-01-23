/*
	Executes a sync if not executed already
	uses sync.lock file to show status to service.js

*/

const fs = require('fs');
const path = '/tmp/sync.lock'

// WHMCS Client 
const whmcs = require('lib-whmcs-api');

// api.dinero.dk Client
const dinero = require('lib-dinero-dk');

try {
    // Query the entry
    stats = fs.lstatSync(path);

    // Is it a file?
    if (stats.isFile()) {
        // Yes it is
	process.exit(0);
    }
}
catch (e) {
   // ...
   fs.writeFile(path, new Date(), function(err) {
    if(err) {
        return console.log(err);
    }
    console.log("The file was saved!");
    startSync();
   });

}

function startSync() {
	//TODO: use the client whmcs client to read Clients
	//TODO: use the client whmcs client to read Orders
	//TODO: use the client whmcs client to read Products
	//TODO: use the dinero.dk client to write Clients if not exists else update
	//TODO: use the dinero.dk client to write Orders if not exists else update
	//TODO: use the dinero.dk client to write Products if not exists else update
	//TODO: Code it

// Creates the Connection
whmcs.init({

})

// Creates the Connection
dinero.init({

})


}
