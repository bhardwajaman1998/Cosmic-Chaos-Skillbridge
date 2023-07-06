import axios from 'axios'

const API_BASE_URL = 'http://localhost:3000';


// Example API service for fetching data
export const fetchAllCourses = async () => {
    try {
        const response = await fetch(`${API_BASE_URL}/course/get_all_courses`);
        const data = await response.json();
        return data;
      } catch (error) {
        console.error('Error fetching courses:', error);
        throw error;
      }
    };

export const fetchAllTrainees = async () => {
    try {
        const response = await fetch(`${API_BASE_URL}/trainee/get_all_trainees`);
        const data = await response.json();
        return data;
      } catch (error) {
        console.error('Error fetching trainees:', error);
        throw error;
      }
};
