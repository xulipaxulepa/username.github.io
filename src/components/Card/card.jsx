import './card.css'

import React from 'react'

function getColor(props) {
    if(props.black) {
        return "Black"
    }

    if(props.grey) {
        return "Grey"
    }

    return ""
}

export default props => {
    return (
        <div className={`Card ${getColor(props)}`}>
            <div className="Content">
                {props.children}
            </div>
        </div>
    )
}