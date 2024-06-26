import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from './components/Form/Form';
import TaskList from './components/TaskList/TaskList'
import Options from './components/Options/Options';
import Deleted from './components/Deleted/deleted';
import { useState } from 'react';
import { BrowserRouter,Routes, Route } from 'react-router-dom';

function App() {
  const [formSubmitted, setSubmit] = useState(0)

  const reloadNewTasks = () => {
    console.log('final')
    setSubmit(value=>(value+1))
  }

  return (
    <div className="App">
        <div className='containers'>
          <div className='row'>
            <h1 className='App-header'>Todo Application</h1>
            <h2></h2>
            <Form reloadNewTasks={reloadNewTasks} />
            <BrowserRouter>
              <Options />
              <Routes>
                  <Route path='/' element={<TaskList formSubmitted={formSubmitted} />} />
                  <Route path='/deleted' element={<Deleted />}/>
              </Routes>
            </BrowserRouter>
          </div>
        </div>
    </div>
  );
}

export default App;
