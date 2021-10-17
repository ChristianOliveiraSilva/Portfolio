import React from 'react';

import ItensSelectionComponent from "./ItensSelectionComponent";
import SpecificSolution from "./SpecificSolution";
import ProjectDescription from "./ProjectDescription";
import TotalSolution from "./TotalSolution";

class Calculator extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      phase: 1,
      total: 0,
    }

    this.components = [
      SpecificSolution,
      ItensSelectionComponent,
      ProjectDescription,
      TotalSolution,
    ]

    this.hourValue = 35

    this.renderCurrentComponent = this.renderCurrentComponent.bind(this)
    this.setPhase = this.setPhase.bind(this)
    this.setTotal = this.setTotal.bind(this)
    this.addTotal = this.addTotal.bind(this)
    this.addPhase = this.addPhase.bind(this)
  }

  addPhase(value) {
    this.setState({
      phase: this.state.phase + value
    })
  }

  setPhase(value) {
    this.setState({
      phase: value
    })
  }

  setTotal(value) {
    this.setState({
      total: value
    })
  }

  addTotal(value) {
    this.setState({
      total: this.state.total + value
    })
  }

  renderCurrentComponent () {
    if (this.components[this.state.phase]) {
      const Comp = this.components[this.state.phase]
      const props = {
        total: this.state.total,
        hourValue: this.hourValue,
        addPhase: this.addPhase,
        setPhase: this.setPhase,
        addTotal: this.addTotal,
        setTotal: this.setTotal,
      }
      return <Comp {...props} />
    } else {
      return <h4>Erro cometido</h4>      
    }
  }

  render() {
    return (
      <section className="container-fluid text-center my-5 py-4 bg-primary">
        <h1 className="text-light mb-2">Calculadora de projetos</h1>
        <p className="text-light mb-4">Escolha os item do projeto e veja o valor em tempo real</p>
        <div className="container bg-light rounded p-5 text-start">
          { this.renderCurrentComponent() }
        </div>
      </section>
    );
  }

}

export default Calculator;