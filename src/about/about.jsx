import React from 'react'

import PageHeader from '../template/pageHeader'

import Card from '../components/Card/card'

export default props => (
    <div className='about'>
        <Card grey>
        <PageHeader name='Teste SoftDesign' small='Sistema quadrinhos Marvel' />

        <h2>Teste SoftDesign</h2>
        <p>O objetivo do teste é desenvolver um app capaz de consumir a API de quadrinhos da Marvel</p>
        <h2>Funções do App</h2>
        <p>O App tem como funcionalidades listar os quadrinhos, filtrar de acordo com as buscas e enviar por email os quadrinhos selecionados</p>
        <h2>Quem desenvolveu</h2>
        <p>Áquilla Odlanier Faria Nascimento</p>
        </Card>
    </div>
)