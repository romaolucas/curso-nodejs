function ProdutoDAO(connection){
    this.connection = connection;
}

ProdutoDAO.prototype.lista = function(callback){
    this.connection.query('select * from livros',callback);
}

module.exports = function(){
    return ProdutoDAO;
}
