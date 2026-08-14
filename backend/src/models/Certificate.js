const mongoose = require('mongoose');

const certificateSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    issuer: {
      type: String,
      required: true,
    },
    year: {
      type: String,
      required: true,
    },
    credentialUrl: {
      type: String,
    },
    image: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Certificate', certificateSchema);
