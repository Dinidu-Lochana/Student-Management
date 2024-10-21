
import './App.css';
import AddStudent from './components/AddStudent';
import CounterClass from './components/CounterClass';
import CounterFunction from './components/CounterFunction';
import AllStudents from './components/AllStudents';
import Header from './components/Header';
import {BrowserRouter as Router, Route} from "react-router-dom"

function App() {
  return (
    <Router>
      <div className="App">
      <Header/>
      <Route path='/add' exact component={AddStudent} />
      <Route path='/' exact component={AllStudents} />

      </div>
    </Router>
    
  );
}

export default App;
