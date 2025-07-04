import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';

const JounralSettings = () => {
  return (
    <div>
      {/* Header */}
      <Header />

      <div className="flex">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <main className="flex-1  p-6 text-xl bg-[#f0f0f1] min-h-screen">
          <h1 className="main-title text-4xl font-bold text-[#1d2327] mb-4">General Settings</h1>
          <p className="main-subtitle text-[#646970] text-lg mb-8">
            Manage your site settings, including language, time zone, site visibility, and more.
          </p>

          <h2 className="text-xl font-bold mb-2">Site profile</h2>
          <div className="bg-gray-200 shadow-sm p-0 mb-5 rounded">
            {/* Site Title */}
            <div className="flex items-start p-4">
              <div className="w-52 font-semibold pr-5 flex items-center gap-2">Site title</div>
              <div className="flex-1">
                <input
                  type="text"
                  className="w-full max-w-md p-2 bg-gray-100 border border-[#8c8f94] rounded"
                  placeholder="Enter site title"
                />
              </div>
            </div>
            {/* Site Tagline */}
            <div className="flex items-start p-4">
              <div className="w-52 font-semibold pr-5 flex items-center gap-2">Site tagline</div>
              <div className="flex-1">
                <input
                  type="text"
                  className="w-full max-w-md p-2 bg-gray-100 border border-[#8c8f94] rounded"
                  placeholder="Enter site tagline"
                />
                <p className="text-[#646970] text-xs mt-1">
                  In a few words, explain what this site is about.
                </p>
              </div>
            </div>
            {/* Site Icon */}
            <div className="flex items-start p-4">
              <div className="w-52 font-semibold pr-5">Site icon</div>
              <div className="flex-1">
                <input
                  type="file"
                  className="w-full max-w-md p-2 bg-gray-100 border border-[#8c8f94] rounded"
                />
                <p className="text-[#646970] text-sm mt-1">
                  The Site Icon is what you see in browser tabs, bookmark bars, and within the WordPress mobile apps. It should <br /> be square and at least 512 x 512 pixels.
                </p>
              </div>
            </div>
            {/* Site Language */}
            <div className="flex items-start p-4">
              <div className="w-52 font-semibold pr-5 flex items-center gap-2">
                Site language <span className="oi oi-globe text-base ml-1"></span>
              </div>
              <div className="flex-1">
                <select className="w-full max-w-md p-2 bg-gray-100 border border-[#8c8f94] rounded">
                  <option value="en" defaultValue>English</option>
                  <option value="hi">Hindi</option>
                  <option value="gu">Gujarati</option>
                  <option value="es">Spanish</option>
                  <option value="fr">French</option>
                  <option value="de">German</option>
                  <option value="zh">Chinese</option>
                  <option value="ar">Arabic</option>
                  <option value="ru">Russian</option>
                  <option value="ja">Japanese</option>
                </select>
              </div>
            </div>
          </div>

          {/* Time Zone */}
          <div className="flex items-start p-4 bg-gray-200 rounded mb-5">
            <div className="w-52 font-semibold pr-5">Time zone</div>
            <div className="flex-1">
              <select className="w-full max-w-md p-2 bg-gray-100 border border-[#8c8f94] rounded">
                <option value="UTC" defaultValue>UTC</option>
                <option value="Asia/Kolkata">Kolkata</option>
                <option value="Asia/Dubai">Dubai</option>
                <option value="America/New_York">New York</option>
                <option value="America/Chicago">Chicago</option>
                <option value="America/Denver">Denver</option>
                <option value="America/Los_Angeles">Los Angeles</option>
                <option value="Europe/London">London</option>
                <option value="Europe/Berlin">Berlin</option>
                <option value="Europe/Paris">Paris</option>
                <option value="Europe/Moscow">Moscow</option>
                <option value="Asia/Tokyo">Tokyo</option>
                <option value="Asia/Shanghai">Shanghai</option>
                <option value="Australia/Sydney">Sydney</option>
                <option value="Africa/Johannesburg">Johannesburg</option>
                <option value="America/Sao_Paulo">Sao Paulo</option>
                <option value="Pacific/Auckland">Auckland</option>
              </select>
              <p className="text-[#646970] text-sm mt-1">Choose a city in your time zone.</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default JounralSettings;