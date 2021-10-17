
function Footer() {
    return (
    <div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="absolute text-indigo-500 top-0 svg-icon-wave transform" style={{}} preserveAspectRatio="none"><path fill="currentColor" d="M0,64L40,101.3C80,139,160,213,240,229.3C320,245,400,203,480,176C560,149,640,139,720,154.7C800,171,880,213,960,224C1040,235,1120,213,1200,213.3C1280,213,1360,235,1400,245.3L1440,256L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path></svg>
        <footer className="container-fluid ">
          <div className="container">
            <div className="row">
              <div className="col-3">
                img logo
                <small className="d-block mb-3">© 2018-{ new Date().getFullYear() }</small>
              </div>
              <div className="col-3">
                <h5>Features</h5>
                <ul className="list-unstyled text-small">
                  <li><a href="#">GitHub</a></li>
                  <li><a href="#">LinkedIn </a></li>
                </ul>
              </div>
              <div className="col-3">
                <h5>Recursos</h5>
                <ul className="list-unstyled text-small">
                  <li><a href="#">Projetos Feitos</a></li>
                  <li><a href="#">Projetos futuros</a></li>
                </ul>
              </div>
              <div className="col-3">
                <h5>Sobre</h5>
                <ul className="list-unstyled text-small">
                  <li><a href="#">Criador</a></li>
                  <li><a href="#">Contato</a></li>
                  <li><a href="#">Termos</a></li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
    </div>
    );
  }


  export default Footer;