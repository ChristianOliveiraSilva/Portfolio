import { useState } from "react";

function ProjectDescription(props) {
    const [name, setName] = useState('')
    const [preference, setPreference] = useState(1)
    const [error, setError] = useState('')

    const nextHandle = () => {
        sessionStorage.setItem('name', name)
        props.setTotal(calculateTotal(props.total, preference))
        props.addPhase(1)
    }

    const calculateTotal = (total, preference) => {
        preference = parseInt(preference)
        switch(preference) {
            case 1:
                return total
            case 2:
                return total * preference
            case 3:
                return (total * (preference*2))
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
                <h4 className="mt-3">Nome do solicitante:</h4>
                <input type="text" className="form-control" placeholder="Seu nome ou nome da empresa" value={name} onChange={(e) => setName(e.target.value)} />

                <h4 className="mt-3">Defina seu projeto:</h4>
                <textarea className="form-control" rows="3" placeholder="Descrição total do projeto"></textarea>

                <h4 className="mt-3">Descrição (PDF, DOCX ou outros):</h4>
                <input type="file" className="form-control" placeholder="Prazo" />
            </div>
            <div className="col-6">
                <h4 className="mt-3">Contato do solicitante:</h4>
                <input type="text" className="form-control" placeholder="Telefone ou e-mail" />

                <h4>Prazo:</h4>
                <input type="date" className="form-control" placeholder="Prazo" />

                <h4 className="mt-3">Preferencia de modalidade:</h4>
                <select className="form-select" name="preference" value={preference} onChange={(e) => setPreference(e.target.value)}>
                    <option value="1" >Dedicação parcial</option>
                    <option value="2" >Dedicação total</option>
                    <option value="3" >Dedicação exclusiva</option>
                </select>

                <h4 className="mt-3">Prototipagem (XD, PSD ou figma):</h4>
                <input type="file" className="form-control" placeholder="Prazo" />

                <div className="text-end mt-4">
                    <button className="btn btn-primary m-1" onClick={nextHandle}>Próximo</button>
                </div>
            </div>
        </div>
    )
}
export default ProjectDescription;
