import { Routes, Route } from 'react-router-dom'

import Main from './pages/Main'
import About from './pages/About'

import Header from './components/Header'
import './App.css'

const App = () => {
  return (
    <div className="App text-primary">
      <div className="container relative">
        <Header />

        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/techStack" element={<TechStack />} /> */}
          {/* <Route path="/projects" element={<Projects />} /> */}
          {/* <Route path="/contacts" element={<Contacts />} /> */}
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </div>
    </div>
  )
}

export default App
