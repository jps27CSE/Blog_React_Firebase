import "./App.css";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import LandingPage from "./pages/landingPage/landingPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/loginPage/loginPage";
import SignupPage from "./pages/SignupPage/SignupPage";
import MainPage from "./pages/mainPage/MainPage";
import FullBlogPage from "./pages/FullBlogPage/FullBlogPage";
import { useState } from "react";
import CreatePost from "./pages/CreatePost/CreatePost";

const App = () => {
  const [isAuth, setIsAuth] = useState(false);

  return (
    <BrowserRouter>
      <Header isAuth={isAuth} />
      <main>
        <Routes>
          <Route path="/" exact element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} setIsAuth={setIsAuth} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/blog" element={<MainPage />} />
          <Route path="/create" element={<CreatePost />} />
          <Route path="/article/:id" element={<FullBlogPage />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
