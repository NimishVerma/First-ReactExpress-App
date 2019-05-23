const express = require('express')

const app = express();

const port = 5000;

app.get('/api/customers',(req, res) => {
    const customers = [
        {id:1, firstName:'John', lastName: 'Doe'},
        {id:2, firstName:'Mary', lastName: 'Swartskin'},
        {id:3, firstName:'Smith', lastName: 'Smith'}
    ];
    res.json(customers)
})
app.listen(port, ()=> console.log(`Express  started on ${port}`));
