let AppointmentModel  = require('../models/appointment.model')
let express = require('express')
let router = express.Router()

//Create a new appointment
router.post('/appointment', (req, res) => {
    
    if(!req.body){
        return res.status(400).send(`Request Body is missing`)
    }

    // let user = {

    // }
    let model = new AppointmentModel(req.body)
    model.save()
    .then(doc=>{
        if(!doc || doc.length == 0){
            return res.status(500).send(doc)

        }
        return res.status(201).send(doc)
    })
    .catch(err => {
        res.status(500).json(err)

    })
})

module.exports = router