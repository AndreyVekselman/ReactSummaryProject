import "./App.css";
import About from "./components/about";
import Footer from "./components/footer";
import Home from "./components/home";
import Navnbar from "./components/navbar";

function App() {
  return (
    <div className="App d-flex flex-column min-vh-100">
      <header>
        <Navnbar />
      </header>
      <main className="flex-fill container">
        <Home />
        <About />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
