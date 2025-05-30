import './App.css';
import React, { useState } from 'react';

function App() {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleToggle = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="App">
      <h2>Password Toggle</h2>
      <input
        type={showPassword ? 'text' : 'password'}
        placeholder="Enter Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleToggle}>
        {showPassword ? 'Hide' : 'Show'} password
      </button>
    </div>
  );
}

export default App;
