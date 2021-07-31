import './App.css';
import './pages/homepage/homepage.component';
import Homepage from './pages/homepage/homepage.component';
import {withRouter} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Homepage/>
    </div>
  );
}

export default withRouter(App);
