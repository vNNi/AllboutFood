import React, { Component } from 'react'
import st from './style';
export default class index extends Component {
    render() {
        return (
            <form>
                <div style={st.formGroup}>
                    <label style={st.label}>Título </label>
                    <input style={st.input} type="text"></input>
                </div>
                <div style={st.formGroup}>
                    <label style={st.label}>Quantidade de Pessoas </label>
                    <input style={st.input} type="number"></input>
                </div>
                <div style={st.formGroup}>
                    <label style={st.label}>Ingredientes </label>
                    <textarea style={st.textArea} placeholder="1 banana, 2 apples, 1 fish"></textarea>
                </div>
                <div style={st.buttonContainer}>
                    <button style={st.button} type="submit">Calcular</button>
                </div>
            </form>
        )
    }
}
