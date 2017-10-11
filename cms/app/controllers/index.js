module.exports.index = function(application, req, res){

    var connection  = app.config.dbConnection();
    var postagemDAO = app.app.models.PostagemDAO(connection);

    postagemDAO.getPostagens(function(error, result){
        console.log(error);
        console.log(result);
        console.log('teste');

        res.render('index', {postagens : result});
    });    
}