import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import {UserContext} from '../Context/Context';
import Modal from 'react-bootstrap/Modal';
import Auth from './Auth';
import { GiCancel } from "react-icons/gi";
function Example() {
   const {show,SetShow} =useContext(UserContext)
  const handleClose = () => {
    SetShow(false);
  };

  return (
    <React.Fragment>
      <Modal show={show} onHide={handleClose}>  
        <Modal.Header>
          <div className="d-flex w-100">
           
            <GiCancel 
              onClick={handleClose} 
              style={{ cursor: 'pointer' }} 
              className="ms-auto"
              size={25}
            />
          </div>
        </Modal.Header>
        <Modal.Body><Auth /></Modal.Body>
        
      </Modal>
    </React.Fragment>
  );
}

export default React.memo(Example);
