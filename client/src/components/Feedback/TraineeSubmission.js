import React, { useState, useEffect } from 'react';
import axios from "axios";
import { fetchQuizByCourseID } from '../../services/DashboardService';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import LoadingSpinner from '../../components/Loading/LoadingSpinner';

const TraineeSubmission = ({trainee, courseId}) => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [isReqCollapsed, setReqIsCollapsed] = useState(true);
  const [isInstCollapsed, setInstIsCollapsed] = useState(true);
  const [isEvaluationComplete, setEvaluation] = useState(true);
  const [isEvaluationCollapsed, setEvaluationCollapsed] = useState(true);
  const [evalutaionAI, setevalutaionAI] = useState('');
  const [selectedQuiz, setSelectedQuiz] = useState(null);
  const [score, setScore] = React.useState('0');

  const dummyCourse = '64a768a28c0b52e60969e1c5'
  const [loading, setLoading] = useState(false);
  let [obj, setObj] = useState({ choices: [] });
  const [payload, setPayLoad] = useState({
        prompt: "",
        max_tokens: 700,
        temperature: 0.1,
        n: 1,
        model: "text-davinci-003"
    });

  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: "20ch", // Adjust the width as needed
      },
    },
  };
  
  useEffect(() => {
    const fetchData = async () => {
        try {
            if (courseId) {
                console.log(courseId)
                const quizData = await fetchQuizByCourseID('64a768a28c0b52e60969e1c5');
                setSelectedQuiz(quizData);
            }
        } catch (error) {
            console.error('Error fetching course:', error);
        }
    };
    fetchData();
},  []);

  const handleChange = (event) => {
    setScore(event.target.value);
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
        (course) => course.course_id === dummyCourse
    );
    console.log('abc')
    console.log(dummyCourse)
    return course.quiz_answer || null;
  }

  function getStyles(name, personName, theme) {
    return {
      fontWeight:
        personName.indexOf(name) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    };
  }
  const scores = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '&',
    '8',
    '9',
    '10',
  ];

  
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
//   console.log(promptTemplate)
 

function callOpenAi(modifiedPayload){
    setLoading(true);
    console.log(modifiedPayload)
    axios({
      method: "POST",
      url: "https://api.openai.com/v1/completions",
      data: modifiedPayload,
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer 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"
      }
    })
      .then((res) => {
        console.log(res);
        responseHandler(res);
      })
      .catch((e) => {
        setLoading(false);
        console.log(e.message, e);
      });
  };


  const responseHandler = (res) => {
    if (res.status === 200) {
      setObj(res.data);
      setevalutaionAI(res.data.choices[0].text)
      setEvaluation(true)
      setLoading(false);
    }
  };

  return (
    <div>
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
                    <div className='score-container'>
                        <FormControl sx={{ m: 1, width: 300 }}>
                            <InputLabel id="name-label">Score</InputLabel>
                            <Select
                                labelId="name-label"
                                id="demo-multiple-name"
                                value={score}
                                onChange={handleChange}
                                input={<OutlinedInput label="Score" />}
                                MenuProps={MenuProps}
                            >
                                {scores.map((score) => (
                                    <MenuItem value={score}>{score}</MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                </div>
                </div>
            )}
            </>
        )}
        <div className='generate-container'>
            <button className='generate-button' onClick={handleopenAI}>Generate report and send</button>
        </div>
    </div>
  )
}

export default TraineeSubmission
