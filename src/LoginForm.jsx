import React, { useState } from 'react';

function LoginForm({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(username, password);
  };

  return (
    <form className='form' onSubmit={handleSubmit}>
      <div>
        <h2>Login</h2>
        <label><h3>Username:</h3></label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label><h3>Password:</h3></label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button className='btn' type="submit">Login</button>
    </form>
  );
}

export default LoginForm;
