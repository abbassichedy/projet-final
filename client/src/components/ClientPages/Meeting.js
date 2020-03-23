import React, { useState } from 'react';
import { Modal, Button } from 'antd';
import { Input } from 'antd';
import { connect } from 'react-redux';
// import { getWorkers } from '../../actions/profile';
import {
  reserveWorker,
  reserveClient,
  editReservationWorker,
  editReservationClient,
  cancelReservationWorker,
  cancelReservationClient,
} from '../../actions/user';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Meeting = ({
  worker,
  reserveWorker,
  reserveClient,
  editReservationWorker,
  editReservationClient,
  cancelReservationWorker,
  cancelReservationClient,
}) => {
  const [formData, setFormData] = useState({
    editing: false,
    visible: false,
    name: '',
    adresse: '',
    tel: '',
  });
  const [date, setStartDate] = useState('');
  const { visible, name, adresse, tel, editing } = formData;
  const showModal = () => {
    setFormData({ ...formData, visible: true });
  };
  const handleEdit = (par1, par2, par3, par4) => {
    if (!editing) {
      setFormData({
        ...formData,
        name: par1,
        adresse: par2,
        tel: par3,
        date: par4,
        editing: true,
      });
    } else {
      editReservationWorker({ name, adresse, tel, date, id: worker._id });
      editReservationClient({ name, adresse, tel, date, id: worker._id });
      // getWorkers();
      setFormData({
        ...formData,
        name: '',
        adresse: '',
        tel: '',
        date: '',
        editing: false,
        visible: false,
      });
    }
  };
  const handleDelete = workerId => {
    cancelReservationWorker({ id: workerId });
    cancelReservationClient({ id: workerId });
    // getWorkers();
    setFormData({ ...formData, visible: false });
  };
  const handleOk = () => {
    //-- ---------------------------------------- RESERVATION GOES HERE ----------------------------//
    reserveClient({ name, adresse, tel, date, id: worker._id });
    reserveWorker({ name, adresse, tel, date, id: worker._id });
    // getWorkers();
    setFormData({
      ...formData,
      name: '',
      adresse: '',
      tel: '',
      date: '',
      visible: false,
    });
  };
  const handleCancel = () => {
    setFormData({ ...formData, visible: false });
  };
  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <button
        onClick={() => showModal()}
        type='button'
        className='btn btn-success'
        data-toggle='modal'
        data-target='#staticBackdrop'>
        Rendez-vous
      </button>
      <Modal
        title='Basic Modal'
        visible={visible}
        onOk={() => handleOk()}
        onCancel={() => handleCancel()}>
        <Input name='name' value={name} placeholder='Name' onChange={e => onChange(e)} />
        <Input
          name='adresse'
          value={adresse}
          placeholder='Adresse'
          onChange={e => onChange(e)}
        />
        <Input name='tel' value={tel} placeholder='Tel' onChange={e => onChange(e)} />

        <h2>Meetings:</h2>
        {worker.meetings !== undefined &&
          worker.meetings.length > 0 &&
          worker.meetings.map(el => (
            <div key={el._id} style={{ display: 'flex' }}>
              <p>
                <span>{el.name}</span>
                <span> {el.adresse}</span>
                <span> {el.tel}</span>
                <span> {el.date}</span>
                <span> {el.status}</span>
              </p>
              <div style={{ display: 'flex' }}>
                <button
                  className='btn btn-success'
                  onClick={() => handleEdit(el.name, el.adresse, el.tel, el.date)}>
                  Edit
                </button>
                <button
                  className='btn btn-danger'
                  onClick={() => handleDelete(worker._id)}>
                  Delete
                </button>
              </div>
            </div>
          ))}
        <DatePicker
          selected={date}
          onChange={date => setStartDate(date)}
          showTimeSelect
          timeFormat='HH:mm'
          timeIntervals={15}
          timeCaption='time'
          dateFormat='MMMM d, yyyy h:mm aa'
        />
      </Modal>
    </div>
  );
};
const mapState = state => ({
  user: state.auth.user,
});
export default connect(mapState, {
  reserveWorker,
  reserveClient,
  editReservationWorker,
  editReservationClient,
  cancelReservationWorker,
  cancelReservationClient,
})(Meeting);
