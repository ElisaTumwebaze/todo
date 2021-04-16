const express=require('express');
const app=express();

app.listen(3000, 'localhost',()=>{
    console.log('server created');

});
app.get('/todos',(req,res)=>{
const todos=['waking up','bathing','brushing'];
res.send(todos);
})