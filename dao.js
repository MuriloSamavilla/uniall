const mongoose = require('mongoose')
const trabalhos = require('./model')

module.exports = {

	salvar(dados, callback){
		mongoose.connect('mongodb://localhost:27017/meustrabalhos')

		let t = new trabalhos(dados)
		t.save(() =>  {
			mongoose.disconnect()
			callback()
		})
	},

	listar(callback){
		mongoose.connect('mongodb://localhost:27017/meustrabalhos')

		trabalhos.find( (err, res) => {
			mongoose.disconnect()
			callback(res)
		})
	}
}
