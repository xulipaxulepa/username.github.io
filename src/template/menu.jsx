import React from 'react'

export default props => (
    <nav className='navbar navbar-inverse bg-inverse'>
        <div className='menu-img'>
        <div className='container'>
            <div className='navbar-header'>
                <a className='navbar-brand' href='#'>
                    <i className='fa fa-book'></i> Teste SoftDesign
                </a>
            </div>
        

        <div id='navbar' className='navbar-right navbar-collapse collapse'>
            <ul className='nav navbar-nav'>
                <li><a href='#/quadrinhoss'>Pesquisar Quadrinhos</a></li>
                <li><a href='#/about'>Sobre</a></li>
            </ul>
        </div>
        </div>
        </div>
    </nav>
    
)