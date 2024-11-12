import React, { useState } from 'react';
import LoginForm from './LoginForm';
import UserDashboard from './UserDash';
import AdminDashboard from './AdminDash';
import ErrorMsg from './ErrorMsg';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [showError, setShowError] = useState(false);

  const handleLogin = (username, password) => {
    if (username && password) {
      if (username.toLowerCase() === 'admin') {
        setIsAdmin(true);
      } else {
        setIsAdmin(false);
      }
      setIsLoggedIn(true);
      setShowError(false);
    } else {
      setShowError(true);
    }
  };

  return (
    <div className="App">
      {!isLoggedIn && <LoginForm onLogin={handleLogin} />}
      {isLoggedIn && isAdmin && <AdminDashboard />}
      {isLoggedIn && !isAdmin && <UserDashboard />}
      {showError && <ErrorMsg />}
    </div>
  );
}

export default App;
