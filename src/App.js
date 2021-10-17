import './App.css';

import Header from './features/layout/Header.js';
import Footer from './features/layout/Footer.js';

import Carousel from './features/sectors/Carousel';
import Showcase from './features/sectors/Showcase';
import Calculator from './features/sectors/Calculator';

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
