import React, { useState, useRef, useEffect } from "react";

const ScreenOptionsDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [options, setOptions] = useState({
    siteHealth: true,
    atAGlance: true,
    activity: true,
    quickDraft: true,
    wordpressEvents: true,
    welcome: true
  });
  const dropdownRef = useRef(null);

  const toggleOption = (option) => {
    setOptions(prev => ({
      ...prev,
      [option]: !prev[option]
    }));
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        type="button"
        className="inline-flex justify-center w-full px-3 py-1 text-sm font-medium text-gray-700 hover:text-gray-900 bg-white hover:bg-gray-50 border border-transparent hover:border-gray-300 rounded focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        Screen Options
      </button>

      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-64 rounded-none shadow-lg bg-white border border-gray-300 z-50">
          <div className="p-4 bg-gray-100 border-b border-gray-300">
            <p className="text-xs text-gray-600 leading-snug">
              Some screen elements can be shown or hidden by using the checkboxes. 
              Expand or collapse the elements by clicking on their headings, and 
              arrange them by dragging their headings or by clicking on the up and down arrows.
            </p>
          </div>
          <div className="p-2">
            <label className="flex items-center px-2 py-1 hover:bg-gray-50">
              <input
                type="checkbox"
                checked={options.siteHealth}
                onChange={() => toggleOption('siteHealth')}
                className="h-3 w-3 text-blue-500 rounded-sm border-gray-400 focus:ring-blue-500"
              />
              <span className="ml-2 text-sm">Site Health Status</span>
            </label>
            <label className="flex items-center px-2 py-1 hover:bg-gray-50">
              <input
                type="checkbox"
                checked={options.atAGlance}
                onChange={() => toggleOption('atAGlance')}
                className="h-3 w-3 text-blue-500 rounded-sm border-gray-400 focus:ring-blue-500"
              />
              <span className="ml-2 text-sm">At a Glance</span>
            </label>
            <label className="flex items-center px-2 py-1 hover:bg-gray-50">
              <input
                type="checkbox"
                checked={options.activity}
                onChange={() => toggleOption('activity')}
                className="h-3 w-3 text-blue-500 rounded-sm border-gray-400 focus:ring-blue-500"
              />
              <span className="ml-2 text-sm">Activity</span>
            </label>
            <label className="flex items-center px-2 py-1 hover:bg-gray-50">
              <input
                type="checkbox"
                checked={options.quickDraft}
                onChange={() => toggleOption('quickDraft')}
                className="h-3 w-3 text-blue-500 rounded-sm border-gray-400 focus:ring-blue-500"
              />
              <span className="ml-2 text-sm">Quick Draft</span>
            </label>
            <label className="flex items-center px-2 py-1 hover:bg-gray-50">
              <input
                type="checkbox"
                checked={options.wordpressEvents}
                onChange={() => toggleOption('wordpressEvents')}
                className="h-3 w-3 text-blue-500 rounded-sm border-gray-400 focus:ring-blue-500"
              />
              <span className="ml-2 text-sm">WordPress Events and News</span>
            </label>
            <label className="flex items-center px-2 py-1 hover:bg-gray-50">
              <input
                type="checkbox"
                checked={options.welcome}
                onChange={() => toggleOption('welcome')}
                className="h-3 w-3 text-blue-500 rounded-sm border-gray-400 focus:ring-blue-500"
              />
              <span className="ml-2 text-sm">Welcome</span>
            </label>
          </div>
        </div>
      )}
    </div>
  );
};

export default ScreenOptionsDropdown;