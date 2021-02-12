
function ShowcaseItem(props) {
  return (
    <div className="col">
      <img className="ShowcaseItemImg" src={"img/" + props.src} title={props.title} alt={props.title} />
    </div>
  ) ;
}

function Showcase() {
    return (
      <section className="container" style={{margin: '60px auto'}}>
        <h2 className="text-center mb-5">Tecnologias que usamos</h2>
        <div className="container-fluid">
          <div className="row">
            <ShowcaseItem src="react.png" title="react"/>
            <ShowcaseItem src="vue.png" title="vue"/>
            <ShowcaseItem src="java.png" title="java"/>
            <ShowcaseItem src="python.png" title="python"/>
            <ShowcaseItem src="javascript.png" title="javascript"/>
            <ShowcaseItem src="php.png" title="php"/>
            <ShowcaseItem src="jquery.png" title="jquery"/>
            <ShowcaseItem src="bootstrap.png" title="bootstrap"/>
            <ShowcaseItem src="sql.png" title="sql"/>
            <ShowcaseItem src="nosql.png" title="nosql"/>
          </div>
        </div>
        <hr className="divider" />
      </section>
    );
  }

export default Showcase;