import React from 'react';
import { NavLink } from 'react-router-dom';

const SideBar = () => {
    return (
        <>
            <div className='main'>
                <hr />
                <NavLink to="/" exact={`${React}`} className="active_class" ><p> Dashboard</p></NavLink>
                <hr />
                <NavLink to="/DataTable" exact={`${React}`} className="active_class" > <p>Table 1</p> </NavLink>
                <hr />
                <NavLink exact={`${React}`} className="active_class" to="/SecondTable"> <p> Table 2 </p> </NavLink>
                <hr />
            </div>
        </>
    );
};
export default SideBar;