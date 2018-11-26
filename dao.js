const mongoose = require('mongoose')
const Uniall = require('./model')

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/unica')

module.exports = {
	
	salvar(dados, callback){
	let t = new UniAll(dados)
		t.save(() =>  {
			mongoose.disconnect()
			callback()
		})
	},

	listar(callback){
		Trabalho.find( (err, res) => {
			mongoose.disconnect()
			callback(res)
		})
	}
}
