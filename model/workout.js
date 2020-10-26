const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const WorkoutSchema = new Schema(
  {
    day: {
      type: Date,
      default: Date.now(),
    },
    exercises: [
      {
        type: {
          type: String,
          trim: true,
          required: "Workout type is required, please enter an exercise type.",
        },
        name: {
          type: String,
          trim: true,
          required: "Workout name is required, please enter an exercise type.",
        },
        duration: {
          type: Number,
          required: "Please enter the workout duration in minutes.",
        },
        distance: {
          type: Number,
        },
        weight: {
          type: Number,
        },
        sets: {
          type: Number,
        },
        reps: {
          type: Number,
        },
      },
    ],
    // totalDuration: {
    //   type: Number,
    // },
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

WorkoutSchema.virtual("totalDuration").get(function () {
  return this.exercises.reduce((total, exercise) => {
    return total + exercise.duration;
  }, 0);
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
