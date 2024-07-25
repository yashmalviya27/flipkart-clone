import { Route, Routes } from 'react-router-dom';
import './App.css';
import Main from './Components/Main';
import Login from './Components/Login';
import Terms from './Components/Terms';

function App() {
  return (
    <div className='bg-[#f1f2f4]  w-screen h-screen '>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path="/login" element={<Login />} />
        <Route path='/terms' element={<Terms/>}/>
      </Routes>
    </div>
  );
}

export default App;
