import React from 'react'
// import GoogleMapComponent from './GoogleMapComponent'

class Footer extends React.PureComponent{

    render(){
        return(
            <div className="divFooter">
                {/* <GoogleMapComponent /> */}
                <p> 
                    Bodybuilding.com℠ and BodySpace® are trademarks of Bodybuilding.com.
                    The content on our website is for informational and educational purposes only and is not intended as medical advice or to replace a relationship with a qualified healthcare professional.
                    <br/> <b>© 2021 Bodybuilding.com. All rights reserved.</b>
                </p>
            </div>
        )
    }
}

export default Footer;