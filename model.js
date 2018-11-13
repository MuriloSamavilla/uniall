const mongoose = require('mongoose')

const schema = new mongoose.Schema({
	user : String,
	senha : String,
	nome: String,
	idade: Number,
	telefone: Number,
	cpf: Number,
	email: String,
	dtnascimento : Date,
	oferecer: String,
	necessita: String,
	animal: Number,
	pergunta1 : Number,
	pergunta2 : Number,
	pergunta3 : Number,
	pergunta4 : Number,
	pergunta5 : Number,
	pergunta6 : Number,
	pergunta7 : Number,
	pergunta8 : Number,
	pergunta9 : Number,
	pergunta10 : Number,

})

module.exports = mongoose.model("Uniall", schema)
