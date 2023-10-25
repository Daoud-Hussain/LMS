var mongoose = require('mongoose');

var adminSchema = new mongoose.Schema({
    name: {
        type: string,
        required: true
    }
});

module.export = mongoose.model('Admin', adminSchema);