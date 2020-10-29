const fs = require('fs');
const config = require('../config.js');
const riotApi = require('../api/riotApi.js');

module.exports = {
    // --------------- Funciones
    obtenerGameFlow: function(){
        return riotApi.consulta('/lol-gameflow/v1/gameflow-phase', 'GET', true);
    },
    obtenerAllGameData: function(){
        return riotApi.consulta('/liveclientdata/allgamedata', 'GET', true);
    },
    obtenerActivePlayerData: function(){
        return riotApi.consulta('/liveclientdata/activeplayer', 'GET', true);
    },
    obtenerActivePlayerHabilities:function(){
        return riotApi.consulta('/liveclientdata/activeplayerabilities', 'GET', true);
    },
    obtenerActivePlayerRunes:function(){
        return riotApi.consulta('/liveclientdata/activeplayerrunes', 'GET', true);
    },
    obtenerPlayerList:function(){
        return riotApi.consulta('/liveclientdata/playerlist', 'GET', true);
    },
    obtenerPlayerScore:function(playerName){
        return riotApi.consulta(`/liveclientdata/playerscores?summonerName=${playerName}`, 'GET', true);
    },
    obtenerPlayerSummonerSpells:function(playerName){
        return riotApi.consulta(`/liveclientdata/playersummonerspells?summonerName=${playerName}`, 'GET', true);
    },
    obtenerPlayerItems:function(playerName){
        return riotApi.consulta(`/liveclientdata/playeritems?summonerName=${playerName}`, 'GET', true);
    },
    obtenerGameEvents:function(){
        return riotApi.consulta('/liveclientdata/eventdata', 'GET', true);
    },
    obtenerGameStats:function(){
        return riotApi.consulta('/liveclientdata/gamestats', 'GET', true);
    }
};