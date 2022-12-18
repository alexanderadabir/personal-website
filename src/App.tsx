import { Routes, Route } from 'react-router-dom'

import Main from './pages/Main'
import About from './pages/About'
import TechStack from './pages/TechStack'
import Projects from './pages/Projects'
import Contacts from './pages/Contacts'
import NotFound from './pages/NotFound'

import Header from './components/Header'
import './App.css'

const App = () => {
  return (
    <div className="container text-primary relative">
      <Header />

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/techstack" element={<TechStack />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App
