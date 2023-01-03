import './App.css';
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Homepage from './pages/Homepage';
import DetailPage from './pages/DetailPage';
import Admin from './pages/Admin';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {

  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetch('http://localhost:9999/api/blog')
      .then(res => res.json())
      .then(data => setPosts(data))
  }, [])
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path={"/"} element={<Homepage posts={posts} />} />
          <Route path={"/blog/:entry"} element={<DetailPage posts={posts} />} />
          <Route path={"/admin"} element={<Admin setPosts={setPosts} />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
