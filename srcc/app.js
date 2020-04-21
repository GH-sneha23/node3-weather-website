const path=require('path')//loading core node  modules 
//Node scripts
//Here basically we are going to explore the web sever setup process
//complex directory structures , stay organised 
//load express , configure it to serve something and then  we r gonna start the server 
 const express = require('express')
 console.log(__dirname)//path manipulation
 //console.log(path.join(__dirname, '../publicc'))//both filename and dirname are variables 
//How do we setup a server to send a response when someone tries to access some resource


 //here express is actually a function as oppposed to something like an object and we call it to create a new express application 
 const app = express()//variable to store express app , express() does not take any arguments 
 //we can configure our serve by using various functions provided on the application itself
//for this app , imagine we own a domain app.com
//app.com/help-route , may be we want to visit a homepage or some other page 
//app.com/about
//now , let's start or up the server 
const publicDirectorypath =path.join(__dirname , '../publicc')
app.use(express.static(publicDirectorypath))//it's a way to customize our server
/*app.get("", (req, res) => {
  //we can do various things like read data from a database or create some HTML and use various methods on response to actually send a response back
  res.send("<h1>Hello Express!</h1>");//HTML code

});*/
app.get('/help',(req,res)=>{
//console.log('Help page!')
//res.send("Help page! ")
/*res.send({
    name:' Sneha', 
    Age : 21
})//express is going to detect we have provided an object and it is automatically going to stringify the json and it will send to the requester correctly  
*/
res.send([{
    name:'sneha'
},{
    name : 'Anshu'
}])

}) 
app.get('/about',(req,res)=>{
res.send('About')
}
);
//Frontend of our application will get the weather from the backend 
app.get('/weather',(req,res)=>{
    res.send('Your Weather!')
})
app.listen(3000,()=>{
    //the process of strating up a server is an async . process though it'll happen almost instantly 
    console.log('Server is up on port 3000')//this will display as a useful piece of information while running the server 
    //this msg. will not be displayed to the user (in the web broowser)
})
//Port 3000 is the common development port , it's not the default port

//use ctrl+c to stop the server 
