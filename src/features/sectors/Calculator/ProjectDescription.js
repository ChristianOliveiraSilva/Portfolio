import { useState } from "react";

function ProjectDescription(props) {
    const [error, setError] = useState('')

    const nextHandle = () => {

        props.addTotal(value)
        props.addPhase(1)
    }

    return (
        <div className="row">
            {error &&
                <div className="col-12">
                    <p className="error">{error}</p>
                </div>
            }

            <div className="col-6">
                <h4>Defina seu projeto:</h4>
                <textarea className="form-control" rows="3" placeholder="Descrição total do projeto"></textarea>

                <h4 className="mt-3">Descrição (PDF, DOCX ou outros):</h4>
                <input type="file" className="form-control" placeholder="Prazo" />
            </div>
            <div className="col-6">
                <h4>Prazo:</h4>
                <input type="date" className="form-control" placeholder="Prazo" />

                <h4 className="mt-3">Preferencia de modalidade:</h4>
                <select className="form-select">
                    <option value="1">Dedicação parcial</option>
                    <option value="2">Dedicação total</option>
                    <option value="3">Dedicação exclusiva</option>
                </select>

                <h4 className="mt-3">Prototipagem (XD, PSD ou figma):</h4>
                <input type="file" className="form-control" placeholder="Prazo" />

                <div className="text-end">
                    <button className="btn btn-primary m-1" onClick={nextHandle}>Próximo</button>
                </div>
            </div>
        </div>
    )
}
export default ProjectDescription;
