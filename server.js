const express = require('express')

const app = express();

const port = 5000;
const path = require('path')

const bodyparser = require('body-parser')

const appointmentRoute = require('./routes/appointment')
//Body Parsing 
app.use(bodyparser.json())

//Middleware
app.use((req,res,next) =>{
    console.log(`${new Date().toString()} => ${req.originalUrl}`, req.body)
    next()

}) 
app.use(appointmentRoute)
app.use(express.static('public'))



app.get('/api/customers',(req, res) => {
    const customers = [
        {id:1, firstName:'John', lastName: 'Doe'},
        {id:2, firstName:'Mary', lastName: 'Swartskin'},
        {id:3, firstName:'Smith', lastName: 'Smith'}
    ];
    res.json(customers)
})

app.get('/api/custom',(req,res) => {
    res.json({msg:'Success'})
})

app.get('/api/error', (req, res)=>{
    throw new Error('This is a forced error')
})


//Handler for 404
app.use((req, res, next) => {
    res.status(404).send('We think you are lost')
}

)

//Handler for 500
app.use((err, req, res, next) => {
    console.log(`You faced an error ${err.stack}`)
    res.sendFile(path.join(__dirname, 'public/500.html'))
})

app.listen(port, ()=> console.log(`Express  started on ${port}`));
