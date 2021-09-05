import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Education from './components/Education';
import Interests from './components/Interests';
import Footer from './components/Footer';

function App() {
  return (
    <><main className = "main">
      <Navbar/>
      <Home/>
      <About/>
      <Education/>
      <Interests/>
      <Footer/>
    </main>
    </>
  );
}

export default App;
