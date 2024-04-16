const express = require('express');
const app = express();
const cors = require('cors');

const port = 3001;
const host = 'localhost';
const mongoose = require('mongoose');
const router = require('./router');

app.use(cors()); //cors origin unblocking(cross origine resoures sharing)

app.use(express.json());

const uri = 'mongodb+srv://Gihan:Gihan1234@cluster0.bvhjy3u.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

const connect = async () => {
    try {
        await mongoose.connect(uri);
        console.log('connected to mongoDB');
    } catch (error) {
        console.log('mongoDB error: ',error);
        
    }
};

connect();

//call back function
const server = app.listen(port,host, () => {
    console.log(`Node server is listing to ${server.address().port}`) //check actually working sever?
    
});

app.use('/api',router);