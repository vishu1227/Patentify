const express=require('express');
const app=express();


app.use(express.static(__dirname+'public'));

app.set('view engine','ejs');

app.use('/',(req,res)=>{
    res.render('index.ejs');
})

const port=5000
app.listen(port,()=>{
    console.log(`Listning at the port: ${port}`)
})

