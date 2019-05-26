const mongoose= require('mongoose')

const server = 'localhost:27017'
const database = 'appointmentSetter'
const user = ''
const password = ''

mongoose.connect(`mongodb://localhost:27017/${database}`)


let AppointmentSchema = new mongoose.Schema({
    client: {
        type: String,
        required: true
    } ,
    phone : String,
    time: Date,

}, {
    timestamps:true
})


module.exports = mongoose.model('Appointment',AppointmentSchema)
