
function CarouselItem(props) {
  return (
      <div className="col">
        <div className="card shadow-sm">
          <div className="CarouselItemBoxTitle">
            {props.title}  
          </div>
          <div className="card-body">
            <p className="card-text">
              {props.text}  
            </p>
          </div>
        </div>
      </div>
  ) ;
}

function Carousel() {
    return (
      <section className="container-fluid text-center my-4 py-4 bg-primary">
        <h1 className="text-light mb-5">Projetos e Templates</h1>
        <div className="album">
          <div className="container">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
              <CarouselItem title="Front-End Dev" text="React, Vue.js além de Sass, Bootstrap e entre outras"/>
              <CarouselItem title="Back-End Dev" text="Desenvolvimento feito em PHP, Java, C# ou Python"/>
              <CarouselItem title="CMS" text="WordPress, WooCommerce, Joomla e entre outros"/>
              <CarouselItem title="Mobile Dev" text="Desenvolvimento feito em Java, Kotlin, ReactNative e etc"/>
              <CarouselItem title="GameMaker" text="Desenvolvimento de Jogos em multiplataformas"/>
              <CarouselItem title="MultiPlatform Desktop" text="Desenvolvimento Desktop em multiplataformas"/>
            </div>
          </div>
        </div>
    </section>
    );
  }


  export default Carousel;