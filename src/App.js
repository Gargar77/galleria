import './App.css';

import './pages/homepage/homepage.component';
import Homepage from './pages/homepage/homepage.component';

import Nav from './components/nav/nav.component';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Homepage/>
    </div>
  );
}

export default App;
