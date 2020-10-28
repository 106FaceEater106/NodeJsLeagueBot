const superagent = require('superagent-use')(require('superagent'));
var https = require('https');
const config = require('./config.js');
var request = require('./riotApi.js');
const fetch = require('node-fetch');
const fs = require('fs');

//https://127.0.0.1:${puerto}/lol-gameflow/v1/gameflow-phase
//Basic ${auth}

let auth;
let puerto;

const apiLista = function(){
    const options = {
        hostname: '127.0.0.1',
        port: puerto,
        path: '/lol-gameflow/v1/gameflow-phase',
        method: 'GET',
        headers: { 
            'Authorization': 'Basic ' + auth
        },
        rejectUnauthorized: false,
        encoding: 'utf8', 
        
      }
      
      const req = https.request(options, res => {
        console.log(`statusCode: ${res.statusCode} || ${options['hostname']} ${options['port']} ${auth}`)
      
        res.on('data', d => {
          process.stdout.write(d)
        })
      })
      
      req.on('error', error => {
        console.error(error)
      })
      
      req.end()
}

module.exports = {
    inicializar: function(){
        const archivolockfile = `C:\\Riot Games\\League of Legends\\lockfile`;
        let path = process.cwd();
        let buffer = fs.readFileSync(archivolockfile);
        let args = buffer.toString().split(":");
        auth = Buffer.from('riot:'+args[3]).toString('base64')
        puerto = args[2];
    },
    buscarPartida: function(){
        apiLista();
    },
};