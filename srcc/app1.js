//serving static websites 
//const path = require('path')
const express = require('express')
const hbs =require('hbs')

const app = express()
//Defining Paths for express config
const publicDirectorypath = path.join(__dirname, '../publicc')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')//This paths is gonna get handlebars to the right directory 


//setup/configure handlebars engine and views location
app.set('view engine','hbs')//handlebar setup
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)


//setup static directory to serve 
app.use(express.static(publicDirectorypath))//it's a way to customize our server
//setting up a route 

//Now will tell express which templating engine we want to use 
//defining the views path 


app.get('',(req,res)=>{
   res.render('index',{
       "title": 'WeatherApp',
       "name": 'sneha'

   }) 
})
app.get('/about',(req,res)=>{
    res.render("about", {
      title: "About Me",
      name: "sneha",
    });
})
app.get('/help',(req,res)=>{
    res.render("help",{
        "title": "How can i help you ?",
        "name":"sneha"
    });
})//route handler

app.get('/help/*',(req,res)=>{
//res.send('Help article not found')
res.render('404',{
    title :'404',
    name : 'Sneha',
    errorMessage : 'help article not found'
})
})// generic 404 errors for 'help' document
app.get("*",(req,res)=>{
   //res.send('My 404 page')
   res.render('404',{
       title :"404",
       name : "Sneha",
       errorMessage : "Page not found"
   })
})//generic 404 errors
app.listen(3000, () => {
    //the process of starting up a server is an async . process though it'll happen almost instantly 
    console.log('Server is up on port 3000')//this will display as a useful piece of information while running the server 
    //this msg. will not be displayed to the user (in the web broowser)
})
//Publicc is the only directory setup to be exposed by the web server 
