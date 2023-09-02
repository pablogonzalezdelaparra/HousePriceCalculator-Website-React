import './App.css';
import RoutesPage from './pages/RoutesPage';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <RoutesPage />
    </div>
  );
}

export default App;
