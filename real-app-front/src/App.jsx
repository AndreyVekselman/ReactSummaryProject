import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/about";
import Footer from "./components/footer";
import Home from "./components/home";
import Navbar from "./components/navbar";
import SignUp from "./components/signUp";
import SignIn from "./components/signIn";
import SignOut from "./components/signOut";
import SignUpBiz from "./components/signUpBiz";
import BizCards from "./components/bizCards";

function App() {
  return (
    <div className="App d-flex flex-column min-vh-100 ">
      <header>
        <Navbar />
      </header>
      <main className="flex-fill container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="/sign-in" element={<SignIn rederect="/" />} />
          <Route path="/sign-out" element={<SignOut />} />
          <Route path="/sign-up" element={<SignUp rederect="/sign-in" />} />
          <Route path="/sign-up-biz" element={<SignUpBiz rederect="/" />} />
          <Route path="/bizCards" element={<BizCards />} />
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
