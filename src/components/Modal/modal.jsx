import React from 'react'
import IconButton from '../../template/iconButton'
import ComicBook from '../../template/comicBook'
import Card from '../../components/Card/card'
import If from '../../template/if'

export default props => (
    <div className='container'>
    <nav className='navbar navbar-inverse bg-inverse'>
        <div className='menu-img'>
        <div className='container'>
            <div className='navbar-header'>
                <a className='navbar-brand'>
                    <i className='fa fa-book'></i> Teste SoftDesign
                </a>
            </div>
        

        <div id='navbar' className='navbar-right navbar-collapse collapse'>
            <ul className='nav navbar-nav botaosairmodal'>
                <li><IconButton title='Sair' style='danger' onClick={() => props.onClose(false, props.quadrinho)}></IconButton></li>
            </ul>
        </div>
        </div>
        </div>
    </nav>
    <div className='container about'>
    <Card black>
    <ComicBook comicCover={props.quadrinho.thumbnail.path +"."+ props.quadrinho.thumbnail.extension}></ComicBook>
    <h2>Autores</h2>
    <If test={props.quadrinho.creators.available}>
    {props.quadrinho.creators.items.map((autore) => <p key={autore.resourceURI}>{autore.name}</p>)}
    </If>
    <h2>titulo</h2>
    <p>{props.quadrinho.title}</p>
    <h2>Data lançamento</h2>
    <p>{props.quadrinho.dates[1].date}</p>
    <h2>Numero de páginas</h2>
    <p>{props.quadrinho.pageCount}</p>
    <h2>Personagens presentes neste quadrinho</h2>
    <If test={props.quadrinho.characters.available}>
    {props.quadrinho.characters.items.map((personagens) => <p key={personagens.resourceURI}>{personagens.name}</p>)}
    </If>
    </Card>
    </div>
    <div className='botaomodalselectquadrinho'>
        <IconButton title={props.quadrinho.isSelected? 'Desselecionar Quadrinho': 'Selecionar Quadrinho'} style={props.quadrinho.isSelected? 'danger': 'success'} onClick={() => props.onSelect(props.quadrinho)}></IconButton>
    </div>
    </div>
)