import React, { Component } from 'react';
import IconButton from '../../template/iconButton'
import { toastr } from 'react-redux-toastr'
import { init } from 'emailjs-com';
init("user_obfFM60jhEZz4SnVfNc4T");
import emailjs from 'emailjs-com';
import LoaderEmail from '../Loader/loaderEmail'

import Modal from 'react-modal'

let mensagem = '';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        maxHeight: '100vh',
        overFlowY: 'auto'
    }
};

export default class modalEmail extends Component {
    constructor(props) {
        super(props);
        this.state = { showModal: false, from_name: 'Áquilla', to_email: '', mssage: 'Enviou o email', isLoading: false };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.showModal = this.showModal.bind(this)
        this.closeModal = this.closeModal.bind(this)
        this.formatDate = this.formatDate.bind(this);
    }

    showModal(value) {
        if (this.props.listQuadrinhos.length == 0) {
            toastr.warning('Cuidado!', 'Você não selecionou nenhum quadrinho!')
        }
        if (this.state.to_email == '') {
            toastr.warning('Cuidado!', 'Você não digitou um email!')
        } else {
            this.setState({ showModal: value })
        }
    }

    closeModal(value) {
        this.setState({ showModal: value })
    }

    formatDate(quadrinho) {
        let data = new Date(quadrinho.dates[0].date);
        let dataFormatada = ((data.getDate() + "/" + ((data.getMonth() + 1)) + "/" + data.getFullYear()));
        return dataFormatada.toString()
    }

    mountMessage() {
        if (this.props.listQuadrinhos.length > 0) {
            this.props.listQuadrinhos.map(quadrinho => (
                mensagem += `<img src=${quadrinho.thumbnail.path + "." + quadrinho.thumbnail.extension} alt="My Impression">
                <h2>titulo</h2>
                <p>${quadrinho.title}</p>
                <h2>Data lançamento</h2>
                <p>${this.formatDate(quadrinho)}</p>
                <h2>Numero de páginas</h2>
                <p>${quadrinho.pageCount}</p>`
            ))
            console.log(mensagem)
        }

    }

    render() {
        return (
            <div className='center'>
                <Modal isOpen={this.state.showModal} style={customStyles}>
                    <fieldset className='titulomodalenvioemail'><b>Tem certeza que deseja enviar esse email?</b></fieldset>
                    <div className='center'>
                        <p>Os quadrinhos selecionados são:</p>
                        {this.props.listQuadrinhos.map(quadrinho => (
                            <p key={quadrinho.id}>{quadrinho.title}</p>
                        ))}
                    </div>
                    <fieldset className='center'>
                    <IconButton title='Enviar' style='success' onClick={this.handleSubmit}></IconButton>
                    <IconButton title='Cancelar' style='danger' onClick={() => this.closeModal(false)}></IconButton>
                    </fieldset>
                </Modal>
                <LoaderEmail isLoading={this.state.isLoading}>
                    <div className="test-mailing">
                        <div>
                            <label className='about labelemailcentralizada'>Receba os quadrinhos selecionados via E-Mail</label>
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
                            <IconButton title='Enviar quadrinhos por email' style='success' onClick={() => this.showModal(true)}></IconButton>
                        </div>
                    </div>
                </LoaderEmail>
            </div>
        )
    }

    handleChange(event) {
        this.setState({ to_email: event.target.value })
    }

    handleSubmit(event) {
        if (this.props.listQuadrinhos.length == 0) {
            toastr.warning('Cuidado!', 'Você não selecionou nenhum quadrinho!')
        } else {
            this.mountMessage();
            const templateId = 'template_4dbwqqn';
            this.setState({ isLoading: true, showModal: false })
            this.sendFeedback(templateId, { from_name: this.state.from_name, message: mensagem, to_email: this.state.to_email })
        }
    }

    sendFeedback(templateId, variables) {
        emailjs.send(
            'gmail', templateId,
            variables
        ).then(res => {
            this.setState({ isLoading: false }),
                toastr.success('Sucesso!', 'Quadrinhos enviados com sucesso para o email digitado')
        })
            // Handle errors here however you like, or use a React error boundary
            .catch(err => {
                this.setState({ isLoading: false }),
                    toastr.error('Erro!', 'Houve um erro no envio, você digitou um email valido?')
            })
    }
}