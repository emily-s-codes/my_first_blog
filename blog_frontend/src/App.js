import './App.css';
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Homepage from './pages/Homepage';
import DetailPage from './pages/DetailPage';
import Admin from './pages/Admin';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ManagePosts from './pages/ManagePosts';
import AddPost from './pages/AddPost';
import AdminNavbar from './components/AdminNavBar';
import ScrollButton from './components/ScrollButton';
import EditPost from './pages/EditPost';

function App() {

  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetch('http://localhost:9999/api/blog')
      .then(res => res.json())
      .then(data => setPosts(data))
      .catch(err => console.log('catch in fetch in app.js', err))
  }, [])

  const deletePost = (index) => {
    posts.splice(index, 1)
    console.log('delete called')
    console.log(posts)
    fetch('http://localhost:9999/api/blog', {
      method: 'DELETE'
    })
    setPosts(posts)
  }

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path={"/"} element={<><Navbar /><Homepage posts={posts} /></>} />
          <Route path={"/blog/:entry"} element={<><Navbar /><DetailPage posts={posts} /></>} />
          <Route path={"/admin/login"} element={<><AdminNavbar /><Admin setPosts={setPosts} /></>} />
          <Route path={"/admin/manage"} element={<><AdminNavbar /><ManagePosts deletePost={deletePost} posts={posts} setPosts={setPosts} /></>} />
          <Route path={"/admin/add"} element={<><AdminNavbar /><AddPost setPosts={setPosts} /></>} />
          <Route path={"/admin/edit/:id"} element={<><AdminNavbar /><EditPost posts={posts} setPosts={setPosts} /></>} />
        </Routes>
        <ScrollButton />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
