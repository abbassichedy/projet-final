import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Modal, Button } from 'antd';
import { Route, Switch, BrowserRouter, Link } from 'react-router-dom';
// import {addWorker} from '../../Action/Action'
import { connect } from 'react-redux';

class Edit extends Component {
  // state = {
  //     visible: false,
  //     FirstName: '',
  //     LastName:'',
  //     Adress:'',
  //     Email:'',
  //     Tel:'',
  //     PriceHour :'',
  //     Category : '',
  //     States : ''
  //    };
  state = {
    nom: '',
    adresse: '',
    tel: '',
    prix: '',
    metier: '',
    // img:""
    Meetings: '',
    visible: false,
  };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false,
      //  FirstName: '',
      //  LastName:'',
      //  Adress:'',
      //  Email:'',
      //  Tel:'',
      //  PriceHour :'',
      //  Category : '',
      //  States : ''
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };
  //  handleChange=(event)=>{
  //    this.setState({
  //      [event.target.name]:event.target.value
  //    })
  //  }
  changeEvent = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <div>
        <button type='button' className='btn btn-success' onClick={this.showModal}>
          Edit
        </button>
        {/* <Button type="primary" onClick={this.showModal}>
          Edit
        </Button> */}
        <Modal
          title='Edit Profil'
          visible={this.state.visible}
          // onOk={this.props.addWorker(this.state)}
          onCancel={this.handleCancel}>
          <div className='le-modal'>
            {/* <input type='text' value={this.state.FirstName} onChange={this.handleChange} placeholder='FirstName' name="FirstName"/>
          <input type='text' value={this.state.LastName} onChange={this.handleChange} placeholder='LastName' name="LastName"/>
          <input type='text' value={this.state.Adress} onChange={this.handleChange} placeholder='Adress' name="Adress"/>
          <input type='text' value={this.state.Email} onChange={this.handleChange} placeholder='Email' name="Email"/>
          <input type='text' value={this.state.Tel} onChange={this.handleChange} placeholder='Tel' name="Tel"/>
          <input type='text' value={this.state.PriceHour} onChange={this.handleChange} placeholder='PriceHour' name="PriceHour"/>
          <input type='text' value={this.state.Category} onChange={this.handleChange} placeholder='Category' name="Category"/>
          <input type='text' value={this.state.States} onChange={this.handleChange} placeholder='States' name="States"/> */}
            <form>
              <div className='form-row'>
                <div className='form-group col-md-6'>
                  <label for='inputnom4'>Nom</label>
                  <input
                    name='nom'
                    type='nom'
                    className='form-control'
                    value={this.state.nom}
                    onChange={this.changeEvent}
                    id='inputnom4'
                  />
                </div>
                <div className='form-group col-md-6'>
                  <label for='inputtel4'>telephone</label>
                  <input
                    name='tel'
                    type='tele'
                    className='form-control'
                    value={this.state.tel}
                    onChange={this.changeEvent}
                    id='inputtel4'
                  />
                </div>
              </div>
              <div className='form-row'>
                <div className='form-group col-md-6'>
                  <label for='inputEmail4'>Email</label>
                  <input
                    name='email'
                    type='email'
                    className='form-control'
                    value={this.state.email}
                    onChange={this.changeEvent}
                    id='inputEmail4'
                  />
                </div>
                <div className='form-group col-md-6'>
                  <label for='inputprix4'>prix</label>
                  <input
                    name='prix'
                    type='prix'
                    className='form-control'
                    value={this.state.prix}
                    onChange={this.changeEvent}
                    id='inputprix4'
                  />
                </div>
              </div>
              <div className='form-group'>
                <label for='inputAddress'>Adresse</label>
                <input
                  name='adresse'
                  type='text'
                  className='form-control'
                  value={this.state.adresse}
                  onChange={this.changeEvent}
                  id='inputAddress'
                  placeholder='1234 Main St'
                />
              </div>

              <div className='form-row'>
                <div className='form-group col-md-6'>
                  <label for='inputCity'>metier</label>
                  <input
                    name='metier'
                    type='text'
                    className='form-control'
                    value={this.state.metier}
                    onChange={this.changeEvent}
                    id='inputCity'
                  />
                </div>
                <div className='form-group col-md-6'>
                  <label for='inputCity'>image</label>
                  <input
                    name='image'
                    type='text'
                    className='form-control'
                    value={this.state.Meetings}
                    onChange={this.changeEvent}
                    id='inputCity'
                  />
                </div>
                <div className='form-group col-md-4'>
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
                </div>
              </div>
              {/* <button  className="btn btn-danger" onClick={()=>(this.handleCancel, this.props.change(this.state))}    >Add Worker</button>  */}
              <button onClick={() => this.props.change(this.state)}> adddd</button>
              <Link to='/home'>
                {' '}
                <button
                  className='btn btn-danger'
                  // onClick={() => (
                  //   this.props.addWorker(this.state), this.props.change(this.state)
                  // )}
                >
                  Add Worker
                </button>
              </Link>
            </form>
          </div>
        </Modal>
      </div>
    );
  }
}
// export default Edit ;
export default connect(null)(Edit);
