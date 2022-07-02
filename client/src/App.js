import  {Editor} from './components/Editor.js'

import {BrowserRouter as Router,Routes,Route,Navigate} from 'react-router-dom'
import {v4 as uuid} from 'uuid'

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Navigate replace to={`/docs/${uuid()}`} />} />
        <Route path='/docs/:id' element={<Editor/>} />
      </Routes>
    </Router>
  ); 
}


