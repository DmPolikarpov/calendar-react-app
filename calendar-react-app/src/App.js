import {useState} from 'react';
import './App.css';
import Navigation from './components/navigation/Navigation';
import Signin from './components/signin/Signin';
import Signup from './components/signup/Signup';
import Calendar from './components/calendar/Calendar';

function App() {
  const [route, setRoute] = useState('signin');
  
  let onRedirect = (newRoute) => {
    setRoute(newRoute);
  }

  if (route === 'index') {
    return (
      <div className="App">
        <Navigation currentRoute = { route } onRedirect = { onRedirect } />
        <Calendar />
      </div>
    )
  } else if (route === 'signin') {
    return (
      <div className="App">
        <Navigation currentRoute = { route } onRedirect = { onRedirect } />
        <Signin onRedirect = { onRedirect }/>
      </div>
    )
  } else {
    return (
      <div className="App">
        <Navigation currentRoute = { route } onRedirect = { onRedirect } />
        <Signup onRedirect = { onRedirect }/>
      </div>
    )
  }
}

export default App;
