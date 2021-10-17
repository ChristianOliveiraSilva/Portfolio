
function TotalSolution(props) {

    const name = sessionStorage.getItem('name')

    return (
        <>
            <div className="text-center">
                <h4>{name}, o projeto está em analise e entraremos em contato em breve</h4>
                <p>Os valores e datas podem variar a partir da negocioação e do levantamento de requisitos</p>
                <div className="row my-3">
                    <div className="col-6 my-2">
                        Nome do solicitante:
                    </div>
                    <div className="col-6 my-2">
                        {name}
                    </div>
                    <div className="col-6 my-2">
                        Valor total extimado:
                    </div>
                    <div className="col-6 my-2">
                        R$ {props.total}
                    </div>
                </div>
            </div>
        </>
    )
}
export default TotalSolution;
