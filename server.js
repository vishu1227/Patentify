const express=require('express');
const app=express();
const path=require('path')

app.use('/public',express.static(path.join(__dirname, 'public')));

app.set('view engine','ejs');

app.use('/',(req,res)=>{
    res.render('index.ejs');
})

const port=5000

app.listen(port,()=>{
    console.log(`Listning at the port: ${port}`)
})
