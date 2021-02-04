import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Grid from '../template/grid'
import IconButton from '../template/iconButton'
import { add, changeDescription, search, clear } from './quadrinhosActions'

class quadrinhosForm extends Component {
    constructor(props) {
        super(props)
        this.keyHandler = this.keyHandler.bind(this)
    }

    componentWillMount() {
        this.props.search()
    }

    keyHandler(e) {
        const { clear, search } = this.props
        if (e.key === 'Enter') {
            search()
        } else if (e.key === 'Escape') {
            clear()
        }
    }

    render() {
        const { search } = this.props
        return (
            <div role='form' className='quadrinhosForm'>
                <Grid cols='12 9 10'>
                    <input id='description' className='form-control'
                        placeholder='Procure pelo quadrinho desejado'
                        onChange={this.props.changeDescription}
                        onKeyUp={this.keyHandler}
                        value={this.props.description}></input>
                </Grid>
                <Grid cols='12 3 2'>
                    <IconButton title='Pesquisar' style='info' icon='search'
                        onClick={search}></IconButton>
                </Grid>
            </div>
        )
    }
}

const mapStateToProps = state => ({description: state.quadrinhos.description})
const mapDispatchToProps = dispatch => 
    bindActionCreators({ changeDescription, search, clear }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(quadrinhosForm)