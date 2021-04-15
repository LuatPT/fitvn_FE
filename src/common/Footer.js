import React from 'react'
import LoginForm from '../member/component/login/LoginForm'

class Footer extends React.PureComponent{

    render(){
        return(
            <div>
            <LoginForm />
            <p>Pham Tien Luat</p>
            </div>
        )
    }
}

export default Footer;