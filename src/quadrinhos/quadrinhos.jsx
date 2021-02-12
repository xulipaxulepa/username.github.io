import React, { Component } from 'react'
import axios from 'axios'

import PageHeader from '../template/pageHeader'
import Form from './quadrinhosForm'
import List from './quadrinhosList'
import Card from '../components/Card/card'

import {BASE_URL, API_KEY} from '../enviroments/enviroment'
import Loader from '../components/Loader/loader'

export default class quadrinhos extends Component {
    
    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this)
        this.handleSearche = this.handleSearche.bind(this)
        this.handleClear = this.handleClear.bind(this)
        this.state = {description: '', list: [], isLoading: true}

        this.refresh()
    }

    refresh(description= '') {
        const search = description ? description : ''
        //?sort=-reatedAt${search}
        if(search == ''){
            axios.get(`${BASE_URL}comics?apikey=${API_KEY}`).then(resp => this.setState(
                {...this.state, 
                    description, 
                    list: resp.data,
                    isLoading: false
                })
            )
        } else {
            axios.get(`${BASE_URL}comics?title=${search}&apikey=${API_KEY}`).then(resp => this.setState(
                {...this.state, 
                    description, 
                    list: resp.data,
                    isLoading: false
                })
            )
        }
        
    }

    handleChange(e){
        console.log(e.target.value)
        this.setState({...this.state, description: e.target.value, isLoading: true})
    }

    handleSearche(){
        this.refresh(this.state.description)
    }

    handleClear(){
        this.refresh()
    }

    render() {
       return (
            <div>
                <Card black>
                <PageHeader name='Quadrinhos Marvel' small='Os maiores heróis do universo' />
                <Form description={this.state.description} 
                handleChange={this.handleChange}
                handleSearche={this.handleSearche}
                handleClear={this.handleClear}/>
                </Card>
                <Card grey>
                <Loader isLoading={this.state.isLoading}/>
                <List list={this.state.list}/>
                </Card>
            </div>
        )
    }
}