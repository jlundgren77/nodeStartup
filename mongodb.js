//CRUD

// const mongodb = require('mongodb');

// const MongoClient = mongodb.MongoClient;

// const ObjectID = mongodb.ObjectID;

const { MongoClient, ObjectID } = require('mongodb');

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (error, client) => {
    if (error) {
      return console.log('Unable to connect to database');
    }
    const db = client.db(databaseName);
    db.collection('tasks')
      .insertOne({
        description: 'Take out Trash',
        completed: false
      })
      .then(result => {
        console.log(result.result);
      })
      .catch(error => console.log(error));
    // db.collection('users')
    //   .updateOne(
    //     {
    //       _id: new ObjectID('5de5520cc0d7ee3b20d43664')
    //     },
    //     {
    //       $inc: {
    //         age: 1
    //       }
    //     }
    //   )
    //   .then(result => {
    //     console.log(result);
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });
    db.collection('tasks')
      .updateMany(
        {
          completed: true
        },
        {
          $set: {
            completed: true
          }
        }
      )
      .then(result => {
        console.log(result.modifiedCount);
      })
      .catch(error => {
        console.log(error);
      });
  }
);
