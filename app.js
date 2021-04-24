const express =require('express');
const app=express();
const path =require ('path');
// const mongoose=require('mongoose');
// const fs=require("fs");
const port =5000;
app.use('/static',express.static('static'));
app.use(express.urlencoded());


// mongoose.connect('mongodb://localhost/nodekb');
// let db=mongoose.connection;
// db.once('open',()=>{
//   console.log('connected to thr mongoose data base ');
// })


// db.on('error',(err)=>{
//   console.log(err);
// })
app.set('view engine','pug');
app.set('views',path.join(__dirname,'views'));


// let Article=require('./model/article');
// app.get('/',(req,res)=>{
//   res.render('index',{
//     title: 'nahs'
//   })
// });
 app.get('/',(req,res)=>{
   const con="this is nashara naseem"
   const paramas ={'title':"pug is the link bt bach","content":con}
   res.status(200).render('home.pug',paramas);

   });
   app.get('/contact',(req,res)=>{
    const con="this is nashara naseem"
    const paramas ={'title':"pug is the link bt bach","content":con}
    res.status(200).render('contact.pug',paramas);
    });
//   let article=[
//     {
//       id:1,
//       title:'article now ',
//       author:'nash',
//       body:'this is body',
//     },
//     {
//       id:2,
//       title:'article now ',
//       author:'nash2',
//       body:'this is body',
//     },
//     {
//       id:3,
//       title:'article now ',
//       author:'nash3',
//       body:'this is body',
//     },
//   ]
  
// });

app.listen(5000,()=>{
  console.log("this is your port 5000...")
});
// app.get('layout',(req,res)=>{
//   res.render('layout',{
//     title: 'add aricles'
//   })
// })
