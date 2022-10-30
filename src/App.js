import './App.scss';
import NavBar from './components/NavBar/NavBar';
import NavigationDots from './components/NavigationDots';
import SocialMedia from './components/SocialMedia';
import {About, Footer, Header, Skills, Testimonial, Work  } from './container'

function App() {
  return (
    <div className='app'>
      <NavBar/>
      <Header/>
      <About/>
      <Skills/>
      <Work/>
      <Footer/>
      <SocialMedia/>
      <NavigationDots/>
    </div>
  );
}

export default App;
