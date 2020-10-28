const robot = require("robotjs");
const pixel = require("./detection/pixel.js");
const config = require("./config.js");
const clientManager = require("./managers/clientManager.js");
// Api calls etc..

/* Limpiar consola antes */
console.clear();

/* Inicializar bot */
console.log("LeagueBot JS hecho por Zorbuk en Nodejs con Robotjs");

clientManager.inicializar();
clientManager.buscarPartida();