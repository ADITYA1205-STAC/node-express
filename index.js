const joi = require('joi');
const logger = require('./logger');
const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(function(req,res,next){
    console.log('logging...');
    next();
});

app.use(function(req,res,next){
    console.log('authenticating...');
    next();
});


const courses = [
    {id:1,name: 'course1'},
    {id:2,name: 'course2'},
    {id:3,name: 'course3'},
];

app.get('/',(req,res) => { 
    res.send('Hello World');
});
const middlewareFunction = (req, res, next) => {
    try {
        console.log('We are in middleware....');
        next();
    } catch (err) {
        next(err);
    }
}
app.post('/api/course', middlewareFunction, (req,res)=>{
    const {error} = validateCourse(req.body);
    if(error) return  res.status(400).send(err.details[0].message);
    console.log('URL ENCODED :: ', req.body);
    const course = {
        id: courses.length +1,
        name: req.body.name
    };
    courses.push(course);
    res.send(course);
});

app.put('/api/courses/:id',(req,res) => {
    const course = course.find(c => c.id === parseInt(req.params.id));
    if (!course)  return res.status(404).send('the course with given ID was not found.')

const {error}  = validateCouse(req.body);
if(error) return res.status(400).send(result.error.details[0].message);

  course.name = req.body.name;
  res.send(course);
});

app.delete('/api/course/:id',(req,res)=>{
    const course = courses.find(c =>c.id === parseInt(req.params.id));
    if(!course) return res.status(404).send('the course with the given Id was')

    const index = courses.indexOf(course);
    courses.splice(index,1);

    res.send(course);
});

app.get('/api/courses/:id',(req,res)=>{
    const course = courses.find(c =>c.id === parseInt(req.params.id));
    if(!course) res.status(404).send('the course with the given Id was');
    res.send(course);
});

app.listen(1212, () => console.log('Listening to 1212'));