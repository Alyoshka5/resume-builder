import './App.css';
import Resume from './components/Resume';
import { useState } from 'react';
import personInfo from './person_info';

function App() {
  const [name, setName] = useState(personInfo.name);
  const [contact, setContact] = useState(personInfo.contact);
  const [education, setEducation] = useState(personInfo.education);
  const [summary, setSummary] = useState(personInfo.summary);
  const [experience, setExperience] = useState(personInfo.experience);

  return (
    <div className='App'>
      <Resume info={{name, contact, summary, education, experience}} />
    </div>
  );
}

export default App;
