import { useState } from "react";

function Checkbox(props) {
    const [check, setCheck] = useState(false)

    const handleChange = (e) => {
        props.addValue(check ? -1 * props.value : props.value)
        setCheck(!check)
    }

    return (
        <div className="form-check">
            <input className="form-check-input" type="checkbox" id={props.name} name={props.name} checked={check} onChange={handleChange} />
            <label className="form-check-label" htmlFor={props.name}>
                {props.label}
            </label>
        </div>
    )
}

function ItensSelectionComponent(props) {

    const [value, setValue] = useState(0)
    const [error, setError] = useState('')
    const addValue = (newValue) => {
        setValue(value + newValue)
    }

    const nextHandle = () => {

        if (value == 0) {
            setError('Você deve escolher uma modalidade')
            return false
        }

        props.addTotal(value)
        props.addPhase(1)
    }

    return (
        <div>
            <section className="row">
                <h3 className="p-0 m-0">O que você quer ter na sua solução?</h3>
                <p><small>Escolha os itens do projeto:</small></p>
                <p className="error">{error}</p>
                <div className="col-12 col-lg-4">
                    <Checkbox name="login" label="Sistema de cadastro e login" value={100} addValue={addValue} />
                    <Checkbox name="chat" label="Chat" value={500} addValue={addValue} />
                    <Checkbox name="loja" label="e-commerce" value={4000} addValue={addValue} />
                    <Checkbox name="dashboard" label="Dashboard" value={1500} addValue={addValue} />
                    <Checkbox name="PDV" label="sistema de PDV (ponto de venda)" value={500} addValue={addValue} />
                </div>
                <div className="col-12 col-lg-4">
                    <Checkbox name="CMS" label="Sistema de gerenciamento de conteúdo" value={2500} addValue={addValue} />
                    <Checkbox name="ERP" label="ERP" value={6000} addValue={addValue} />
                    <Checkbox name="Homepage" label="Homepage" value={50} addValue={addValue} />
                    <Checkbox name="landingpage" label="Landing Page" value={50} addValue={addValue} />
                    <Checkbox name="squeezepage" label="Squeeze Page" value={30} addValue={addValue} />
                </div>
                <div className="col-12 col-lg-4">
                    <Checkbox name="google" label="Integrações Google" value={100} addValue={addValue} />
                    <Checkbox name="facebook" label="Integrações Facebook" value={100} addValue={addValue} />
                    <Checkbox name="payment" label="Integrações Pagamento" value={800} addValue={addValue} />
                    <Checkbox name="product-send" label="Integrações Envio de produto" value={300} addValue={addValue} />
                    <Checkbox name="api" label="Integrações API terceira" value={500} addValue={addValue} />
                </div>
            </section>

            <div className="text-end mt-5">
                <button className="btn btn-primary" onClick={() => props.setPhase(0)}>Escolher uma solução diferente</button>
                <button className="btn btn-primary mx-1" onClick={nextHandle}>Próximo</button>
            </div>
        </div>
    )
}
export default ItensSelectionComponent;
