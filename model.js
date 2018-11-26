const mongoose = require('mongoose')

const schema = new mongoose.Schema({
	titulo : String,
	peso : String,
	data: Date,

})

module.exports = mongoose.model("trabalhos", schema)
