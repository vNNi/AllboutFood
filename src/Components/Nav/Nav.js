import React, { Component } from 'react';
import st from './style.js';
import menuIcon from '../../Assets/Images/menu.svg';
import logo from '../../Assets/Images/calculator.svg';
import close from '../../Assets/Images/left-arrow.svg';

export default class Nav extends Component {
    state = {
        menuOpen: false,
    }
    handleMenu = (e) => {
        let menuState = this.state.menuOpen;
        console.log(menuState);
        this.setState({
            menuOpen: !menuState,
        });
    }
    render() {
        const menu = (
            <div style={st.menuContainer} onClick={this.handleMenu}>
                <div style={st.content}>
                    <div style={st.logoContainer}>
                        <img src={logo} style={st.imgLogo} alt=" logo do webapp allboutfood " />
                    </div>
                    <div>
                        <img src={close} style={st.closeIcon} onClick={this.handleMenu} alt=" fechar menu " />
                    </div>
                </div>
            </div >
        );
        return (
            <div>
                <nav style={st.container}>
                    <div onClick={this.handleMenu}>
                        <img src={menuIcon} style={st.menu} alt="icone de menu" />
                    </div>
                    <div style={st.logo}>
                        <img src={logo} style={st.imgLogo} alt="logo do webapp allboutfood" />
                    </div>
                </nav>
                <div>
                    {
                        this.state.menuOpen ? menu : null
                    }
                </div>
            </div>
        );
    }
}