import './App.css'
import { Route, Routes } from 'react-router'
import JounralSettings from './Junralsettings';

function App() {
  

  return (
    
      <div>
       <Routes>
        <Route path="/" element={<JounralSettings />}/>
        <Route path="/home" element={<JounralSettings />}/>
        <Route path="/stats" element={<JounralSettings />}/>
       </Routes>
      </div>
     
  )
}

export default App;
