import './App.css';
import Landing from './pages/Landing';
import NavbarC from './components/NavbarC';
import UserSign from './pages/UserSign';
import FormCotizacion from './components/FormCotizacion';
import DashboardsC from './components/DashboardsC';

function App() {
  return (
    <div className="App">
      <NavbarC />
      <Landing />
      <FormCotizacion />
      <DashboardsC />
    </div>
  );
}

export default App;
