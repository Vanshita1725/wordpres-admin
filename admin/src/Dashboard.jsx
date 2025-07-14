import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Dashboard = () => (
  <div className="bg-[#f6f7f7] min-h-screen">
    <Header />
    <div className="flex pt-10">
      <Sidebar />
      <main className="flex-1 ml-50  bg-gray-100 font-sans text-gray-800">
        <div className="max-w-7xl ">
          {/* Welcome Panel */}
          <div className="bg-white rounded-lg shadow mb-6 p-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Welcome to WordPress!</h2>
              <button className="text-gray-500 hover:text-gray-700">
                <i className="fas fa-times"></i> Dismiss
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 border rounded-lg">
                <h3 className="font-medium mb-2">Get Started</h3>
                <p className="text-sm text-gray-600 mb-3">
                  Set up your homepage, add your first blog post, or customize your site's appearance.
                </p>
                <button className="bg-blue-600 text-white px-3 py-1 rounded text-sm hover:bg-blue-700">
                  Customize Your Site
                </button>
              </div>
              <div className="p-4 border rounded-lg">
                <h3 className="font-medium mb-2">Next Steps</h3>
                <ul className="list-disc pl-5 text-sm space-y-1">
                  <li>Add additional pages</li>
                  <li>Manage your widgets</li>
                  <li>Set up your menu</li>
                </ul>
              </div>
              <div className="p-4 border rounded-lg">
                <h3 className="font-medium mb-2">More Actions</h3>
                <ul className="list-disc pl-5 text-sm space-y-1">
                  <li>Manage comments</li>
                  <li>Learn about WordPress</li>
                  <li>View your site</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Dashboard Widgets */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* At a Glance */}
            <div className="bg-white rounded-lg shadow p-4">
              <h2 className="text-lg font-semibold mb-4">At a Glance</h2>
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                    <i className="fas fa-file-alt text-blue-600"></i>
                  </div>
                  <div>
                    <p className="font-medium">1 Post</p>
                    <p className="text-sm text-gray-500">1 Published</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                    <i className="fas fa-file text-purple-600"></i>
                  </div>
                  <div>
                    <p className="font-medium">1 Page</p>
                    <p className="text-sm text-gray-500">1 Published</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                    <i className="fas fa-comment text-green-600"></i>
                  </div>
                  <div>
                    <p className="font-medium">1 Comment</p>
                    <p className="text-sm text-gray-500">1 Approved</p>
                  </div>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t">
                <p className="text-sm">WordPress 6.2 running Twenty Twenty-Three theme.</p>
              </div>
            </div>

            {/* Activity */}
            <div className="bg-white rounded-lg shadow p-4">
              <h2 className="text-lg font-semibold mb-4">Activity</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium mb-2">Recently Published</h3>
                  <div className="text-sm space-y-2">
                    <p className="flex items-center">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                      <span>Hello world!</span>
                      <span className="text-gray-500 ml-auto">Just now</span>
                    </p>
                  </div>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Recent Comments</h3>
                  <div className="text-sm space-y-2">
                    <div className="p-2 bg-gray-50 rounded">
                      <p className="font-medium">A WordPress Commenter</p>
                      <p className="text-gray-600">Hello, this is a comment...</p>
                      <div className="flex space-x-2 mt-1 text-xs">
                        <a href="#" className="text-blue-600 hover:underline">Approve</a>
                        <a href="#" className="text-blue-600 hover:underline">Reply</a>
                        <a href="#" className="text-blue-600 hover:underline">Edit</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Draft */}
            <div className="bg-white rounded-lg shadow p-4">
              <h2 className="text-lg font-semibold mb-4">Quick Draft</h2>
              <form>
                <input type="text" placeholder="Title" className="w-full p-2 border rounded mb-3"/>
                <textarea placeholder="What's on your mind?" className="w-full p-2 border rounded mb-3 h-24"></textarea>
                <div className="flex justify-between">
                  <button type="submit" className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700">
                    Save Draft
                  </button>
                  <a href="#" className="text-sm text-blue-600 hover:underline self-center">View all drafts</a>
                </div>
              </form>
            </div>

            {/* WordPress News */}
            <div className="bg-white rounded-lg shadow p-4 lg:col-span-2">
              <h2 className="text-lg font-semibold mb-4">WordPress Events and News</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h3 className="font-medium mb-2">Upcoming Events</h3>
                  <div className="text-sm space-y-3">
                    <div className="p-2 border rounded">
                      <p className="font-medium">WordCamp US 2023</p>
                      <p className="text-gray-600">August 24-26, 2023</p>
                      <p className="text-gray-500 text-xs">National Harbor, MD</p>
                    </div>
                    <div className="p-2 border rounded">
                      <p className="font-medium">WordPress Meetup</p>
                      <p className="text-gray-600">September 15, 2023</p>
                      <p className="text-gray-500 text-xs">Online</p>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Latest News</h3>
                  <div className="text-sm space-y-3">
                    <div className="p-2 border rounded">
                      <p className="font-medium">WordPress 6.2 "Dolphy" Released</p>
                      <p className="text-gray-600">March 28, 2023</p>
                      <a href="#" className="text-blue-600 hover:underline text-xs">Read more</a>
                    </div>
                    <div className="p-2 border rounded">
                      <p className="font-medium">New Block Editor Features</p>
                      <p className="text-gray-600">March 15, 2023</p>
                      <a href="#" className="text-blue-600 hover:underline text-xs">Read more</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Site Health */}
            <div className="bg-white rounded-lg shadow p-4">
              <h2 className="text-lg font-semibold mb-4">Site Health Status</h2>
              <div className="flex items-center mb-3">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-3">
                  <i className="fas fa-check-circle text-green-600 text-xl"></i>
                </div>
                <div>
                  <p className="font-medium">Good</p>
                  <p className="text-sm text-gray-500">Your site's health is looking good!</p>
                </div>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex items-center">
                  <i className="fas fa-check-circle text-green-500 mr-2"></i>
                  <span>PHP version 8.1.2</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-check-circle text-green-500 mr-2"></i>
                  <span>SQL version 5.7.34</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-exclamation-triangle text-yellow-500 mr-2"></i>
                  <span>No scheduled backups</span>
                </div>
              </div>
              <a href="#" className="block mt-4 text-blue-600 hover:underline text-sm">Improve your site's health</a>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
);

export default Dashboard;