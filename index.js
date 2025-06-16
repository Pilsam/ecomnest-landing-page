// Step 1: Install necessary packages (run this in your terminal)
// npx create-react-app ecomnest-landing-page
// cd ecomnest-landing-page
// npm install react-router-dom
// npm install -D tailwindcss postcss autoprefixer
// npx tailwindcss init -p

// Step 2: Tailwind Setup in tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

// In src/index.css, replace content with:
@tailwind base;
@tailwind components;
@tailwind utilities;

// Step 3: Create the landing page and navigation (src/App.js)
import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

function LoginModal({ onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded shadow-lg w-80">
        <h2 className="text-lg font-semibold mb-4">Login</h2>
        <input type="email" placeholder="Email" className="w-full mb-3 p-2 border rounded" />
        <input type="password" placeholder="Password" className="w-full mb-3 p-2 border rounded" />
        <div className="flex justify-end gap-2">
          <button onClick={onClose} className="text-sm px-4 py-1 border rounded text-gray-600">Cancel</button>
          <button className="text-sm px-4 py-1 bg-blue-600 text-white rounded">Login</button>
        </div>
      </div>
    </div>
  );
}

function RegisterModal({ onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded shadow-lg w-96">
        <h2 className="text-lg font-semibold mb-4">Register</h2>
        <input type="text" placeholder="Name" className="w-full mb-3 p-2 border rounded" />
        <input type="email" placeholder="Email" className="w-full mb-3 p-2 border rounded" />
        <input type="password" placeholder="Password" className="w-full mb-3 p-2 border rounded" />
        <input type="password" placeholder="Confirm Password" className="w-full mb-3 p-2 border rounded" />
        <div className="flex justify-end gap-2">
          <button onClick={onClose} className="text-sm px-4 py-1 border rounded text-gray-600">Cancel</button>
          <button className="text-sm px-4 py-1 bg-blue-600 text-white rounded">Register</button>
        </div>
      </div>
    </div>
  );
}

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        {/* Navigation Bar */}
        <nav className="flex justify-between items-center p-4 shadow bg-white">
          <div className="text-xl font-bold text-blue-600">E-ComNest</div>
          <ul className="hidden md:flex gap-6 text-gray-700">
            <li><a href="#how-it-works">How it Works</a></li>
            <li><a href="#watch-and-earn">Watch and Earn</a></li>
            <li><a href="#resources">Resources</a></li>
          </ul>
          <div className="flex gap-4">
            <button onClick={() => setShowLogin(true)} className="text-sm border px-4 py-1 rounded text-blue-600 border-blue-600 hover:bg-blue-100">Login</button>
            <button onClick={() => setShowRegister(true)} className="text-sm bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700">Register</button>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="flex flex-col md:flex-row items-center justify-between p-8 md:p-20">
          <div className="max-w-xl space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800">Turn Your Time into Money with E-ComNest</h1>
            <p className="text-lg text-gray-600">Get paid to watch videos, visit websites, and more. E-ComNest connects you with real gigs and real earnings.</p>
            <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700" onClick={() => setShowRegister(true)}>Get Started</button>
          </div>
          <img src="https://source.unsplash.com/600x400/?freelance,remote" alt="Earn Online" className="mt-10 md:mt-0 rounded-lg shadow-lg" />
        </section>

        {/* Modals */}
        {showLogin && <LoginModal onClose={() => setShowLogin(false)} />}
        {showRegister && <RegisterModal onClose={() => setShowRegister(false)} />}
      </div>
    </Router>
  );
}

export default App;
