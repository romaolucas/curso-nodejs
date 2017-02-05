module.exports = function(app) {
    app.get('/produtos', function(req,res) {
        var connection = app.infra.connectionFactory();
        var produtosBanco = new app.infra.ProdutoDAO(connection);
        produtosBanco.lista(function(erros,resultados){
            res.render('produtos/lista', {lista:resultados});

       });
        connection.end();   
    });

    app.get('/produtos/remove', function(req, res) {
        var connection = app.infra.connectionFactory();
        var produtosBanco = new app.infra.ProdutoDAO(connection);
        var produto = produtosBanco.carrega(id,callback);
        if (produto) {
            produtosBanco.remove(produto,callback);
        }
        connection.end();
    });
}

