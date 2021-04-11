import React, { useState, useEffect } from 'react'
import './App.css';
import Team from './Team'
import Form from './Form'
import axios from './axios'

const startFormValues = {
  name: '',
  email: '',
  role: '',
}

function App() {
  const [teamMates, setTeamMates] = useState([])
  const [formValues, setFormValues] = useState(startFormValues)
  useEffect(() => {
    axios.get('fakeapi.com').then(res => setTeamMates(res.data))
  }, [])

  const updateForm = (inputName, inputValue) => {
    //keep formValues and add inputname key with new value
    setFormValues({ ...formValues, [inputName]: inputValue })
  }
  const submitForm = () => {
    //new object to add to
    const newMember = {
      //trimming extra spaces before and after
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role,
    }
    //Making sure none are empty.
    if (!newMember.name || !newMember.email || !newMember.role) return
    axios.post('fakeapi.com', newMember)
      .then(res => {
        //keep old object and add new members
        setTeamMates([...teamMates, newMember])
        //if works clear the form
        setFormValues(startFormValues)
      })
      .catch(error => {
        console.log(error)
      })
  }

  return (
    <div className="App">
      <h1>Project</h1>
      <Form
        values={formValues}
        update={updateForm}
        submit={submitForm}
      />
      {
        teamMates.map(member => {
          return (
            <Team key={member.id} details={member} />
          )
        })
      }
    </div>
  );
}

export default App;
