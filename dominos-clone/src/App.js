import logo from './logo.svg';
import './App.css';
import Navbar from "./Components/Navbar/navbar";
import Footer from './Components/Footer/footer';
import Homepage from "./Components/Homepage/homepage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Homepage />
      <Footer />
    </div>
  );
}

export default App;
