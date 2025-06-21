const mongoose=require('mongoose');
const landSchema = new mongoose.Schema({
  name: {
    type: String,
    default: "My Land",
  },
  ph: {
    type: Number,
    required: true,
  },
  fertility: {
    type: String,
    required: true,
  },
  temperature: {
    type: Number,
    required: true,
  },
  rainfall: {
    type: Number,
    required: true,
  },
  ownerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  suggestions: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Suggestion",
    },
  ],
});
module.exports=mongoose.model('Land',landSchema);