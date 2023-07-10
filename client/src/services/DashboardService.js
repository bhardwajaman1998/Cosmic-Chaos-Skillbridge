import axios from 'axios'

const API_BASE_URL = 'http://localhost:3000';


// Example API service for fetching data
export const fetchAllCourses = async () => {
    try {
        const path = `${API_BASE_URL}/course/get_all_courses`
        const response = await fetch(path);
        const data = await response.json();
        // console.log(path)
        // console.log(data)
        return data;
      } catch (error) {
        console.error('Error fetching courses:', error);
        throw error;
      }
    };

export const fetchAllTrainees = async () => {
    try {
        const path = `${API_BASE_URL}/trainee/get_all_trainees`
        const response = await fetch(path);
        const data = await response.json();
        // console.log(path)
        // console.log(data)
        return data;
      } catch (error) {
        console.error('Error fetching trainees:', error);
        throw error;
      }
};

export const fetchTraineesByCourseId = async (courseId) => {
  try {
    const path = `${API_BASE_URL}/trainee/trainees/course/${courseId}`
    const response = await fetch(path);
    const data = await response.json();
    // console.log(path)
    // console.log(data)
    return data;
  } catch (error) {
    console.error('Error fetching trainees:', error);
    throw error;
  }
};