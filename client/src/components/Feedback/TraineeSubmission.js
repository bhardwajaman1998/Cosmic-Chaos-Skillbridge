import React, { useState, useEffect } from 'react';
import { fetchQuizByCourseID } from '../../services/DashboardService';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


const TraineeSubmission = ({trainee, courseId}) => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [isReqCollapsed, setReqIsCollapsed] = useState(true);
  const [isInstCollapsed, setInstIsCollapsed] = useState(true);
  const [isEvaluationComplete, setEvaluation] = useState(true);
  const [isEvaluationCollapsed, setEvaluationCollapsed] = useState(true);
  const [selectedQuiz, setSelectedQuiz] = useState(null);
  const [score, setScore] = React.useState('0');

  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
        style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
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
  
  function getStyles(name, personName, theme) {
    return {
      fontWeight:
        personName.indexOf(name) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    };
  }
  const scores = [
    'Oliver Hansen',
    'Van Henry',
    'April Tucker',
    'Ralph Hubbard',
    'Omar Alexander',
    'Carlos Abbott',
    'Miriam Wagner',
    'Bradley Wilkerson',
    'Virginia Andrews',
    'Kelly Snyder',
  ];
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
                        <textarea name="postContent" rows={15} cols={40} />
                    </div>
                </div>
            )}
        </div>
        {!isEvaluationComplete ? null : (
                <div className='trainee-feedback-container'>
                    <div className='expander-container' onClick={toggleEvalCollapse}>
                        <span>Evaluation</span>
                        <span className="arrow-icon">{isEvaluationCollapsed ? '▲' : '▼'}</span>
                    </div>
                    {!isEvaluationCollapsed ? null : 
                        (
                        <div className={`expanded ${isEvaluationCollapsed ? 'collapsed' : ''}`}>
                            <p>Evaluation</p>
                        </div>
                    )}
                    <div className='score-container'>
                        <FormControl sx={{ m: 1, width: 300 }}>
                            <InputLabel id="name-label">Name</InputLabel>
                                <Select
                                    labelId="name-label"
                                    id="demo-multiple-name"
                                    value={score}
                                    onChange={handleChange}
                                    input={<OutlinedInput label="Name" />}
                                    MenuProps={MenuProps}
                                >
                                {scores.map((score) => (
                                    <MenuItem
                                        key={score}
                                        value={score}
                                    >
                                        {score}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                </div>
                </div>
        )}
    </div>
  )
}

export default TraineeSubmission
