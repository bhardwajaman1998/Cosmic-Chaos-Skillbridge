const dotenv = require("dotenv");
dotenv.config();
const API_BASE_URL = process.env.REACT_APP_LIVE_API_BASE_URL

export const fetchAllCourses = async () => {
    try {
        console.log(API_BASE_URL)
        const token = localStorage.getItem('token');
        const path = `${API_BASE_URL}/course/get_all_courses`
        const response = await fetch(path, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        // console.log(response.statusText)
        if (!response.ok) {
          const errorResponse = {
            code: response.status,
            message: response.statusText,
          };
          throw new Error(JSON.stringify(errorResponse));
        }
        const data = await response.json();
        return data;
      } catch (error) {
        console.log('===========>')
        console.error('Error fetching courses:', error);
        console.log('===========>')
        throw error;
      }
    };

export const fetchAllTrainees = async () => {
    try {
      console.log('abc')
      const token = localStorage.getItem('token');
        const path = `${API_BASE_URL}/trainee/get_all_trainees`
        console.log(path)
        const response = await fetch(path, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (!response.ok) {
          const errorResponse = {
            code: response.status,
            message: response.statusText,
          };
          throw new Error(JSON.stringify(errorResponse));
        }
        const data = await response.json();
        console.log(path)
        // console.log(data)
        return data;
      } catch (error) {
        console.error('Error fetching trainees:', error);
        throw error;
      }
};

export const fetchTraineeByID = async (traineeId) => {
  try {
    const token = localStorage.getItem('token');
      const path = `${API_BASE_URL}/trainee/get_trainee/${traineeId}`
      const response = await fetch(path, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (!response.ok) {
        const errorResponse = {
          code: response.status,
          message: response.statusText,
        };
        throw new Error(JSON.stringify(errorResponse));
      }
      const data = await response.json();
      console.log(path)
      // console.log(data)
      return data;
    } catch (error) {
      console.error('Error fetching courses:', error);
      throw error;
    }
  };


export const fetchTraineesByCourseId = async (courseId) => {
  try {
    const token = localStorage.getItem('token');
    const path = `${API_BASE_URL}/trainee/trainees/course/${courseId}`
    const response = await fetch(path, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (!response.ok) {
      const errorResponse = {
        code: response.status,
        message: response.statusText,
      };
      throw new Error(JSON.stringify(errorResponse));
    }
    const data = await response.json();
    console.log(path)
    // console.log(data)
    return data;
  } catch (error) {
    console.error('Error fetching trainees:', error);
    throw error;
  }
};

export const fetchAssignedCourses = async (traineeId) => {
  try {
    const token = localStorage.getItem('token');
    const path = `${API_BASE_URL}/trainee/trainees/${traineeId}/courses`;
    const response = await fetch(path, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (!response.ok) {
      const errorResponse = {
        code: response.status,
        message: response.statusText,
      };
      throw new Error(JSON.stringify(errorResponse));
    }
    const data = await response.json();
    console.log(path)
    // console.log(data)
    return data;
  } catch (error) {
    console.error('Error fetching assigned courses:', error);
    throw error;
  }
};

export const fetchQuizByCourseID = async (courseId) => {
  try {
    const token = localStorage.getItem('token');
      const path = `${API_BASE_URL}/quiz/get_quiz_courseId/${courseId}`
      const response = await fetch(path, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (!response.ok) {
        const errorResponse = {
          code: response.status,
          message: response.statusText,
        };
        throw new Error(JSON.stringify(errorResponse));
      }
      const data = await response.json();
      console.log(path)
      console.log(data)
      return data;
    } catch (error) {
      console.error('Error fetching courses:', error);
      throw error;
    }
  };

  export const saveReportAndScore = async (traineeId, courseId, score, report) => {
    try {
      const token = localStorage.getItem('token');
      const path = `${API_BASE_URL}/trainee/assign_score_report`;
      const response = await fetch(path, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
           Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ traineeId, courseId, score, report }),
      });
      if (!response.ok) {
        const errorResponse = {
          code: response.status,
          message: response.statusText,
        };
        throw new Error(JSON.stringify(errorResponse));
      }
      const data = await response.json();
      console.log(path);
      console.log((traineeId, courseId, score, report))
      console.log(data);
      return data;
    } catch (error) {
      console.error('Error saving score and report:', error);
      throw error;
    }
  };