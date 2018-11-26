import React, { Component } from 'react';
import st from './style.js';
import menu from '../../Assets/Images/menu.svg';
import logo from '../../Assets/Images/calculator.svg'

export default class Nav extends Component {
    render() {
        return (
            <nav style={st.container}>
                <div>
                    <img src={menu} style={st.menu} alt="icone de menu" />
                </div>
                <div style={st.logo}>
                    <img src={logo} style={st.imgLogo} alt="logo do webapp allboutfood" />
                </div>
            </nav>
        );
    }
}