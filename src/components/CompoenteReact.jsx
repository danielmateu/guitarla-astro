import React, { useState } from 'react'

export const CompoenteReact = () => {

    const [cliente, setCliente] = useState(`Dani`)

    console.log('Cliente y servidor');
    return (
        <div>{cliente}</div>
    )
}
