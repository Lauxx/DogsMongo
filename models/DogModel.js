var mongoose = require('mongoose');

var dogSchema = new mongoose.Schema ({
	name: { type: String, required: true },
	breed: { type: String, required: true },
	badBreath: { type: Boolean, required: true },
	legs: { type: Number, required: true},
	favToys : [{type: mongoose.Schema.Types.ObjectId, ref: 'Toys'}]
});

module.exports = mongoose.model('Dogs', dogSchema);