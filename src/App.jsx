import { BrowserRouter, Routes, Route } from "react-router-dom";

// LAYOUT
import DefaultLayout from "./layouts/DefaultLayout";

// PAGES 
import HomePage from "./pages/HomePage"
import PostsPage from "./pages/PostsPage"
import AboutPage from "./pages/AboutPage"
import SeeMorePage from "./pages/SeeMorePage"

// CSS
import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="posts" element={<PostsPage />}></Route>
            <Route path="chiSiamo" element={<AboutPage />}></Route>
            <Route path="scopriDiPiu" element={<SeeMorePage />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
