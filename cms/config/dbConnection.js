var mySQL = require('mysql');

var connMySQL = function(){
    console.log('Conexão estabelecida');

    return mySQL.createConnection({
        host : 'localhost',
        user : 'leonardo',
        password : 'torresmo69',
        database : 'cms'
    });
}

module.exports = function(){ // abre funcao
    console.log('Fez o autoload do modulo de conexao');
      return connMySQL;
  } // fecha funcao