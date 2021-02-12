import React from 'react'

export default props => {
    if(props.test) {
        return props.children
    } else {
        return (
            <p className='about'>Nenhum dado encontrado</p>
        )
    }
}