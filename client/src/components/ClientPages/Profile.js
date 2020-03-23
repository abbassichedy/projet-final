import React, { useEffect } from 'react';
import { getCurrentProfile } from '../../actions/profile';
import { connect } from 'react-redux';
import { loadUser } from '../../actions/auth';
import {
  confirmReservationWorker,
  confirmReservationClient,
  declineReservationClient,
  declineReservationWorker,
} from '../../actions/user';
const Profil = ({
  profile,
  loading,
  user,
  loadUser,
  confirmReservationWorker,
  confirmReservationClient,
  declineReservationClient,
  declineReservationWorker,
}) => {
  const handleAccept = clientId => {
    confirmReservationWorker({ id: clientId });
    confirmReservationClient({ id: clientId });
    loadUser();
  };
  const handleDecline = clientId => {
    declineReservationClient({ id: clientId });
    declineReservationWorker({ id: clientId });
    loadUser();
  };

  if (loading || profile === null || user === null)
    return (
      <div className='container'>
        <div className='d-flex justify-content-center text-primary'>
          <div className='spinner-border' role='status'>
            <span className='sr-only'>Loading...</span>
          </div>
        </div>
      </div>
    );

  return (
    <div className='profil-container'>
      <h1 className='title-p'>My profile</h1>
      

      <div id='user-profile-2' className='user-profile'>
        <div className='tabbable'>
          <div className='tab-content no-border padding-24'>
            <div id='home' className='tab-pane in active'>
              <div className='row'>
                <div className='col-xs-12 col-sm-3 center'>
                  <span className='profile-picture'>
                    <img
                      className='editable img-responsive'
                      alt=' Avatar'
                      id='avatar2'
                      src='http://bootdey.com/img/Content/avatar/avatar6.png'
                    />
                  </span>
                  <div className='space space-4' />
                </div>
                {/* /.col */}
                <div className='col-xs-12 col-sm-9'>
                  <div className='profile-user-info'>
                    <div className='profile-info-row'>
                      <div className='profile-info-name'> FirstName : </div>
                      <div className='profile-info-value'>
                        <span>{profile.firstname}</span>
                      </div>
                    </div>
                    <div className='profile-info-row'>
                      <div className='profile-info-name'> LastName : </div>
                      <div className='profile-info-value'>
                        <span>{profile.lastname}</span>
                      </div>
                    </div>
                    <div className='profile-info-row'>
                      <div className='profile-info-name'> Adress : </div>
                      <div className='profile-info-value'>
                        <i className='fa fa-map-marker light-orange bigger-110' />
                        <span>{profile.adresse}</span>
                      </div>
                    </div>
                    {/* <div className='profile-info-row'>
                      <div className='profile-info-name'> Email </div>
                      <div className='profile-info-value'>
                        <span>{}</span>
                      </div>
                    </div> */}
                    <div className='profile-info-row'>
                      <div className='profile-info-name'> Tel : </div>
                      <div className='profile-info-value'>
                        <span>{profile.tel}</span>
                      </div>
                    </div>
                    <div className='profile-info-row'>
                      <div className='profile-info-name'> PriceHour : </div>
                      <div className='profile-info-value'>
                        <span>{profile.prix}</span>
                      </div>
                    </div>
                    {/* <div className='profile-info-row'>
                      <div className='profile-info-name'> Category </div>
                      <div className='profile-info-value'>
                        <span>{this.state.Meetings}</span>
                      </div>
                    </div> */}
                    {/* <div className="profile-info-row">
                      <div className="profile-info-name"> State </div>
                      <div className="profile-info-value">
                        <span>{this.state.States}</span>
                      </div>
                    </div> */}
                  </div>
                </div>
                {/* /.col */}
              </div>
              {/* /.row */}
            </div>
            {/* /#home */}
          </div>
        </div>
      </div>
      <div className='E-R-button'>
        {/* <Edit change={this.change} /> */}
        <button type='button' className='btn btn-danger'>
          Remove
        </button>
      </div>
      <div className='meetings'>
      <h1 style={{ textAlign: 'center' },{fontWeight: 'bold' }}>My meetings</h1>
        {user.meetings != undefined &&
          user.meetings.length > 0 &&
          user.meetings.map((el, i) => (
            <div className='meeting' key={i} style={{ display: 'flex' },{ marginTop: '40px'}}>
              
              <h3>
                <span className='info'>{el.name}</span>
                <span className='info'> {el.adresse}</span>
                <span className='info'> {el.tel}</span>
                <span className='info'> {el.date}</span>
                <span className='info status'> {el.status}</span>
              </h3>
              <div style={{ display: 'flex' }}>
                <button className='btn btn-success' onClick={() => handleAccept(el.id)}>
                  Accept
                </button>
                <button className='btn btn-danger' onClick={() => handleDecline(el.id)}>
                  Decline
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

// export default Profil;
const mapState = state => ({
  user: state.auth.user,
  profile: state.profile.profile,
  loading: state.profile.loading,
});
export default connect(mapState, {
  getCurrentProfile,
  confirmReservationWorker,
  confirmReservationClient,
  declineReservationClient,
  declineReservationWorker,
  loadUser,
})(Profil);
