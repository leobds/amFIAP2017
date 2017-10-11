function PostagemDAO(connection){
    this._connection = connection;
}

PostagemDAO.prototype.getPostagens = function(callback){
    this._connection.query('SELECT * FROM Post', callback);
}

module.exports = function(){
    
    console.log('Classe de Modelos inicializada');

    return PostagemDAO;
}