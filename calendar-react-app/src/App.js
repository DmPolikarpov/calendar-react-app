import './App.css';
import Navigation from './components/navigation/Navigation';
import Signin from './components/signin/Signin';
import Calendar from './components/calendar/Calendar';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Signin />
      <Calendar />
    </div>
  );
}

export default App;
