import './App.css';
import Resume from './components/Resume';
import EditBar from './components/EditBar'
import { useState } from 'react';
import personInfo from './person_info';

function App() {
  const [name, setName] = useState(personInfo.name);
  const [contact, setContact] = useState(personInfo.contact);
  const [education, setEducation] = useState(personInfo.education);
  const [summary, setSummary] = useState(personInfo.summary);
  const [experience, setExperience] = useState(personInfo.experience);
  const [resumeXShift, setResumeXShift] = useState(0);

  return (
    <div className='App'>
      <Resume info={{name, contact, summary, education, experience}} xShift={resumeXShift} />
      <EditBar name={name} onNameChange={setName} xShift={resumeXShift} />
      <button style={{position: 'absolute'}} onClick={() => {
        setResumeXShift(resumeXShift === 0 ? 300 : 0);
      }}>Show edit bar</button>
    </div>
  );
}

export default App;
