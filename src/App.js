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
import { useEffect, useState } from "react";
import { format } from "date-fns";

function App() {
  const [search, setSearch] = useState("");
  const [searchPosts, setSearchPosts] = useState([]);

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

  useEffect(() => {
    const filteredPosts = posts.filter(
      (post) =>
        post.body.toLowerCase().includes(search.toLowerCase()) ||
        post.title.toLowerCase().includes(search.toLowerCase())
    );

    setSearchPosts(filteredPosts.reverse());
  }, [posts, search]);

  const history = useNavigate();

  const [postTitle, setPostTitle] = useState("");
  const [postBody, setPostBody] = useState("");

  const handleDelete = (id) => {
    const nonremovedposts = posts.filter((post) => post.id != id);
    setPosts(nonremovedposts);
    history("/");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const id = posts.length > 0 ? posts[posts.length - 1].id + 1 : 1;

    const newpost = {
      id: id,
      title: postTitle,
      datetime: format(new Date(), "MMMM dd, yyyy pp"),
      body: postBody,
    };

    setPosts([...posts, newpost]);
    setPostBody("");
    setPostTitle("");
    history("/");
  };

  return (
    <div className="App">
      <Header title="React JS Blog" />
      <Nav search={search} setSearch={setSearch} />

      <Routes>
        <Route index element={<Home posts={searchPosts} />} />
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
          <Route
            path="post"
            element={
              <NewPost
                handleSubmit={handleSubmit}
                postTitle={postTitle}
                setPostTitle={setPostTitle}
                postBody={postBody}
                setPostBody={setPostBody}
              />
            }
          />
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
