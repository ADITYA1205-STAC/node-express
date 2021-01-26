
// const log = require('./log'); 


// log('message');

// const os = require('os');

// const totalMemory = os.totalmem();
// const freeMemory  = os.freemem();

// console.log(`Total Memory: ${totalMemory}`);
// console.log(`free Memory: ${freeMemory}`);


// const fs = require('fs');


// fs.readdir('./',function(err,files){
//     if(err) console.log('Error',err);
//     else console.log('Result',files);
// });

// const EventEmmiter = require('events');

// const Logger = require('./logger');
// const logger = new Logger();

// logger.on('messagelogged',(arg)=>{
//     console.log('listener called',arg);
// });

// logger.log('message');

// const { Socket } = require('dgram');
// const http = require('http');

// const server = http.createServer();

// server.on('connection',(Socket)=>{
//     console.log('New connection...');
// });
// server.on('error', () => {

// })
// server.listen(1212);

// console.log('listening on port 1212...');

// const_ = require('underscore');

// const result = _.contains([1,2,3],2);
// console.log(result) ;

// const http = require('http');

// const server = http.createServer((req,res)=>{
//     if(req.url=='/'){
//         res.write('Hello World');
//         res.end();
//     }

//     if(req.url ==='./api/course') {
//         res.write(json.stringify(1,2,3));
//         res.end();
//     }
// });

const express = require('express');
const app = express();

app.get('/',(req,res) => { 
    res.send('Hello World');
});

app.get('/api/courses/:id',(req,res) => { 
    res.send([1,2,3]);
});

app.get('/api/post/:year/:month',(req,res) => { 
    res.send(req.params.year);
})

const port = process.env.PORT ||1212;
app.listen(port,()=>console.log(`listening on port ${port}...`));


