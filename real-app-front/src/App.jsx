import "./App.css";
import Footer from "./components/footer";
import Navnbar from "./components/navbar";

function App() {
  return (
    <div className="App d-flex flex-column min-vh-100">
      <header>
        <Navnbar />
      </header>
      <main className="flex-fill container">
        Main
        <div className="text-danger">Hello</div>
        <i className="bi bi-person"></i>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
