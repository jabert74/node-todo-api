/*const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017', (err, client) => {
    if(err){
        return console.log('Unable connect to MongoDB');
    }
    console.log('Connected to MongoDB');

    const db = client.db('TodoApp');



/!*    db.collection('Users').insertOne({
        _id: 123,
        name: 'John',
        age: 24,
        location: 'Tehran'
    },(err, result) => {
        if(err)
            return console.log('Unable to insert user', err);
        console.log(JSON.stringify(result.ops, undefined, 2));
    });*!/


    db.collection('Users').insertOne({
        name: 'John',
        age: 24,
        location: 'Tehran'
    },(err, result) => {
        if(err)
            return console.log('Unable to insert user', err);
        console.log(result.ops[0]._id.getTimestamp());
    });


    client.close();
});*/





/*
var user = {name: 'John', age: 28};
var {name} = user;
console.log(name);*/





const {MongoClient, ObjectID} = require('mongodb');
var obj = new ObjectID(); // only for knowledge
console.log(obj);

MongoClient.connect('mongodb://localhost:27017', (err, client) => {
    if(err){
        return console.log('Unable connect to MongoDB');
    }
    console.log('Connected to MongoDB');

    const db = client.db('TodoApp');



    client.close();
});