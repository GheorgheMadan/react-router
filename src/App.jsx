import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// LAYOUT
import DefaultLayout from "./layouts/DefaultLayout";

// PAGES 
import HomePage from "./pages/HomePage"
import PostsPage from "./pages/PostsPage"
import AboutPage from "./pages/AboutPage"
import SeeMorePage from "./pages/SeeMorePage"

// main components
// PostsCreate.jsx
import PostsCreate from "./components/mainComponents/PostsCreate";
import PostsDetail from "./components/mainComponents/PostsDetail";
// CSS
import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* QUESTO è IL LAYOUT DI DEFAULT */}
          <Route element={<DefaultLayout />}>
            {/* LA ROUTE DELLA HOME PAGE */}
            <Route path="/" element={<HomePage />}></Route>
            {/* LINK DEI POSTS */}
            <Route path="/posts" >
              <Route index element={<PostsPage />}></Route>
              <Route path="create" element={<PostsCreate />}></Route>
              <Route path=":id" element={<PostsDetail />} />
            </Route>
            <Route path="chiSiamo" element={<AboutPage />}></Route>
            <Route path="scopriDiPiu" element={<SeeMorePage />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
