import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import AboutMe from './components/aboutme/AboutMe';
import Employee from './components/employeeinfo/Employee';
import PresidentVotes from './components/presidents/PresidentVotes'

function App() {
  return (
    <div className="App">
      <Header />
      <AboutMe />
      <Employee/>
      <PresidentVotes/>
      <Footer />
    </div>
  );
}

export default App;
