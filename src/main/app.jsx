import 'modules/bootstrap/dist/css/bootstrap.min.css'
import 'modules/font-awesome/css/font-awesome.min.css'
import '../template/custom.css'

import Menu from '../template/menu'

import React from 'react'

import Routes from './routes'

import Messages from '../template/messages'



export default props => (
    <div className='layer'>
        <Menu />
        <Routes />
        <Messages />
        
    </div>
)