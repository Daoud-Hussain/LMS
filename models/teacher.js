var mongoose = require('mongoose');

var teacherSchema = new mongoose.Schema({
    name: {
        type: string,
        required: true
    }, 
    designation: {
        type: string,
        required: true
    }
});

module.export = mongoose.model('Teacher', teacherSchema);