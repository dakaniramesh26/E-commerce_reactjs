import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = localStorage.getItem('userData');
    if (userData) {
      const { username: storedUsername, password: storedPassword } = JSON.parse(userData);
     
      if (username === storedUsername && password === storedPassword) {
        console.log('Login successful!');
        navigate('/cart'); 
      } else {
        setErrorMessage('Invalid username or password');
      }
    } else {
      setErrorMessage('No registration data found');
    }
  };


  

  return (
    <center>
      <form onSubmit={handleSubmit} style={{ width: "300px", justifyContent: "center", marginTop: "100px" }}>
        <div data-mdb-input-init className="form-outline mb-4">
          <input className="form-control" placeholder="Username" type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
          <label className="form-label" htmlFor="username"></label>
        </div>
        <div data-mdb-input-init className="form-outline mb-4">
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} id="password" placeholder='Password' className="form-control" required />
          <label className="form-label" htmlFor="password"></label>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success btn-block">Login</button>
        </div>
        {errorMessage && <div style={{ color: 'red', marginTop: '10px' }}>{errorMessage}</div>}
      </form>
    </center>
  );
}

export default Login;
