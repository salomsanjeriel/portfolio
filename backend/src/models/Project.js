const mongoose = require('mongoose');

const projectSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    technologies: {
      type: [String],
      required: true,
    },
    image: {
      type: String,
    },
    githubUrl: {
      type: String,
    },
    liveDemoUrl: {
      type: String,
    },
    contribution: {
      type: String,
      default: 'My Contribution — To be updated',
    },
    featured: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Project', projectSchema);
