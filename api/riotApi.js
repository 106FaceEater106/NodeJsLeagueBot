var https = require('https');
const config = require('../config.js');

module.exports = {
    consulta: function(url, metodo, devuelveInformacion){
        const options = {
            hostname: '127.0.0.1',
            port: config['puerto'],
            path: url,
            method: metodo,
            headers: { 
                'Authorization': 'Basic ' + config['auth']
            },
            rejectUnauthorized: false,
            encoding: 'utf8', 
            
          };
          
          let respuesta = "";

          const req = https.request(options, res => {
            if(devuelveInformacion){
                res.on('data', data => {
                    respuesta += data;
                }).on('end',()=>{
                    return respuesta;
                });
            }else{
                res.on('data', data => {
                    process.stdout.write(`${data}`);
                });
            }
          });
          
          req.on('error', error => {
            console.error(error)
          })
          
          req.end()
    }
};