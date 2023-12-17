import './App.css';
import Header from './components/1-header/Header';
import About from './components/2-about/About';
import Testimonials from './components/3-testimonials/Testimonials';
import Features from './components/4-features/Features';
import Contents from './components/5-contents/Contents';
import Princing from './components/6-pricing/Pricing';
import Cta from './components/7-cta/Cta';
import Blog from './components/8-blog/Blog';
import Footer from './components/9-footer/Footer';

function App() {
  return (
    <div>
      <Header/>
      <About/>
      <Testimonials/>
      <Features/>
      <Contents/>
      <Princing/>
      <Cta/>
      <Blog/>
      <Footer/>
    </div>
  );
}

export default App;
