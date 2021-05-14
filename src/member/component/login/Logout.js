import React from 'react';

function Logout (props){
    function doLogout(){
        const {logoutAction} = props ;
        logoutAction();
       
    }
    return(
        <span className="navText" onClick={doLogout}>
            Logout
        </span>
        )
}

export default Logout;