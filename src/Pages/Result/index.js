import React, { Component } from 'react'
import Nav from '../../Components/Nav/Nav';
import { withRouter } from 'react-router-dom';
import st from './style.js';
export default withRouter(class index extends Component {
    state = {
        result: [],
    }
    componentWillMount = () => {
        console.log(this.props.location.state.result);
        this.setState({
            result: this.state.result.concat(this.props.location.state.result),
        });
        console.log(this.state.result);
    }
    render() {

        return (
            <div>
                <Nav />
                <h1 style={st.title}>Result</h1>
                <div style={st.container}>
                    {
                        this.state.result.map((result, index) => {
                            return (
                                <div key={index}>
                                    <div style={st.content}><span style={st.label}>Calories: </span>{result.calories}</div>
                                    {result.dietLabels ? <div style={st.content}><span style={st.label}>Diet labels: </span>{result.dietLabels.join(", ")}</div> : null}
                                    {result.healthLabels ? <div style={st.health}><span style={st.label}>Health labels: </span>{result.healthLabels.join(", ")}</div> : null}
                                    {result.cautions ? <div style={st.caution}><span style={st.label}>Cautions: </span>{result.cautions.join(", ")}</div> : null}
                                    <div style={st.energy}><span style={st.label}>Energy (KCAL): </span>{result.totalNutrients.ENERC_KCAL.quantity}</div>
                                    <div style={st.content}><span style={st.label}>Fat: </span>{result.totalNutrients.FAT.quantity} {result.totalNutrients.FAT.unit}</div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
});
