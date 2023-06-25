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
import ProtectedRoute from "./components/common/protectedRoute";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CardCreate from "./components/cardCreate";
import CardDelete from "./components/cardDelete";

function App() {
  return (
    <div className="App d-flex flex-column min-vh-100 ">
      <ToastContainer />
      <header>
        <Navbar />
      </header>
      <main className="flex-fill container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="/sign-in" element={<SignIn rederect="/" />} />
          <Route path="/sign-out" element={<SignOut rederect="/" />} />
          <Route path="/sign-up" element={<SignUp rederect="/sign-in" />} />
          <Route path="/sign-up-biz" element={<SignUpBiz rederect="/" />} />
          <Route
            path="/bizCards"
            element={
              <ProtectedRoute onlyBiz>
                <BizCards />
              </ProtectedRoute>
            }
          />
          <Route
            path="/card-create"
            element={
              <ProtectedRoute onlyBiz>
                <CardCreate />
              </ProtectedRoute>
            }
          />
          <Route
            path="/bizCardsz/card-delete/:id"
            element={
              <ProtectedRoute onlyBiz>
                <CardDelete />
              </ProtectedRoute>
            }
          />
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
