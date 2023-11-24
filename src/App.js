import { Route, Routes } from 'react-router-dom'
import './App.scss'
import About from './components/About/About'
import Blog from './components/Blog/Blog'
import { Contact } from './components/Contact/Contact'
import Home from './components/Home/Home'
import Layout from './components/Layout/Layout'
import SingleBlog from './components/SingleBlog/SingleBlog'
import Projects from './components/Projects/Projects'
import Skills from './components/Skills/Skills'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<SingleBlog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
