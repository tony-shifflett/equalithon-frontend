import './App.css';
import Landing from './pages/Landing';
import Login from './pages/Login';
import Register from './pages/Register';
import {Route, Routes} from 'react-router-dom'


function App() {
  return (
    <div className="App">
     <Routes>
       <Route path='/' element={<Landing/>}/>
       <Route path='/login' element={<Login/>}/>
       <Route path='/register' element={<Register/>}/>
     </Routes>
    </div>
  );
}

export default App;
