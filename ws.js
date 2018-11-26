const dao = require('./dao')

module.exports = function (app){

	app.route("/listar").get( (req,resp) =>{

		dao.listar( (result) => {
			resp.json(result)
		})

	})

	app.route("/salvar").post( (req,resp) =>{

		dao.salvar(req.body, () => {
			resp.send()
		})
	})
}
