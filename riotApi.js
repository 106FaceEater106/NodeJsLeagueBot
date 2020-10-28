var https = require('https');
const config = require('./config.js');

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
          
          const req = https.request(options, res => {
            //console.log(`statusCode: ${res.statusCode} || ${options['hostname']} ${options['port']} ${auth}`);
          
            res.on('data', data => {
                if(devuelveInformacion){
                    return data;
                }else{
                    process.stdout.write(`${data}`);
                }
            });
          });
          
          req.on('error', error => {
            console.error(error)
          })
          
          req.end()
    }
};