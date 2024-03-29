import React, { useState, useEffect } from 'react';
import axios from "axios";
import { fetchQuizByCourseID } from '../../services/DashboardService';
import InputLabel from '@mui/material/InputLabel';
import Select from "react-select";
// import html2pdf from 'html2pdf.js';
// import ReactDOMServer from 'react-dom/server';
import { useNavigate } from 'react-router-dom';

import LoadingSpinner from '../../components/Loading/LoadingSpinner';
import { saveReportAndScore } from '../../services/DashboardService';


const TraineeSubmission = ({trainee, courseId}) => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [isReqCollapsed, setReqIsCollapsed] = useState(true);
  const [isInstCollapsed, setInstIsCollapsed] = useState(true);
  const [isEvaluationComplete, setEvaluation] = useState(false);
  const [isEvaluationCollapsed, setEvaluationCollapsed] = useState(true);
  const [evalutaionAI, setevalutaionAI] = useState('');
  const [selectedQuiz, setSelectedQuiz] = useState(null);
  const [score, setScore] = useState({value: 'Set Score', label: 'Set Score'});
  const navigate = useNavigate();
  // const dummyCourse = '64a768a28c0b52e60969e1c5'
  const [loading, setLoading] = useState(false);
  // let [obj, setObj] = useState({ choices: [] });
  const [payload, setPayLoad] = useState({
        prompt: "",
        max_tokens: 200,
        temperature: 0.1,
        n: 1,
        model: "text-davinci-003"
    });
  
  useEffect(() => {
    const fetchData = async () => {
        try {
            if (courseId) {
                console.log(courseId)
                const quizData = await fetchQuizByCourseID(courseId);
                setSelectedQuiz(quizData);
            }
        } catch (error) {
            console.error('Error fetching course:', error);
        }
    };
    fetchData();
},  [courseId]);

  const handleChange = (event) => {
    console.log(event)
    setScore(event.value);
  };

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };
  const toggleReqCollapse = () => {
    setReqIsCollapsed(!isReqCollapsed);
  };
  const toggleInstCollapse = () => {
    setInstIsCollapsed(!isInstCollapsed);
  };
  const toggleEvalCollapse = () => {
    setEvaluationCollapsed(!isEvaluationCollapsed);
  };
  
  function quizAnswer(){
    const course = trainee.assigned_training_programs.find(
        (course) => course.course_id === courseId
    );
    console.log('abc')
    console.log(courseId)
    return course.quiz_answer || null;
  }
  const scores = ['Select Score', '10', '20', '30', '40', '50', '60', '70', '80', '90', '100'];

  const options = scores.map((number) => ({
    value: number,
    label: number
  }));

  const handleGoBack = () => {
    navigate(-1);
  };
  
const handleopenAI = () => {
    const promptTemplate = `
    You are a code reviewer tasked with evaluating the following code snippet for a quiz application. Please assess the code based on the following categories:

    Completeness: Check if the code fully implements the quiz functionality, including the ability to accept quiz questions, store answers, and provide feedback to users.

    Syntax and Structure: Evaluate the code for proper syntax, adherence to coding best practices, and maintainability. Look for any potential bugs or errors that might arise due to incorrect code structure.

    Coding Style: Examine the code for consistency in coding style, variable naming conventions, and readability. Comment on any improvements that could enhance the code's clarity.

    Documentation: Assess the code's documentation and comments. Comment on whether the code is well-documented, providing sufficient explanations for its functions and logic.

    Please provide a detailed evaluation in 3-4 paragraphs, covering each of these categories. Your feedback will help the developers improve the code for a better quiz application.

    The code snippet for evaluation is as follows:

    Problem: ${selectedQuiz.problem}
    
    Answer: ${quizAnswer()}
  `;

  setPayLoad({
    ...payload,
    prompt: promptTemplate
  });
  
  callOpenAi({
    ...payload,
    prompt: promptTemplate,
  });
}
 

