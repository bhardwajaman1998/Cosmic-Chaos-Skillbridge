const trainee = require('../models/Trainee');
// const training = require('../models/Training');
// Controller methods for trainee routes
const getAll = async (req, res) => {
  try {
    const data = await trainee.find();
    console.log(data)
    res.json(data);
  } catch (error) {
    console.error('Error fetching trainees:', error);
    res.status(500).json({ error: 'Server error' });
  }
};

const addTrainee = async (req, res) => {
  try {
    const { name, photo, department_id, email, phone_number, mentor, assigned_training_programs, achievements, progress, quiz_results, chart_data} = req.body;
    const trainee = new trainee({ name, photo, department_id, email, phone_number, mentor, assigned_training_programs, achievements, progress, quiz_results, chart_data});
    await trainee.save();
    res.json(trainee);
  } catch (error) {
    console.error('Error creating trainee:', error);
    res.status(500).json({ error: 'Server error' });
  }
};

const getTrainee = async (req, res) => {
  console.log("Inside function")
  try {
    const trainee_Id = req.params.traineeId;
    console.log(trainee_Id)
    const traineeId = await trainee.findById(trainee_Id);
    console.log(traineeId);
    if (!traineeId) {
      return res.status(404).json({ error: 'trainee not found' });
    }
    res.json(traineeId);
  } catch (error) {
    console.error('Error fetching trainee by ID:', error);
    res.status(500).json({ error: 'Server error' });
  }
};

const getTraineesByCourseId = async (req, res) => {
  const { courseId } = req.params;
  console.log(req.params)
  try {
    const trainees = await trainee.find({
      'assigned_training_programs.course_id': courseId
    });
    res.json(trainees);
  } catch (error) {
    console.error('Error fetching trainees by course id:', error);
    res.status(500).json({ error: 'Server error' });
  }
};

const assignMentor = async (req, res) => {
  try {
    const traineeId = req.params;
    const mentorId = req.body;
    if (!traineeId) {
      return res.status(404).json({ error: 'trainee not found' });
    }

    const mentor = await Mentor.findById(mentorId);
    if (!mentor) {
      return res.status(404).json({ error: 'Mentor not found' }); 
    }

    trainee.mentor = mentorId;
    await trainee.save();

    res.json(traineeId);
  } catch (error) {
    console.error('Error assigning mentor to trainee:', error);
    res.status(500).json({ error: 'Server error' });
  }
};

const assignTraining = async (req, res) => {
  try {
    const { trainingId } = req.params;
    const { traineeId } = req.body;

    const training = await training.findById(trainingId);
    if (!training) {
      return res.status(404).json({ error: 'Training not found' });
    }

    const trainee = await Trainee.findById(traineeId);
    if (!trainee) {
      return res.status(404).json({ error: 'Trainee not found' });
    }

    trainee.assigned_training_programs = trainingId;
    await trainee.save();

    res.json(trainee);
  } catch (error) {
    console.error('Error assigning training to trainee:', error);
    res.status(500).json({ error: 'Server error' });
  }
};


// const getAssignedCourses= async (req, res) => {
//   try {
//     const { traineeId, courseId } = req.params;

//     const traineeData = await trainee.findById(traineeId);
//     if (!traineeData) {
//       return res.status(404).json({ error: 'Trainee not found' });
//     }

//     const courses = traineeData.assigned_training_programs
//     if (courses.length < 1) {
//       return res.status(404).json({ error: 'Course not found' });
//     }
//     res.json(courses);
//   } catch (error) {
//     console.error('Error fetching course by ID:', error);
//     res.status(500).json({ error: 'Server error' });
//   }
// };

// const getAssignedCourses = async (req, res) => {
//   try {
//     const { traineeId } = req.params;

//     const traineeData = await trainee.findById(traineeId);
//     if (!traineeData) {
//       return res.status(404).json({ error: 'Trainee not found' });
//     }

//     const courses = traineeData.assigned_training_programs;
//     if (!courses || courses.length === 0) {
//       return res.status(404).json({ error: 'No assigned courses found for the trainee' });
//     }

//     res.json(courses);
//   } catch (error) {
//     console.error('Error fetching assigned courses:', error);
//     res.status(500).json({ error: 'Server error' });
//   }
// };
const getAssignedCourses = async (req, res) => {
  try {
    const { traineeId } = req.params;

    const traineeData = await trainee.findById(traineeId);
    if (!traineeData) {
      return res.status(404).json({ error: 'Trainee not found' });
    }

    const assignedCourses = traineeData.assigned_training_programs;
    if (assignedCourses.length < 1) {
      return res.status(404).json({ error: 'No assigned courses found for Trainee ID' });
    }

    res.json(assignedCourses);
  } catch (error) {
    console.error('Error fetching assigned courses:', error);
    res.status(500).json({ error: 'Server error' });
  }
};

// API endpoint to add score and report text to the data model
const assignScoreReport = async (req, res) => {
  const { traineeId, courseId, score, report } = req.body;
  console.log(req.body)
  try {
    // Find the trainee by ID
    const currentTrainee = await trainee.findById(traineeId);
    if (!currentTrainee) {
      return res.status(404).json({ message: 'Trainee not found.' });
    }
    console.log(currentTrainee)
    // Find the assigned training program by course ID
    const assignedTrainingProgram = currentTrainee.assigned_training_programs.find(
      (program) => program.course_id.toString() === courseId
    );
    console.log(assignedTrainingProgram)
    if (!assignedTrainingProgram) {
      return res.status(404).json({ message: 'Assigned training program not found.' });
    }

    // Update the score and report text
    assignedTrainingProgram.score = score;
    assignedTrainingProgram.report = report;
    assignedTrainingProgram.evaluation = 1;
    // Save the changes to the database
    await currentTrainee.save();
    console.log(res)
    return res.status(200).json({ message: 'Score and report added successfully.' });
  } catch (error) {
    return res.status(500).json({ message: 'Error occurred while adding score and report.', error });
  }
};

module.exports = {
    getAll,
    addTrainee,
    getTrainee,
    getTraineesByCourseId,
    assignMentor,
    assignTraining,
    getAssignedCourses,
    assignScoreReport
};