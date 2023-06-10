import './App.css';
import Resume from './components/Resume';
import EditBar from './components/EditBar';
import { useState, useEffect } from 'react';
import personInfo from './person_info';

function App() {
  const [name, setName] = useState(personInfo.name);
  const [themeColor, setThemeColor] = useState('66, 87, 120');
  const [summary, setSummary] = useState(personInfo.summary);
  const [experience, setExperience] = useState(personInfo.experience);
  const [contact, setContact] = useState(personInfo.contact);
  const [education, setEducation] = useState(personInfo.education);
  const [xShift, setXShift] = useState(0);
  const [editBarToggle, setEditBarToggle] = useState(false);
  const [currentEdit, setCurrentEdit] = useState('');
  const [currentEditTab, setCurrentEditTab] = useState('');

  useEffect(() => {
    setXShift(editBarToggle ? 32 : 0);
  }, [editBarToggle]);


  return (
    <div className='App' style={{overflow: 'hidden'}}>
      <EditBar 
        name={name} onNameChange={setName}
        themeColor={themeColor} setThemeColor={setThemeColor}
        summary={summary} onSummaryChange={setSummary}
        experience={experience} onExperienceChange={setExperience}
        contact={contact} onContactChange={setContact} 
        education={education} onEducationChange={setEducation} 
        xShift={xShift} setEditBarToggle={setEditBarToggle}
        currentEdit={currentEdit} setCurrentEdit={setCurrentEdit}
        currentEditTab={currentEditTab} setCurrentEditTab={setCurrentEditTab}
      />
      <Resume 
        editBarToggle={editBarToggle} 
        setEditBarToggle={setEditBarToggle} 
        setCurrentEdit={setCurrentEdit} 
        setCurrentEditTab={setCurrentEditTab} 
        info={{name, contact, summary, education, experience}} 
        xShift={xShift} themeColor={themeColor} 
        onExperienceChange={setExperience} 
      />
    </div>
  );
}

export default App;
