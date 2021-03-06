var keystone = require('keystone');

exports = module.exports = function(req, res) {
    var view = new keystone.View(req, res);
    var locals = res.locals;

    //set Locals
    locals.section = 'servicos';
    locals.filters = {
		servico: req.params.servico
	}
	locals.data = {
		servicos: []
	}
    //load Servicos
    //carrega os serviços
view.on('init', function(next){
    var q = keystone.list('Servico').model.findOne({
    slug: locals.filters.servico
    });

    q.exec(function(err,result){
        locals.data.servico = result;
        next(err);
    });
});


    view.render('servico');
}