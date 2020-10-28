const fs = require('fs');
const config = require('../config.js');
const riotApi = require('../api/riotApi.js');

module.exports = {
    inicializar: function(){
        const buffer = fs.readFileSync(config['leagueOfLegendsLockfile']);
        const args = buffer.toString().split(":");
        config['auth'] = Buffer.from('riot:'+args[3]).toString('base64')
        config['puerto'] = args[2];
    },
    buscarPartida: function(){
        riotApi.consulta('/lol-gameflow/v1/gameflow-phase', 'GET', false);
    },
};