import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal'
import { connect } from 'react-redux'
import Avatar from '@material-ui/core/Avatar';
import '../../styles/profile-modal.css'


const ProfileModal = ({ user }) => {
  
    return (
      <>
        <Modal
          show={false}
          onHide=''
          dialogClassName="modal-90w"
          aria-labelledby="example-custom-modal-styling-title"
          fade={false}
          animation={false}
          centered={true}
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-custom-modal-styling-title">
            <Avatar className='orange'>N</Avatar>

            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>
              Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae unde
              commodi aspernatur enim, consectetur. Cumque deleniti temporibus
              ipsam atque a dolores quisquam quisquam adipisci possimus
              laboriosam. Quibusdam facilis doloribus debitis! Sit quasi quod
              accusamus eos quod. Ab quos consequuntur eaque quo rem! Mollitia
              reiciendis porro quo magni incidunt dolore amet atque facilis ipsum
              deleniti rem!
            </p>
          </Modal.Body>
        </Modal>
      </>
    );
}

function mapStateToProps(store) {
  return {
      user: store.auth.user,
  }
}

export default connect(mapStateToProps)(ProfileModal)