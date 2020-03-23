import React, { Component } from 'react';
import IconButton from '@material-ui/core/IconButton';
import FeedbackIcon from '@material-ui/icons/Feedback';
import { Modal, Button } from 'antd';
import { Input } from 'antd';
// import {editcomment } from '../../Action/Action'
// import {getworker} from '../../Action/Action'
import { connect } from 'react-redux';

class Comment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: '',
      visible: false,
    };
  }
  showModal = () => {
    console.log('show modal');
    this.setState({
      visible: true,
    });
  };

  handleOk = e => {
    console.log('handleok');
    this.setState({
      visible: false,
    });
    this.props.editcomment(this.props._id, this.state.comment, this.props.comment);

    // this.props.comment.push(this.state.comment)

    // this.setComment(this.props.comment)
    // this.props.comment=[...this.props.comment,this.state.comment]
    // this.props.editcomment( {
    //   comment: this.state.comment,

    // });
  };
  // componentDidMount=()=>{
  //   this.props.getworker()
  // }
  //   setComment= (id) => {
  //     let newComment= {
  //         // _id: this.state._id,
  //         comment: this.state.comment

  //     }
  //     this.props.editcomment(id, newComment)
  // }
  handleChange = event => {
    this.setState({
      comment: event.target.value,
    });
  };

  handleCancel = e => {
    console.log('handlecancel');
    this.setState({
      visible: false,
    });
  };
  render() {
    return (
      <div>
        <IconButton onClick={this.showModal} aria-label='show more'>
          <FeedbackIcon />
        </IconButton>
        <Modal
          title='Basic Modal'
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}>
          <Input placeholder='Your Comment' onChange={this.handleChange} />
        </Modal>
      </div>
    );
  }
}
// const mapStateToProps=state=>({
//   comment:state.comment

// })
export default connect(null)(Comment);
