import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login } from '../../actions/auth';

const Login = ({ login, isAuthenticated, user }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const { email, password } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });
  const onSubmit = async e => {
    e.preventDefault();
    login(email, password);
  };

  if (isAuthenticated && user !== null) {
    if (user.typeuser === 'worker') {
      return <Redirect to='/home' />;
    } else return <Redirect to='/client' />;
  }

  return (
    <div 
      className='login-container'
      style={{ margin: '10px' }}>
      <h3>Login Page</h3>
      <form onSubmit={e => onSubmit(e)}>
        <input
          className='login_input'
          type='text'
          placeholder='Please type your email'
          name='email'
          onChange={e => onChange(e)}
          value={email}
        />
        <input
          className='login_input'
          type='password'
          placeholder='Please type your password'
          name='password'
          onChange={e => onChange(e)}
          value={password}
        />
        <input type='submit' className='btn btn-success' value='Login' />
      </form>
    </div>
  );
};

const mapState = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  user: state.auth.user,
});
export default connect(mapState, { login })(Login);
