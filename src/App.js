import './App.css'
import { Routes, Route } from 'react-router-dom'
import MainHeader from './components/MainHeader'
import PostDetail from './pages/PostDetail'
import Welcome from './pages/Welcome'
import NotFound from './pages/NotFound'
import Posts from './pages/PostList'

function App() {
  return (
    <div>
      <MainHeader />
      <main>
        <Routes>
          <Route path="/" element={<Welcome />}></Route>
          <Route path="/welcome" element={<Welcome />}></Route>
          <Route path="/posts" element={<Posts />} exact></Route>
          <Route path="/posts/:id" element={<PostDetail />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </main>
    </div>
  )
}

export default App
