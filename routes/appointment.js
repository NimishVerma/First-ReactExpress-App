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

router.get('/appointment',(req, res) => {
    // console.log(!req.query.id)
    if(!req.query.id && !req.query.client){
        // console.log(AppointmentModel.find())
        AppointmentModel.find({} , (err, appointments)=>{
            if(!err) return res.status(200).send({"count":appointments.length,"data":appointments})
            else{
                console.log(err)
                return res.status(400).send("INVALID")
            } })
    }
    else
    {
        let cl_input = req.query.client
        let phone_input = req.query.phone
        
        // console.log(phone_input)
        AppointmentModel.find(req.query, (err, appointments)=>{
            return res.status(200).send({"count":appointments.length,"data":appointments})
        })
    }
})

router.delete('/appointment', (req,res) => {
    if (!req.query.id){
        return res.status(400).send("Missing URL Parameter")
    }
    AppointmentModel.findByIdAndDelete(req.query.id , (err,data)=>{
        // console.log(err==null)
        // console.log(data)
        if(err==null && data!=null) {return res.status(200).send("SUCCESSFULLY DELETED")}
        else if(err==null && data==null) {
            console.log("HERE")
            return res.status(400).send("Object already deleted")}
        else{
            console.log(err)
            return res.status(500).send("Some error occured")}
    })
})
module.exports = router