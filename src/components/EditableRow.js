import React from 'react'
import { Button } from "react-bootstrap";

const EditableRow = ({ editTableData, handleEditFormChange, handleEditHideClick, handleEditFormSubmit, handleClose }) => {
    return (
        <>
            <form onSubmit={handleEditFormSubmit}>
                <h4 >Edit User</h4>
                <hr></hr>
                <input type="text" className='form-control mt-3' value={editTableData.first_name} onChange={handleEditFormChange} name="first_name" ></input>
                <input type="text" className='form-control mt-3' value={editTableData.last_name} onChange={handleEditFormChange} name="last_name" ></input>
                <input type="text" className='form-control mt-3' value={editTableData.dob} onChange={handleEditFormChange} name="dob" ></input>
                <input type="text" className='form-control mt-3' value={editTableData.phone} onChange={handleEditFormChange} name="phone" ></input>
                <input type="text" className='form-control mt-3' value={editTableData.address} onChange={handleEditFormChange} name="address" ></input>
                <Button className='float-right mt-5' variant="secondary" onClick={handleEditHideClick}>
                    Close
                </Button>
                <Button className=' float-right mr-3 mt-5' variant="primary" type='submit' onClick={handleClose}>
                    Update
                </Button>
            </form>
        </>
    )
};

export default EditableRow;