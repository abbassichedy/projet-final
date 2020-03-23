import React, { useEffect, useState } from 'react';
import Cards from './Card';
import { Route } from 'react-router-dom';
// import Profile from './Profile'
import Search from './Search';
// import { connect } from 'mongoose'
import { getWorkers } from '../../actions/profile';
import { connect } from 'react-redux';

const Workers = ({ getWorkers, workers }) => {
  const [searching, setSearching] = useState('');
  useEffect(() => {
    getWorkers();
  });

  const onChange = e => {
    setSearching(e.target.value);
  };

  return (
    <div>
      <h1>Workers</h1>
      <select name='searching' value={searching} onChange={e => onChange(e)}>
        <option value=''>Metier</option>
        <option value='plombier'>Plombier</option>
        <option value='Electricien'>Electricien</option>
        <option value='Femme de ménage'>Femme de ménage</option>
        <option value='Transporteur'>Transporteur</option>
        <option value='Babysitter'>Babysitter</option>
      </select>

      <div className='container'>
        {workers
          .filter(el => el.metier.toUpperCase().includes(searching.toUpperCase()))
          .map(el => (
            <div className='Card'>
              {/* {console.log('comment', el.comments)} */}
              <Cards key={el.id} worker={el} />
            </div>
          ))}
      </div>
    </div>
  );
};

const mapState = state => ({
  workers: state.profile.profiles,
});
export default connect(mapState, { getWorkers })(Workers);
