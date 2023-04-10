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
  const [editBarOpen, setEditBarOpen] = useState(false);

  useEffect(() => {
    setXShift(editBarOpen ? 30 : 0);
  }, [editBarOpen])

  return (
    <div className='App' style={{overflow: 'hidden'}}>
      <Resume editBarOpen={editBarOpen} openEditBar={setEditBarOpen} info={{name, contact, summary, education, experience}} xShift={xShift} />
      <EditBar name={name} onNameChange={setName} xShift={xShift} switchXShift={setXShift} />
    </div>
  );
}

export default App;
