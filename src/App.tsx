import './App.css';
import Resume from './components/Resume';
import EditBar from './components/EditBar'
import { useState, useEffect } from 'react';
import personInfo from './person_info';

function App() {
  const [name, setName] = useState(personInfo.name);
  const [contact, setContact] = useState(personInfo.contact);
  const [education, setEducation] = useState(personInfo.education);
  const [summary, setSummary] = useState(personInfo.summary);
  const [experience, setExperience] = useState(personInfo.experience);
  const [xShift, setXShift] = useState(0);
  const [editBarToggle, setEditBarToggle] = useState(false);

  useEffect(() => {
    setXShift(editBarToggle ? 30 : 0);
  }, [editBarToggle])

  return (
    <div className='App' style={{overflow: 'hidden'}}>
      <Resume editBarToggle={editBarToggle} setEditBarToggle={setEditBarToggle} info={{name, contact, summary, education, experience}} xShift={xShift} />
      <EditBar name={name} onNameChange={setName} xShift={xShift} setEditBarToggle={setEditBarToggle} />
    </div>
  );
}

export default App;
