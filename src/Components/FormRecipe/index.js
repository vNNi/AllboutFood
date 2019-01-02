import React, { Component } from 'react'
import st from './style';
import RecipeLoading from '../Loadings/RecipeLoading/index';
export default class index extends Component {
    state = {
        loadingRequest: false,
    }
    newRecipe = (e) => {
        e.preventDefault();
        this.setState({
            loadingRequest: true,
        });
    }
    render() {
        return (
            <div>
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
                        <button style={st.button} type="submit" onClick={this.newRecipe}>Calcular</button>
                    </div>
                </form>
                {
                    this.state.loadingRequest ? <RecipeLoading /> : null
                }
            </div>
        )
    }
}
