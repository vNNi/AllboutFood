import React, { Component } from 'react';
import Nav from '../Components/Nav/Nav';
import st from './style';
import FormRecipe from '../Components/FormRecipe/index';
class Index extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Nav />
        </header>
        <section style={st.main} id="NewRecipe">
          <h1 style={st.title}>Receita</h1>
          <div>
            <p style={st.subDesc}>Descreva sua receita, incluindo um título e os ingredientes para receber o calculo do seu prato!</p>
            <FormRecipe />
          </div>
        </section>

      </div>
    );
  }
}

export default Index;
