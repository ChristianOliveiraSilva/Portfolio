
function Checkbox(props) {
    
    return (
        <div className="form-check">
            <input className="form-check-input" type="checkbox" id={props.name} name={props.name} />
            <label className="form-check-label" htmlFor={props.name}>
                {props.label}
            </label>
        </div>
    )
}


function ItensSelectionComponent(props) {
    return (
        <section className="row">
            <h3 className="p-0 m-0">O que você quer ter na sua solução?</h3>
            <p><small>Escolha os itens do projeto:</small></p>
            <div className="col-12 col-lg-4">
                <Checkbox name="" label="asdasd" />
                <Checkbox name="" label="asdasd" />
                <Checkbox name="" label="asdasd" />
                <Checkbox name="" label="asdasd" />
                <Checkbox name="" label="asdasd" />
            </div>
            <div className="col-12 col-lg-4">
                <Checkbox name="" label="asdasd" />
                <Checkbox name="" label="asdasd" />
                <Checkbox name="" label="asdasd" />
                <Checkbox name="" label="asdasd" />
                <Checkbox name="" label="asdasd" />                
            </div>
            <div className="col-12 col-lg-4">
                <Checkbox name="" label="asdasd" />
                <Checkbox name="" label="asdasd" />
                <Checkbox name="" label="asdasd" />
                <Checkbox name="" label="asdasd" />
                <Checkbox name="" label="asdasd" />                
                <button className="btn btn-primary" onClick={() => props.addPhase(1)}>Próximo</button>
            </div>
        </section>
    )
}
export default ItensSelectionComponent;
