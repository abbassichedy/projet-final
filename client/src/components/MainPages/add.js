import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import './login.css';
import { register } from '../../actions/auth';

const Add = ({ isAuthenticated, register, user }) => {
  const [formData, setFormData] = useState({
    email: '',
    typeuser: '',
    password: '',
  });
  const { email, typeuser, password } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });
  const onSubmit = async e => {
    e.preventDefault();
    register({
      email,
      typeuser,
      password,
    });
  };
  if (isAuthenticated && user !== null) {
    if (user.typeuser === 'worker') {
      return <Redirect to='/home' />;
    } else return <Redirect to='/client' />;
  }
  return (
    <div className='from-register'>
      <h1 className='title'>Register</h1>
      <form onSubmit={e => onSubmit(e)}>
        <div class='form-group row'>
          <label for='inputEmail3' class='col-sm-2 col-form-label'>
            Email
          </label>
          <div class='col-sm-4'>
            <input
              type='text'
              placeholder='Please type your email'
              name='email'
              class='form-control'
              id='inputEmail3'
              value={email}
              onChange={e => onChange(e)}
            />
          </div>
        </div>
        <div class='form-group row'>
          <label for='inputPassword3' class='col-sm-2 col-form-label'>
            Password
          </label>
          <div class='col-sm-4'>
            <input
              type='text'
              placeholder='Please type your password'
              name='password'
              class='form-control'
              id='inputPassword3'
              value={password}
              onChange={e => onChange(e)}
            />
          </div>
        </div>

        <div>
          <select
            value={typeuser}
            class='custom-select'
            name='typeuser'
            onChange={e => onChange(e)}>
            <option>User Type</option>
            <option value='worker'>worker</option>
            <option value='client'>client</option>
          </select>
        </div>
        <div class='form-group row'>
          <div class='col-sm-4'>
            <input type='submit' value='Register' className='btn btn-danger' />
          </div>
        </div>
      </form>
    </div>
  );
};
const mapState = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  user: state.auth.user,
});

export default connect(mapState, { register })(Add);
