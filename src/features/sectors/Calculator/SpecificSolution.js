import { useState } from "react";

function SpecificSolution(props) {
    const [name, setName] = useState('')
    const [preference, setPreference] = useState(1)
    const [hours, setHours] = useState(100)
    const [error, setError] = useState('')

    const nextHandle = () => {
        sessionStorage.setItem('name', name)
        props.setTotal(calculateTotal(hours, preference))
        props.setPhase(3)
    }

    const calculateTotal = (hours, preference) => {
        preference = parseInt(preference)
        hours = parseInt(hours)
        let total = hours * props.hourValue
        
        switch(preference) {
            case 1:
                return total / 2
            case 2:
                return total
            case 3:
                return total * preference
            default:
                return total
        }
    }

    return (
        <div className="row">
            {error &&
                <div className="col-12">
                    <p className="error">{error}</p>
                </div>
            }

            <div className="col-6">
                <h4>Nome do solicitante:</h4>
                <input type="text" className="form-control" placeholder="Seu nome ou nome da empresa" value={name} onChange={(e) => setName(e.target.value)} />
                
                <h4 className="mt-3">Contato do solicitante:</h4>
                <input type="text" className="form-control" placeholder="Telefone ou e-mail" />

                <h4 className="mt-3">Prazo:</h4>
                <input type="date" className="form-control" placeholder="Prazo" />

                <h4 className="mt-3">Horas Dedicadas esperadas:</h4>
                <input type="number" className="form-control" placeholder="Horas"  value={hours} onChange={(e) => setHours(e.target.value)}/>

                <h4 className="mt-3">Preferencia de modalidade:</h4>
                <select className="form-select" name="preference" value={preference} onChange={(e) => setPreference(e.target.value)}>
                    <option value="1" >Dedicação parcial</option>
                    <option value="2" >Dedicação total</option>
                    <option value="3" >Dedicação exclusiva</option>
                </select>

                <div className="text-end mt-4">
                    <button className="btn btn-primary m-1" onClick={nextHandle}>Próximo</button>
                </div>

            </div>
            <div className="col-6">
                <h4>Defina sua Proposta:</h4>
                <textarea className="form-control" rows="6" placeholder="Descrição total do projeto"></textarea>

                <h4 className="mt-3 mb-0 pb-0">Descrição:</h4>
                <p className="m-0 p-0">(PDF, DOCX ou outros)</p>
                <input type="file" className="form-control" placeholder="Prazo" />

                <h4 className="mt-3">Prototipagem:</h4>
                <p className="m-0 p-0">(XD, PSD ou figma)</p>
                <input type="file" className="form-control" placeholder="Prazo" />
            </div>
            <div className="col-6">

            </div>
            <div className="col-6">
            </div>
        </div>
    )
}
export default SpecificSolution