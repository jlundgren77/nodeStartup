var mongoose = require('mongoose');

var TaskSchema = new mongoose.Schema(
  {
    description: {
      type: String,
      required: true,
      trim: true,
      validate: {
        validator: function(value) {
          return value.length > 3;
        },
        message: props => `${props.value} is not long enough`
      }
    },
    completed: {
      type: Boolean,
      default: false
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User'
    }
  },
  {
    timestamps: true
  }
);

var Task = mongoose.model('Task', TaskSchema);

module.exports = Task;
