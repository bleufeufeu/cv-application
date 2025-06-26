import { useState } from 'react'
import './App.css'
import './styles/Form.css'
import './styles/CVPreview.css'
import GeneralForm from './components/GeneralForm.jsx'
import EducationForm from './components/EducationForm.jsx'
import PracticalForm from './components/PracticalForm.jsx'
import CVPreview from './components/CVPreview.jsx'

function App() {
  const [generalInfo, setGeneralInfo] = useState({
    name: "Mario Mario",
    role: "Web Developer",
    email: "mario@gmail.com",
    phone: "416-967-1111",
    address: "1 Road, Ontario, Canada",
    website: "github.com/mario"
  });
  
  const [practicalInfo, setPracticalInfo] = useState([
    {
      id: crypto.randomUUID(),
      company: "Mario Kart",
      title: "Kart Racer",
      date: "August 1992 - Present",
      description: "- Won every race against my friends"
    },
    {
      id: crypto.randomUUID(),
      company: "Wrecking Crew",
      title: "Plumber",
      date: "July 1984 - Present",
      description: "- Dealt with lots of kinds of turtles and crabs "
    }
  ]);


  const [educationInfo, setEducationInfo] = useState([
    {
      id: crypto.randomUUID(),
      school: "University of Canada",
      location: "Toronto, Ontario",
      date: "1980 - 1984",
      degree: "Bachelors of Arts",
      description: "- Graduated Summa Cum Laude"
    }
  ]);

  const generalInfoHandler = (event) => {
    const { name, value } = event.target;
    setGeneralInfo({...generalInfo, [name]: value})
  };

  const practicalInfoHandler = (event, id) => {
    const { name, value } = event.target;
    setPracticalInfo(prevPracticalInfo => 
      prevPracticalInfo.map(practical =>
        practical.id === id
        ? {...practical, [name]: value}
        : practical
      )
    );
  };

  const educationInfoHandler = (event, id) => {
    const { name, value } = event.target;
    setEducationInfo(prevEducationInfo => 
      prevEducationInfo.map(education =>
        education.id === id
        ? {...education, [name]: value}
        : education
      )
    );
  };

  const addPracticalInfo = () => {
    setPracticalInfo(prevPracticalInfo => [...prevPracticalInfo, {
      id: crypto.randomUUID(),
      company: "",
      title: "",
      date: "",
      description: ""
    }]);
  };

  const addEducationInfo = () => {
    setEducationInfo(prevEducationInfo => [...prevEducationInfo, {
      id: crypto.randomUUID(),
      school: "",
      location: "",
      date: "",
      degree: "",
      grade: ""
    }]);
  };

  const deletePracticalInfo = (practicalId) => {
      setPracticalInfo(practicalInfo.filter(p => p.id !== practicalId));
  };

  const deleteEducationInfo = (educationId) => {
      setEducationInfo(educationInfo.filter(edu => edu.id !== educationId));
  };

  return (
    <>
      <form>
        <GeneralForm generalInfo={generalInfo} changeHandler={generalInfoHandler}/>
        <PracticalForm practicalInfo={practicalInfo} changeHandler={practicalInfoHandler} addButton={addPracticalInfo} deleteButton={deletePracticalInfo}/>
        <EducationForm educationInfo={educationInfo} changeHandler={educationInfoHandler} addButton={addEducationInfo} deleteButton={deleteEducationInfo}/>
      </form>

      <CVPreview generalInfo={generalInfo} practicalInfo={practicalInfo} educationInfo={educationInfo}/>
    </>
  )
}

export default App
