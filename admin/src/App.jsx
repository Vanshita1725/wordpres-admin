import { Route, Routes } from 'react-router-dom'
import './App.css'
import Dashboard from './Dashboard'
import PermalinkSettings from './PermalinkSettings'
import GeneralSettings from './GeneralSettings'
import PrivacySettings from './PrivacySettings'
import ReadingSettings from './ReadingSettings'
import MediaSettings from './MediaSettings'
import WritingSettings from './WritingSettings'
import DiscussionSettings from './DiscussionSettings'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/GeneralSettings" element={<GeneralSettings />} />
        <Route path="/WritingSettings" element={<WritingSettings />} />
        <Route path="/ReadingSettings" element={<ReadingSettings />} />
        <Route path="/DiscussionSettings" element={<DiscussionSettings />} />
        <Route path="/MediaSettings" element={<MediaSettings />} />
        <Route path="/PermalinkSettings" element={<PermalinkSettings />} />
        <Route path="/PrivacySettings" element={<PrivacySettings />} />
      </Routes>
    </div>
  )
}

export default App
