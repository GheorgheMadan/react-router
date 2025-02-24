import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";
import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route></Route>
            <Route></Route>
            <Route></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
