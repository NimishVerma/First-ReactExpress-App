const mongoose= require('mongoose')

const server = 'localhost:27017'
const database = 'appointmentSetter'
const user = ''
const password = ''

mongoose.connect(`mongodb://localhost:27017/${database}`)

const moment = require('moment-timezone');
const dateIndia = moment.tz(Date.now(), "Asia/Kolkata");

let AppointmentSchema = new mongoose.Schema({
    client: {
        type: String,
        required: true
    } ,
    phone : String,
    time: {
        type: Date,
        default: dateIndia
    }
}, {
    timestamps:true
})


module.exports = mongoose.model('Appointment',AppointmentSchema)
