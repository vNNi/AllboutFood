import React, { Component } from 'react'
import st from './style.js';
import cookingLogo from '../../../Assets/Images/grill.svg';

export default class index extends Component {
    state = {
        dots: "...",
    }
    loadingDots = (e) => {
        setInterval(() => {
        }, 500);
    }
    render() {
        return (
            <div style={st.container}>
                <div style={st.content}>
                    <img src={cookingLogo} style={st.logo} alt="its a grill like cooking, to represent the loading" />
                    <span onLoad={this.loadingDots()}>
                        {
                            `Cooking ${this.state.dots}`
                        }
                    </span>
                </div>
            </div>
        )
    }
}
