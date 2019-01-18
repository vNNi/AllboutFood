import React, { Component } from 'react'
import st from './style';
import RecipeLoading from '../Loadings/RecipeLoading/index';
import ApiService from '../../Services/ApiService';
import { withRouter } from 'react-router-dom';
export default class index extends Component {
    constructor(props) {
        super(props);
        this.apiservice = new ApiService();
    }
    state = {
        loadingRequest: false,
        titleRecipe: "",
        ingr: [],
        yield: "",
        badResponse: false,
    }
    newRecipe = (e) => {
        e.preventDefault();
        this.setState({
            loadingRequest: true,
        });
        const recipe = {
            "title": this.state.titleRecipe,
            "ingr": this.state.ingr,
            "yield": this.state.yield,
        };
        this.apiservice.newRecipe(recipe);
    }
    handleTitle = (e) => {
        this.setState({
            titleRecipe: e.target.value
        });
    }
    handleIngr = (e) => {
        let newIngr = e.target.value.split(",");
        this.setState({
            ingr: [...newIngr]
        });
    }
    handleYield = (e) => {
        this.setState({
            yield: e.target.value.toString()
        });
    }
    render() {
        return (
            <div>
                <form>
                    <div style={st.formGroup}>
                        <label style={st.label} >Título </label>
                        <input style={st.input} type="text" onChange={this.handleTitle}></input>
                    </div>
                    <div style={st.formGroup}>
                        <label style={st.label}>Quantidade de Pessoas </label>
                        <input style={st.input} type="number" onChange={this.handleYield}></input>
                    </div>
                    <div style={st.formGroup}>
                        <label style={st.label}>Ingredientes </label>
                        <textarea style={st.textArea} placeholder="1 banana, 2 apples, 1 fish" onChange={this.handleIngr}></textarea>
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
