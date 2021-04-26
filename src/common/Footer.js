import React from 'react'
import LoginContainer from '../member/container/login/LoginContainer'

class Footer extends React.PureComponent{

    render(){
        return(
            <div>
            <LoginContainer />
            <p>Pham Tien Luat</p>
            </div>
        )
    }
}

export default Footer;