import './App.css';
import {Routes,Route} from 'react-router-dom'
import Form from './elements/Form';

const App=()=> {
  return (
        <Routes>
        <Route path='/signup' element={<Form is_signup = {true} />}></Route>
        <Route path='/signin' element={<Form is_signup = {false} />}></Route>
      </Routes>
  );
}

export default App;
