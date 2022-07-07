import React from 'react'
import { Button } from "react-bootstrap";

function ReadData({ handleAddFormChange,handleAddFormSubmit,handleAddHideClick, }) {


    return (
        <>
            <form onSubmit={handleAddFormSubmit}>
            <h4 >Add User</h4>
            <hr></hr>
            <input className='form-control mt-3' type="text" name='first_name' placeholder='FIRST NAME' required onChange={handleAddFormChange} />
            <input className='form-control mt-3' type="text" name='last_name' placeholder='LAST NAME' required onChange={handleAddFormChange} />
            <input className='form-control mt-3' type="text" name='dob' placeholder='DATE OF BIRTH' onChange={handleAddFormChange} />
            <input className='form-control mt-3' type="text" name='phone' placeholder='PHONE' onChange={handleAddFormChange} />
            <input className='form-control mt-3' type="text" name='address' placeholder='ADDRESS' onChange={handleAddFormChange} />

            <Button className='float-right mt-5' variant="secondary" onClick={handleAddHideClick }>
                Close
            </Button>
            <Button className=' float-right pl-4 pr-4 mr-3 mt-5' variant="primary" type='submit'>
                Add
            </Button>
        </form>
                
            
        </>
    )
}

export default ReadData;