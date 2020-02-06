var mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
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
