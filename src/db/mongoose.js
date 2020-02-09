var mongoose = require('mongoose');

mongoose.connect(`mongodb://${process.env.MONGODB_URL}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
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
