require('../src/db/mongoose');
const Task = require('../src/models/task');

// Task.findByIdAndRemove('5e0e5abb212ef83a52e2c692')
//   .then(task => {
//     console.log(task);
//     return Task.countDocuments({ completed: false });
//   })
//   .then(result => {
//     console.log(result);
//   })
//   .catch(e => console.log(e));

const deleteTaskAndCount = async id => {
  const task = await Task.findByIdAndRemove(id);
  const count = await Task.countDocuments({ completed: false });
  return count;
};

deleteTaskAndCount('5e0e45f8ee50f62f33bb43f1')
  .then(result => console.log(result))
  .catch(e => console.log(e));
