var mongoose = require('mongoose');

mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
  })
  .then(() => {
    console.log(
      'MongoDB successfully connected. Database URL:',
      process.env.MONGODB_URL
    );
  })
  .catch(error => {
    console.log('Error establishing MongoDB connection. Error:', error.message);
  });

// var task1 = new Task({
//   description: 'Get job right now, this morning          '
// });

// task1
//   .save()
//   .then(() => {
//     console.log(task1);
//   })
//   .catch(error => {
//     console.log(error);
//   });
