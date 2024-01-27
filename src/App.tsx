import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Step1 from './components/Step1'
import Login from './components/Login.tsx'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/step1" element={<Step1 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
