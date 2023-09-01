import './App.css';
import Landing from './pages/Landing';
import NavbarC from './components/NavbarC';
import UserSign from './pages/UserSign';
import FormCotizacion from './components/FormCotizacion';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <NavbarC />
      <Landing />
      <FormCotizacion />
      <Footer />
    </div>
  );
}

export default App;
