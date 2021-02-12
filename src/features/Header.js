  
  function Header() {
      return (
          <header>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full absolute text-indigo-500 top-0" style={{maxHeight: '200px', color: 'var(--bs-blue)'}} preserveAspectRatio="none"><path fill="currentColor" d="M0,64L40,101.3C80,139,160,213,240,229.3C320,245,400,203,480,176C560,149,640,139,720,154.7C800,171,880,213,960,224C1040,235,1120,213,1200,213.3C1280,213,1360,235,1400,245.3L1440,256L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path></svg>

            <section className="container" style={{margin: '55px auto 255px'}}>
                <h1><span className="text-primary">Light</span> <small>Web Co.</small></h1>
                <p>Especialista em desenvolver sistemas e soluções para seus problemas.</p>
        
                <a href="">
                    <button className='btn p-3' style={{color: 'white', backgroundColor: 'var(--bs-blue)'}}>Conhecer Soluções</button>
                </a>
            </section>
          </header>
      );
    }
  
  export default Header;