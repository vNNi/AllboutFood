import React, { Component } from 'react'
import errorImage from '../../Assets/Images/error.svg';
import st from './style.js';
import { Link } from 'react-router-dom';
export default class index extends Component {
    render() {
        return (
            <div style={st.container}>
                <img src={errorImage} style={st.imageError} alt="server error" />
                <p style={st.description}>Ops.. Ocorreu um erro com servidor, já estamos tentando consertar!</p>
                <Link to="/" style={st.link}>Voltar á página inicial</Link>
            </div>
        )
    }
}
