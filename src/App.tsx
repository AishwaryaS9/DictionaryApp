import Main from './components/Main';
import Navbar from './components/Navbar';
import './App.css';
import RandomWordGenerator from './components/RandomWordGenerator';
export default function App() {
  return (
    <div className="App" >
      <Navbar />
      <Main />
      <RandomWordGenerator />
    </div>
  );
}