function callOpenAi(modifiedPayload){
    setLoading(true);
    const apiKey = process.env.REACT_APP_OPEN_AI_SECRET
    axios({
      method: "POST",
      url: "https://api.openai.com/v1/completions",
      data: modifiedPayload,
      headers: {
        "Content-Type": "application/json",
        Authorization:
          `Bearer ${apiKey}` 
      }
    })
    .then((res) => {
      responseHandler(res);
    })
    .catch((e) => {
      setLoading(false);
      triggerFailSafe(); // use only for demo, only if there is some problem with open AI at the time of demo. 
    });
  };

  const triggerFailSafe = () => {
    const failSafeForDemo = ` Completeness: This code snippet appears to be complete in terms of implementing the necessary classes and methods to achieve the desired functionality. It allows users to retrieve a list of blog posts and add new posts, with each post having a title, content, and publication date. 

Syntax and Structure: The code is syntactically correct and follows coding best practices. It is also well-structured and organized, making it easy to read and maintain. There are no obvious bugs or errors that could arise due to incorrect code structure.

Coding Style: The code is consistent in terms of coding style, variable naming conventions, and readability. The code is also well-commented, providing sufficient explanations for its functions and logic.

Documentation: The code is well-documented, providing clear explanations for its functions and logic. The comments are concise and provide enough information to understand the code. However, it would be beneficial to add more comments to further explain the code`

    setevalutaionAI(failSafeForDemo)
    setEvaluation(true)
    setLoading(false);
  }

  const responseHandler = (res) => {
    if (res.status === 200) {
      // setObj(res.data);
      setevalutaionAI(res.data.choices[0].text)
      setEvaluation(true)
      setLoading(false);
    }
  };
  const sendReport = () => {
    if (score !== 'Select Score') {
      const parsedInt = parseInt(score);
      if (parsedInt) {
        saveReportAndScore(trainee._id, courseId, parsedInt, evalutaionAI)
        .then((data) => {
          console.log("Score and report saved successfully:", data);
          handleGoBack();
        })
        .catch((error) => {
          console.error("Error saving score and report:", error);
      });
    } else {
        console.error("Error saving score and report:");
    }}else {
      console.error("Please select a score before generating the report.");
    }
  }
  const customStyle = {
    dropdownIndicator: (base, state) => ({
      ...base,
      transition: "all .6s ease",
      transform: state.selectProps.menuIsOpen ? "rotate(180deg)" : null
    })
  };
  return (
    <div id='trainee-container'>
        <div className='trainee-submission-container'>
            <div className='expander-container' onClick={toggleCollapse}>
                <span>Employee Submission</span>
                <span className="arrow-icon">{!isCollapsed ? '▲' : '▼'}</span>
            </div>
            {isCollapsed ? null : (
                <div className={`expanded ${isCollapsed ? 'collapsed' : ''}`}>
                    <h1 className='quiz-title'>{selectedQuiz.name}</h1>
                    <span>Problem</span>
                    <span>{selectedQuiz.problem}</span>
                    <div className='expander' onClick={toggleReqCollapse}>
                        <span>Requirements</span>
                        <span className="arrow-icon">{!isReqCollapsed ? '▲' : '▼'}</span>
                    </div>
                    {isReqCollapsed ? null : 
                        (
                        <div className={`content ${isReqCollapsed ? 'collapsed' : ''}`}>
                            <p>{selectedQuiz.requirements}</p>
                        </div>
                    )}
                    <div className='expander' onClick={toggleInstCollapse}>
                        <span>Instructions</span>
                        <span className="arrow-icon">{!isInstCollapsed ? '▲' : '▼'}</span>
                    </div>
                    {isInstCollapsed ? null : 
                        (
                        <div className={`content ${isInstCollapsed ? 'collapsed' : ''}`}>
                            <p>{selectedQuiz.instructions}</p>
                        </div>
                    )}
                    <div className='solution-container'>
                        <span>Solution</span>
                        <textarea
                                id="quiz-answer"
                                value={quizAnswer()}
                                readOnly
                                rows={20}
                                cols={80}
                        />
                    </div>
                </div>
            )}
        </div>
        { loading  ? (<LoadingSpinner message='Generating AI response' />) : (
            <>
            {!isEvaluationComplete ? null : (
                <div className='trainee-feedback-container'>
                    <div className='expander-container' onClick={toggleEvalCollapse}>
                        <span>Evaluation</span>
                        <span className="arrow-icon">{isEvaluationCollapsed ? '▲' : '▼'}</span>
                    </div>
                    {!isEvaluationCollapsed ? null : 
                        (
                        <div className={`expanded ${isEvaluationCollapsed ? 'collapsed' : ''}`}>
                            <textarea
                                id="quiz-answer"
                                value={evalutaionAI}
                                readOnly
                                rows={20}
                                cols={80}
                            />
                        </div>
                    )}
                    <div className='score-section'>
                      <InputLabel id="name-label">Score</InputLabel>
                        <Select
                            className='filter-select'
                            defaultValue={score ? { value: score.value, label: score.label } : null}
                            options={options}
                            openMenuOnFocus
                            onChange={handleChange}
                            styles={customStyle}
                        />
                </div>
                </div>
            )}
            </>
        )}
        <div className='generate-container'>
          {isEvaluationComplete ? 
            (
              <button className='generate-button' onClick={sendReport}>Generate report and send</button>
            ) :
            (
              <button className='generate-button' onClick={handleopenAI}>Evaluate Code</button>
            )  
          }
        </div>
    </div>
  )
}

export default TraineeSubmission
