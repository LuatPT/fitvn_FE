import React from 'react'

const WrapperComponent = (TempComponent, typeMe) => (
    <TempComponent typeComponent={typeMe}/>
)

export default WrapperComponent;