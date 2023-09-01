import './App.css';
import Landing from './pages/Landing';
import NavbarC from './components/NavbarC';
import UserSign from './pages/UserSign';
import FormCotizacion from './components/FormCotizacion';

function App() {
  return (
    <div className="App">
      <NavbarC />
      <Landing />
      <FormCotizacion />
    </div>
  );
}

export default App;
