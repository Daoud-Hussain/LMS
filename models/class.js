var mongoose = require('mongoose');

var classSchema = new mongoose.Schema({
    name: {
        type: string,
        required: true
    }, 
    teacher: {
        type: mongoose.Types.ObjectId,
        ref: 'Teacher'
    }, 
    students: {
        type: [{
            sid: {
                type: mongoose.Types.ObjectId,
                ref: 'Student'
            }
        }]
    }
});

module.export = mongoose.model('Class', classSchema);