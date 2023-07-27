let express = require('express');
let app = express();

const cats = [{
    title: 'cat 2',
    path: 'images/cat-1.jpeg',
    subTitle: 'About Cat 2',
    description: 'Description of Cat 2'
},
{
    title: 'cat 3',
    path: 'images/cat-2.jpeg',
    subTitle: 'About Cat 3',
    description: 'Description of Cat 3'
},
{
    title: 'cat 4',
    path: 'images/cat-3.jpeg',
    subTitle: 'About Cat 4',
    description: 'jah fdlkjasdhflkjsadhflkjshd lkjhfaslkdj hfkljsad hklfjha slkjdfhl kasjdhflkjasdhflkjas'
}];

app.set('view engine','ejs');
app.use(express.static(__dirname + '/')); 

app.get('/', function (req,res) {
    res.render('pages/index', {cats:cats});
});

let port = process.env.port || 3000;
app.listen(port, ()=>{
    console.log('express server started');
});
