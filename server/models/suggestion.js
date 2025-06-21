const mongoose = require("mongoose");

const suggestionSchema = new mongoose.Schema({
  crop: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  fertilizers: {
    type: [String], // Array of fertilizer names
    required: true,
  },
  pesticides: {
    type: [String], // Array of pesticide names
    required: true,
  },
  timeToGrow: {
    type: String, // e.g., "90 days", or "3 months"
    required: true,
  },
  bestSeason: {
    type: String, // e.g., "Kharif", "Rabi", "Summer", or months
    required: true,
  },
  land: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Land",
    required: true,
  },
});

module.exports = mongoose.model("Suggestion", suggestionSchema);
