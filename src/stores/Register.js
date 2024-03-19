import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username || !email || !password) {
      setErrorMessage('Please fill in all fields');
      return;
    }

    const userData = {
      username: username,
      email: email,
      password: password
    };
    localStorage.setItem('userData', JSON.stringify(userData));

    console.log('Form submitted with:');
    console.log('Username:', username);
    console.log('Email:', email);
    console.log('Password:', password);

    
    navigate('/login');
  };

  return (
    <center>
      <form onSubmit={handleSubmit} style={{ width: "300px", justifyContent: "center", marginTop: "100px" }}>
        <div data-mdb-input-init className="form-outline mb-4">
          <input className="form-control" placeholder="Username" type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
          <label className="form-label" htmlFor="username"></label>
        </div>
        <div data-mdb-input-init className="form-outline mb-4">
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} id="email" placeholder='Email' className="form-control" required />
          <label className="form-label" htmlFor="email"></label>
        </div>
        <div data-mdb-input-init className="form-outline mb-4">
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} id="password" placeholder='Password' className="form-control" required />
          <label className="form-label" htmlFor="password"></label>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success btn-block">Register</button>
          <Link to="/cart"><button style={{marginLeft:"20px"}} type="submit" className="btn btn-primary btn-block">skip</button></Link>
        </div>
        {errorMessage && <div style={{ color: 'red', marginTop: '10px' }}>{errorMessage}</div>}
        <div className="col" style={{ marginTop: '10px' }}>
          <p>Already have an account? <Link to="/login" >Login</Link>
          </p>
          
          
        </div>
      </form>
    </center>
  );
}

export default Register;
