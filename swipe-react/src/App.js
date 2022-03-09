import './App.css';
import Landing from './pages/Landing';
import Login from './pages/Login';
import Register from './pages/Register';
import PostBoard from './pages/PostBoard';
import {Route, Routes} from 'react-router-dom'

function App() {
  return (
    <div className="App">
     <Routes>
       <Route path='/' element={<Landing/>}/>
       <Route path='/login' element={<Login/>}/>
       <Route path='/register' element={<Register/>}/>
       <Route path='/postboard' element={<PostBoard/>}/>
     </Routes>
    </div>
  );
}

export default App;
