import React from 'react'

const WrapperComponent = (TempComponent, typeMe, param) => (
    <TempComponent typeComponent={typeMe} {...param}/>
)

export default WrapperComponent;