const mongoose = require('mongoose')


const studentSchema = new mongoose.Schema
({

    name: 
    {
        type: String,
        required: true
    },
    tech: 
    {
        type: String,
        required: true
    },
    sub: 
   {
        type: Boolean,
        required: true,
        default: false
    },
    branch: 
    {
         type: String,
         required: true,
    },
    section: 
    {
         type: String,
         required: true,
     }

})

module.exports = mongoose.model('Student',studentSchema)
