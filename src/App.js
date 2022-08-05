import { useState } from 'react';
import './App.css';
import {TaskCreator} from './component/TaskCreator'

function App() {

  const [ taskItems, setTasksItems] = useState ([
    {name: 'mi primer tarea', done: false},
    {name: 'mi segunda tarea', done: false},
    {name: 'mi tercer tarea', done: false},
  ])


  return (
    <div className="contenedor">
      <TaskCreator />


      {
        taskItems.map((task,index) => (
          <div key={index}>
            {task.name}
            </div>
        ))
      }
    </div>
  );
}

export default App;
