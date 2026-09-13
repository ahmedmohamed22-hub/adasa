import { Routes, Route } from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import Home from './Pages/Home/Home';
import Blog from './Pages/Blog/Blog';
import Article from './Pages/Article/Article';
import About from './Pages/About/About';
import 'tailwindcss';

function App() {
  return (
    <BrowserRouter basename="/adasa">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blog" element={<Blog />} />
          <Route path="post/:slug" element={<Article />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
