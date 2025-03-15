import logo from "./logo.svg";
import "./App.css";
import Home from "./Home";
import Header from "./Header";
import Footer from "./Footer";
import Nav from "./Nav";
import About from "./About";
import NotFound from "./NotFound";
import { Routes, Route } from "react-router";
import AuthLayout from "./AuthLayout";
import Login from "./Login";
import Register from "./Register";
import ConcertsHome from "./ConcertsHome";
import City from "./City";
import Trending from "./Trending";
import NewPost from "./NewPost";
import PostPage from "./PostPage";
import PostLayout from "./PostLayout";

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />

      <Routes>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />

        <Route element={<AuthLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>

        <Route path="concerts">
          <Route index element={<ConcertsHome />} />
          <Route path=":city" element={<City />} />
          <Route path="trending" element={<Trending />} />
        </Route>

        <Route path="post">
          <Route index element={<NewPost />} />
          <Route path=":id" element={<PostPage />} />
        </Route>

        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
