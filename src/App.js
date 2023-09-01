import './App.css';
import Landing from './pages/Landing';
import NavbarC from './components/NavbarC';
import UserSign from './pages/UserSign';
import FormCotizacion from './components/FormCotizacion';
import Comentarios from './components/Comentarios';

function App() {
  return (
    <div className="App">
      <NavbarC />
      <Landing />
      <FormCotizacion />
      <Comentarios />
    </div>
  );
}

export default App;
