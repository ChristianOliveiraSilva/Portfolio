import React from 'react';

import ItensSelectionComponent from "./ItensSelectionComponent";


function asdasdasdas(props) {
  return (
      <section>
          <h3 className="p-0 m-0">asdasdasdas</h3>
      </section>
  )
}

class Calculator extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      phase: 0
    }

    this.components = [
      ItensSelectionComponent,
      asdasdasdas
    ]

    this.renderCurrentComponent = this.renderCurrentComponent.bind(this)
    this.addPhase = this.addPhase.bind(this)
  }

  addPhase(value) {
    let phase = this.state.phase + value
    
    this.setState({
      phase: phase
    })
  }

  renderCurrentComponent () {
    if (this.components[this.state.phase]) {
      return this.components[this.state.phase]()
    } else {
      return <h4>Erro acometido</h4>      
    }
  }

  render() {
    return (
      <section className="container-fluid text-center my-5 py-4 bg-primary">
        <h1 className="text-light mb-2">Calculadora de projetos</h1>
        <p className="text-light mb-4">Escolha os item do projeto e veja o valor em tempo real</p>
        <div className="container bg-light rounded p-5 text-start">
          <div className="col-12">
            { this.renderCurrentComponent() }
          </div>
        </div>
      </section>
    );
  }

}

export default Calculator;