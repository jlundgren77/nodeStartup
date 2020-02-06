require('../src/db/mongoose');
const User = require('../src/models/user');

//5dea9c8848300f3e6aab9237

// User.findByIdAndUpdate('5deaa9ee6efeae5a42fe0aed', { age: 1 })
//   .then(user => {
//     console.log(user);
//     return User.countDocuments({ age: 1 });
//   })
//   .then(result => {
//     console.log(result);
//   })
//   .catch(e => {
//     console.log(e);
//   });

const updateAgeAndCount = async (id, age) => {
  const user = await User.findByIdAndUpdate(id, { age });
  const count = await User.countDocuments({ age });
  return count;
};

updateAgeAndCount('5deaa9ee6efeae5a42fe0aed', 22)
  .then(result => {
    console.log(result);
  })
  .catch(e => console.log(e));
