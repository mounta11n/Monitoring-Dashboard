const http = require('http');
const fs = require('fs');

// Liste der Server, die überwacht werden sollen
const servers = [
  { hostname: 'localhost', port: 3000 },
  { hostname: 'localhost', port: 3001 }
  // Füge hier weitere Server hinzu
];

let serverStatus = {};

servers.forEach((server, index) => {
  const options = {
    hostname: server.hostname,
    port: server.port,
    method: 'GET'
  };

  const req = http.request(options, res => {
    serverStatus[`server${index + 1}`] = {
      online: res.statusCode === 200
    };

    fs.writeFile('response.json', JSON.stringify(serverStatus, null, 2), err => {
      if (err) throw err;
      console.log('Die Datei wurde gespeichert!');
    });
  });

  req.on('error', error => {
    console.error(error);
  });

  req.end();
});
