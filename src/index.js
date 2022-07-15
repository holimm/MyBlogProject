import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./page/layout";
import Home from "./page/home";
import AboutMe from "./page/aboutme";
import Login from "./page/login";
import DetailBlog from "./page/detail-blog";
import WriteBlog from "./page/write-blog";

export default function App() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="aboutme" element={<AboutMe />} />
          </Route>
        </Routes>
        <Routes>
            <Route path="login" element={<Login />} />
            <Route path="/detail-blog/:id" element={<DetailBlog />} />
            <Route path="/write-blog" element={<WriteBlog />} />
        </Routes>
      </BrowserRouter>
    );
  }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

// const header = ReactDOM.createRoot(document.getElementById('header'));
// header.render(<Layout />);
// const footer = ReactDOM.createRoot(document.getElementById('footer'));
// footer.render(<Footer />);