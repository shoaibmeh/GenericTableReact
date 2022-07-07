import React from 'react'
import { Modal } from "react-bootstrap";
import EditableRow from './EditableRow';
import { useState } from 'react';
import ReadData from './ReadData';
type Item = {
    id: number;
    first_name: string;
    last_name: string;
    dob: number;
    phone: number;
    address: string;
    newContacts: string;

}

interface DataTableProps<T> {
    asers: T[];
};

function DataTable<T extends Item>({ asers }: DataTableProps<T>) {
    const [query, setQuery] = useState("");

    const keys = ["first_name", "last_name", "phone"]
    const [data, setData] = useState(asers);

    // Modal state-----------------

    const [showModal, setShowModal] = useState(false);

    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);

    // component hide show in modal

    const [isAddShow, setIsAddShow] = React.useState(true);

    const handleAddShowClick = () => {
        setIsAddShow(false);
        handleShow()
    };
    const handleAddHideClick = () => {
        setIsAddShow(true);
        handleClose()
    }
    const [isEditShow, setIsEditShow] = React.useState(true);

    const handleEditShowClick = () => {
        setIsEditShow(false);
        handleShow()
    };
    const handleEditHideClick = () => {
        setIsEditShow(true);
        handleClose()
    }

    // ascending/desc state----------------

    const [order, setOrder] = useState("Ascending");

    // add user state=--------------------

    const [addFormData, setAddFormData] = useState({
        first_name: '',
        last_name: '',
        dob: '',
        phone: '',
        address: '',
    });
    // edit row-------
    
    const [editTableData, setEditTableData] = useState({
        id: '',
        first_name: '',
        last_name: '',
        dob: '',
        phone: '',
        address: '',
    });
    const handleEditFormChange = (event) => {
        event.preventDefault()
        const fieldName = event.target.getAttribute("name")
        const fieldValue = event.target.value;

        const newFormData = { ...editTableData };
        newFormData[fieldName] = fieldValue;
        setEditTableData(newFormData);
        // const { name, value } = event.target
        // setEditTableData({ ...editTableData, [name]: value })

    }
    // ADD FORM CHANGE && SUBMIT _-----------------------

    const handleAddFormChange = (event: { preventDefault: () => void; target: { getAttribute: (arg0: string) => any; value: any; }; }) => {
        event.preventDefault();
        const fieldName = event.target.getAttribute('name');
        const fieldValue = event.target.value;

        const newFormData = { ...addFormData };
        newFormData[fieldName] = fieldValue;
        setAddFormData(newFormData);
    };
    const handleAddFormSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault();

        const newContact = {
            id: data.length + 1,
            first_name: addFormData.first_name,
            last_name: addFormData.last_name,
            dob: addFormData.dob,
            phone: addFormData.phone,
            address: addFormData.address,
        };
        const newContacts = [...data, newContact];
        
        setData(newContacts);
        window.localStorage.setItem("data",JSON.stringify(newContacts));
        handleAddHideClick()
    };

    const handleDeleteClick = (itemid: number) => {
        const newContacts = [...data]
        const index = data.findIndex((contact) => contact.id === itemid);
        newContacts.splice(index, 1);
        setData(newContacts);
    }

    // for sort a to z && z to a

    const sortingUp = (col: string) => {
        if (order === "Ascending") {
            const sorted = [...data].sort((a, b) =>
                a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1);
            setData(sorted);
            setOrder("Descending")
        }
    }
    const sortingDown = (col: string) => {
        if (order === "Descending") {
            const sorted = [...data].sort((a, b) =>
                a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1);
            setData(sorted);
            setOrder("Ascending")
        }
    }

    // for sort by 1,2,3 && 3,2,1

    const sortingIdDown = () => {
        if (order === "Descending") {
            const sorted = [...data].sort((a, b) =>
                b.id - a.id
            );
            setData(sorted);
            setOrder("Ascending")
        }
    }
    const sortingIdUp = () => {
        if (order === "Ascending") {
            const sorted = [...data].sort((a, b) =>
                a.id - b.id
            );
            setData(sorted);
            setOrder("Descending")
        }
    }
    // EDIT ROW STATE---------------------

    const [editTableDataId, setEditTableDataId] = useState(null);
    const handleEditClick = (event, data) => {
        console.log(data);
        event.preventDefault();
        setEditTableDataId(data.id);

        const formValues = {
            id: data.id,
            first_name: data.first_name,
            last_name: data.last_name,
            dob: data.dob,
            phone: data.phone,
            address: data.address,
        };

        setEditTableData(formValues);
        console.log("setEditTableData")
        handleEditShowClick()
    };
    // save edited data--------------------

    const handleEditFormSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault();

        const editedContact = {
            id: editTableData.id,
            first_name: editTableData.first_name,
            last_name: editTableData.last_name,
            dob: editTableData.dob,
            phone: editTableData.phone,
            address: editTableData.address,
        };
        const newContacts = [...data];
        const index = data.findIndex((contact) => contact.id === editTableDataId);
        newContacts[index] = editedContact;
        setData(newContacts)
        setEditTableDataId(null)
        handleEditHideClick()
    };
    return (
        <>

        {/* ADD User Button---------------- */}

            <div className='d-flex justify-content-end mr-5 mt-5 mb-3'>
                <div className=" mr-4">
                    <button className='btn-add-user' onClick={handleAddShowClick}><i className="fas fa-plus"></i> Add User
                    </button>
                </div>

                {/* Sort USers Button --------*/}

                <div className="dropdown">
                    <button className="dropbtn mr-4"><i className="fas fa-sort-amount-up"></i> Sort</button>
                    <div className="dropdown-content">
                        <h4>Sort By</h4>
                        <p>Id : <button onClick={() => sortingIdDown()} ><i className="fas fa-sort-numeric-down-alt"></i></button><button onClick={() => sortingIdUp()} ><i className="fas fa-sort-numeric-down"></i></button>
                        </p>
                        <p >First Name :<button onClick={() => sortingDown('first_name')} ><i className="fas fa-sort-alpha-down-alt"></i></button> <button onClick={() => sortingUp('first_name')} ><i className="fas fa-sort-alpha-up"></i></button>
                        </p>
                        <p >Last Name :  <button onClick={() => sortingDown('last_name')} ><i className="fas fa-sort-alpha-down-alt"></i></button><button onClick={() => sortingUp('last_name')} ><i className="fas fa-sort-alpha-up"></i></button>
                        </p>
                    </div>
                </div>
                {/* Search user button----------- */}

                <div className="bar">
                    <input type="text" placeholder='Enter your search terms' onChange={event => { setQuery(event.target.value) }} />
                </div>
            </div>

            {/* DAta Table----------------- */}

            <table>
                <thead>
                    <tr>
                        <th> ID</th>
                        <th> FIRST NAME</th>
                        <th>LAST NAME</th>
                        <th >DOB</th>
                        <th >PHONE</th>
                        <th>ADDRESS</th>
                        <th>ACTIONS</th>
                    </tr>
                </thead>
                <tbody>
                    {data.filter(
                        (item) =>
                            keys.some((key) => item[key].toLowerCase().includes(query))).map((item) => (
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.first_name}</td>
                                    <td>{item.last_name}</td>
                                    <td>{item.dob}</td>
                                    <td>{item.phone}</td>
                                    <td>{item.address}</td>
                                    <td><button className='btn-delete-user' onClick={() => { window.confirm('Are you sure you want to delete this Card?') && handleDeleteClick(item.id) }}><i className="fas fa-trash-alt"></i></button>
                                        <button className='btn-edit-user' onClick={(event) => handleEditClick(event, item)} ><i className="fas fa-edit"></i></button></td>
                                </tr>

                            ))}
                </tbody>
            </table>


            <>
                {/*------------------- modal ---------------------------- */}


                <Modal show={showModal} onHide={handleAddHideClick}>

                    <Modal.Body>
                        {isAddShow ?
                            <></>
                            :
                            <ReadData
                                handleAddFormChange={handleAddFormChange}
                                handleAddHideClick={handleAddHideClick}
                                handleAddFormSubmit={handleAddFormSubmit}

                            />
                        }
                        {isEditShow ?
                            <></>
                            :
                            <EditableRow
                                handleEditFormChange={handleEditFormChange}
                                editTableData={editTableData}
                                handleEditHideClick={handleEditHideClick}
                                handleEditFormSubmit={handleEditFormSubmit}
                                handleClose={handleClose}
                            />
                        }
                    </Modal.Body>

                </Modal>

            </>
        </>

    );
};

export default DataTable;