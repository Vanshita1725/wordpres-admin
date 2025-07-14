import './App.css'
import { Route, Routes } from 'react-router'
import Dashboard from './Dashboard';
import JounralSettings from './Junralsettings';
import PrivacySettings from './PrivacySettings';
import Readingsetting from '../Readingsetting';
function App() {
  

  return (
    
      <div>
       <Routes>
        {/* <Route path="/" element={<Domains />}/> */}
        <Route path="/Dashboard" element={<Dashboard />}/>
        <Route path="/Junralsettings" element={<JounralSettings />}/>
        <Route path="/PrivacySettings"element={<PrivacySettings/>}/>
        <Route path="/Readingsetting"element={<Readingsetting/>}/>
       </Routes>
      </div>
     
  )
}

export default App;
