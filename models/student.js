var mongoose = require('mongoose');

var studentSchema = new mongoose.Schema({
    name: {
        type: string,
        required: true
    }, 
    rollno: {
        type: string,
        required: true
    }
});

module.export = mongoose.model('Student', studentSchema);