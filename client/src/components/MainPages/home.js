import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { createProfile, getCurrentProfile } from '../../actions/profile';
import Profile from '../ClientPages/Profile';
import { Link, Redirect } from 'react-router-dom';

const Home = ({ createProfile, getCurrentProfile, profile, loading }) => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    metier: '',
    adresse: '',
    tel: '',
    prix: '',
  });
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);

  const { firstname, lastname, metier, adresse, tel, prix } = formData;
  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });
  const onSubmit = async e => {
    e.preventDefault();
    createProfile(formData);
  };

  if (loading)
    return (
      <div className='container'>
        <div className='d-flex justify-content-center text-primary'>
          <div className='spinner-border' role='status'>
            <span className='sr-only'>Loading...</span>
          </div>
        </div>
      </div>
    );
  else if (profile !== null) {
    return <Redirect to='/profile' />;
  }
  return (
    <div className='from-register'>
      <h1 className='title'>
        Register : <span className='workers'>Workers</span>
      </h1>
      <form onSubmit={e => onSubmit(e)}>
        <div className='form-row'>
          <div className='form-group col-md-6'>
            <label for='inputnom4'>Firstname</label>
            <input
              name='firstname'
              type='text'
              className='form-control'
              value={firstname}
              onChange={e => onChange(e)}
              id='inputnom4'
            />
          </div>
          <div className='form-group col-md-6'>
            <label for='inputtel4'>Lastname</label>
            <input
              name='lastname'
              type='text'
              className='form-control'
              value={lastname}
              onChange={e => onChange(e)}
              id='inputtel4'
            />
          </div>
        </div>
        <div className='form-row'>
          <div className='form-group col-md-6'>
            <label for='inputEmail4'>Metier</label>
            <input
              name='metier'
              type='text'
              className='form-control'
              value={metier}
              onChange={e => onChange(e)}
              id='inputEmail4'
            />
          </div>
          <div className='form-group col-md-6'>
            <label for='inputprix4'>Adresse</label>
            <input
              name='adresse'
              type='text'
              className='form-control'
              value={adresse}
              onChange={e => onChange(e)}
              id='inputprix4'
            />
          </div>
        </div>
        <div className='form-group'>
          <label for='inputAddress'>Tel</label>
          <input
            name='tel'
            type='text'
            className='form-control'
            value={tel}
            onChange={e => onChange(e)}
            id='inputAddress'
            placeholder='1234 Main St'
          />
        </div>
        <div className='form-row'>
          <div className='form-group col-md-6'>
            <label for='inputCity'>Prix</label>
            <input
              name='prix'
              type='text'
              className='form-control'
              value={prix}
              onChange={e => onChange(e)}
              id='inputCity'
            />
          </div>
          {/* <div className='form-group col-md-6'>
            <label for='inputCity'>image</label>
            <input
              name='image'
              type='text'
              className='form-control'
              value={this.state.Meetings}
              onChange={this.changeEvent}
              id='inputCity'
            />
          </div> */}
          {/* <div className='form-group col-md-4'>
            <label for='inputState'>State</label>
            <select id='inputState' className='form-control'>
              <option selected>Ariana</option>
              <option>Béja</option>
              <option>Ben Arous</option>
              <option>Bizerte</option>
              <option>Gabès</option>
              <option>Gafsa</option>
              <option>Jendouba</option>
              <option>Kairouan</option>
              <option>Kasserine</option>
              <option>Kébili</option>
              <option>Le Kef</option>
              <option>Mahdia</option>
              <option>La Manouba</option>
              <option>Médenine</option>
              <option>Monastir</option>
              <option>Nabeul</option>
              <option>Sfax</option>
              <option>Sidi Bouzid</option>
              <option>Siliana</option>
              <option>Sousse</option>
              <option>Tataouine</option>
              <option>Tozeur</option>
              <option>Tunis</option>
              <option>Zaghouan</option>
            </select>
          </div> */}
        </div>

        {/* <Link to='/Profile'>
          <button
            type='submit'
            className='btn btn-danger'
            onClick={() => this.props.addWorker(this.state)}>
            Add Worker
          </button>{' '}
        </Link> */}
        <div class='col-sm-4'>
          {/* <Link to='/profile'> */}
          <input type='submit' value='Create Profile' className='btn btn-success' />
          {/* </Link> */}
        </div>
      </form>
      {/* <Profile /> */}
    </div>
  );
};
const mapState = state => ({
  profile: state.profile.profile,
  loading: state.profile.loading,
});

export default connect(mapState, { createProfile, getCurrentProfile })(Home);
