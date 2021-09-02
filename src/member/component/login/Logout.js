import React from 'react';

function Logout (props){
    function doLogout(){
        const {logoutAction} = props ;
        logoutAction();
    }
    return(
        <span onClick={doLogout}>
            Logout
        </span>
        )
}

export default Logout;