import React from 'react';

function Logout (props){
    function doLogout(){
        const {logoutAction,isLogin} = props ;
        console.log(isLogin);
        logoutAction();
       
    }
    return(
        <span className="navText" onClick={doLogout}>
            Logout
        </span>
        )
}

export default Logout;