import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/about";
import Footer from "./components/footer";
import Home from "./components/home";
import Navbar from "./components/navbar";
import SignUp from "./components/signUp";
import SignIn from "./components/signIn";
import { useState } from "react";
import usersService from "./services/usersService";
import SignOut from "./components/signOut";

function App() {
  const [user, setUser] = useState(usersService.getUser());

  const refreshUser = () => {
    setUser(usersService.getUser());
  };

  const login = async (credentials) => {
    const response = await usersService.loginUser(credentials);
    refreshUser();
    return response;
  };

  const logout = () => {
    usersService.logout();
    refreshUser();
  };

  return (
    <div className="App d-flex flex-column min-vh-100">
      <header>
        <Navbar user={user} />
      </header>
      <main className="flex-fill container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route
            path="/sign-in"
            element={<SignIn user={user} onSubmit={login} />}
          />
          <Route path="/sign-out" element={<SignOut onSignOut={logout} />} />
          <Route path="/sign-up" element={<SignUp user={user} />} />
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
