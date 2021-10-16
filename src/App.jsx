import './App.css';
import Header from './components/Header.jsx';
import Aside  from './components/Aside.jsx';
import Main from './components/Main.jsx';


function App() {
  
  
  return (
    <section className="App">
      < Header />
      <section className="body">
        <Aside />
        <Main />
      </section>
    </section>
  );
}

export default App;
