import React, { Component } from 'react';
import IconButton from '../../template/iconButton'
import { toastr } from 'react-redux-toastr'
import{ init } from 'emailjs-com';
init("user_obfFM60jhEZz4SnVfNc4T");
import emailjs from 'emailjs-com';

let mensagem = '';

export default class modalEmail extends Component {
    constructor(props) {
        super(props);
        this.state = { from_name: 'Áquilla', to_email: '', mssage: 'Enviou o email' };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    mountMessage(){
        if(this.props.listQuadrinhos.length > 0){
            this.props.listQuadrinhos.map(quadrinho => (
                mensagem += `<img src=${quadrinho.thumbnail.path +"."+ quadrinho.thumbnail.extension} alt="My Impression">
                <h2>titulo</h2>
                <p>${quadrinho.title}</p>
                <h2>Data lançamento</h2>
                <p>${quadrinho.dates[1].date}</p>
                <h2>Numero de páginas</h2>
                <p>${quadrinho.pageCount}</p>`
         ))
         console.log(mensagem) 
        } 
        
    }

    render() {
        return (
            <div className='center'>
                <form className="test-mailing">
                    <div>
                        <label className='about'>Receba os quadrinhos selecionados via E-Mail</label>
                        <input
                            id="test-mailing"
                            name="test-mailing"
                            onChange={this.handleChange}
                            placeholder="Digite seu email!"
                            required
                            value={this.state.to_email}
                            style={{ width: '100%' }}
                        />
                    </div>
                    <div className='center'>
                    <IconButton title='Enviar quadrinhos por email' style='success' onClick={this.handleSubmit}></IconButton>
                    </div>
                </form>
            </div>
        )
    }

    handleChange(event) {
        this.setState({ to_email: event.target.value })
    }

    handleSubmit(event) {
        if(this.props.listQuadrinhos.length == 0){
            toastr.warning('Cuidado!', 'Você não selecionou nenhum quadrinho!')
        } else {
            this.mountMessage();
            const templateId = 'template_4dbwqqn';

            this.sendFeedback(templateId, { from_name: this.state.from_name, message: mensagem, to_email: this.state.to_email })
        }
    }

    sendFeedback(templateId, variables) {
        emailjs.send(
            'gmail', templateId,
            variables
        ).then(res => {
            toastr.success('Sucesso!', 'Quadrinhos enviados com sucesso para o email digitado')
        })
            // Handle errors here however you like, or use a React error boundary
            .catch(err => toastr.error('Erro!', 'Houve um erro no envio, você digitou um email valido?'))
    }
}