import logo from "./logo.svg";
import "./App.css";
import Home from "./Home";
import Header from "./Header";
import Footer from "./Footer";
import Nav from "./Nav";
import About from "./About";
import NotFound from "./NotFound";
import { Routes, Route, useNavigate } from "react-router";
import AuthLayout from "./AuthLayout";
import Login from "./Login";
import Register from "./Register";
import ConcertsHome from "./ConcertsHome";
import City from "./City";
import Trending from "./Trending";
import NewPost from "./NewPost";
import PostPage from "./PostPage";
import PostLayout from "./PostLayout";
import SubArea from "./SubArea";
import { useState } from "react";

function App() {
  const [search, setSearch] = useState("");
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "My First Post",
      datetime: "July 01, 2021 11:17:36 AM",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!",
    },
    {
      id: 2,
      title: "My 2nd Post",
      datetime: "July 01, 2021 11:17:36 AM",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!",
    },
    {
      id: 3,
      title: "My 3rd Post",
      datetime: "July 01, 2021 11:17:36 AM",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!",
    },
    {
      id: 4,
      title: "My Fourth Post",
      datetime: "July 01, 2021 11:17:36 AM",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!",
    },
  ]);

  const history = useNavigate();

  const handleDelete = (id) => {
    console.log(id);

    const nonremovedposts = posts.filter((post) => post.id != id);
    setPosts(nonremovedposts);
    history("/");
  };

  return (
    <div className="App">
      <Header title="React JS Blog" />
      <Nav search={search} setSearch={setSearch} />

      <Routes>
        <Route index element={<Home posts={posts} />} />
        <Route path="about" element={<About />} />

        <Route element={<AuthLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>

        <Route path="concerts">
          <Route index element={<ConcertsHome />} />
          <Route path=":city" element={<City />} />
          <Route path=":city/*" element={<SubArea />} />
          <Route path="trending" element={<Trending />} />
        </Route>

        <Route element={<PostLayout />}>
          <Route path="post" element={<NewPost />} />
          <Route
            path="post/:id"
            element={<PostPage posts={posts} handleDelete={handleDelete} />}
          />
        </Route>

        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
