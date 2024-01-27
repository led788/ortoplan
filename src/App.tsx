import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Step1 from './components/Step1'
import Login from './components/Login.tsx'
import Start from "./components/Start.tsx";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/login" element={<Login />} />
        <Route path="/step1" element={<Step1 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
