import './App.css';
import Carousel from './features/Carousel.js';
import Showcase from './features/Showcase.js';
import Calculator from './features/Calculator.js';
import Footer from './features/Footer.js';
import Header from './features/Header.js';

function App() {
  return (
    <div className="App">
      <Header />
      <Carousel />
      <Showcase />
      <Calculator />
      <Footer />
    </div>
  );
}

export default App;
