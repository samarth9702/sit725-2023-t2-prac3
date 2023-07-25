let express = require('express');
let app = express();
let port = process.env.port || 3000;

app.use(express.static(__dirname + '/')); 

app.get('/', (req,res) => {
    res.render('index.html');
});

app.get('/addTwoNumbers',(req,res)=>{ //change this into post call
    let statusCode = 200;
    let successMessage = 'Successful!';
    let num1 = req.query.num1;
    let num2 = req.query.num2;
    let result = parseFloat(num1) + parseInt(num2);
    let payLoad = {message: successMessage, code: statusCode, data: result};
     
    res.json(payLoad);
});

app.get('/subTwoNumbers',(req,res)=>{
    let statusCode = 200;
    let successMessage = 'Successful!';
    let num1 = req.query.num1;
    let num2 = req.query.num2;
    let result = parseFloat(num1) - parseInt(num2);
    let payLoad = {message: successMessage, code: statusCode, data: result};
     
    res.json(payLoad);
});

app.get('/mulTwoNumbers',(req,res)=>{
    let statusCode = 200;
    let successMessage = 'Successful!';
    let num1 = req.query.num1;
    let num2 = req.query.num2;
    let result = parseFloat(num1) * parseInt(num2);
    let payLoad = {message: successMessage, code: statusCode, data: result};
     
    res.json(payLoad);
});

app.get('/divTwoNumbers',(req,res)=>{
    let statusCode = 200;
    let successMessage = 'Successful!';
    let num1 = req.query.num1;
    let num2 = req.query.num2;
    let result = parseFloat(num1) / parseInt(num2);
    let payLoad = {message: successMessage, code: statusCode, data: result};
     
    res.json(payLoad);
});


app.listen(port,()=>{
    console.log('Server Started');
});
